const form          = document.getElementById('converterForm');
const fromUnitSel    = document.getElementById('fromUnit');
const toUnitSel      = document.getElementById('toUnit');
const inputValueEl   = document.getElementById('inputValue');
const outputValueEl  = document.getElementById('outputValue');
const errorMessageEl = document.getElementById('errorMessage');
const spinnerEl      = document.getElementById('spinner');
const convertBtn     = document.getElementById('convertBtn');
const swapBtn        = document.getElementById('swapBtn');
const resetBtn       = document.getElementById('resetBtn');
const copyBtn        = document.getElementById('copyBtn');
const themeToggleBtn = document.getElementById('themeToggle');
const liveClockEl    = document.getElementById('liveClock');

const ABSOLUTE_ZERO_C = -273.15;
function toCelsius(value, unit) {
  switch (unit) {
    case 'celsius':    return value;
    case 'fahrenheit': return (value - 32) * (5 / 9);
    case 'kelvin':     return value - 273.15;
    default:           return value;
  }
}

function fromCelsius(celsius, unit) {
  switch (unit) {
    case 'celsius':    return celsius;
    case 'fahrenheit': return celsius * (9 / 5) + 32;
    case 'kelvin':     return celsius + 273.15;
    default:           return celsius;
  }
}

function convertTemperature(value, fromUnit, toUnit) {
  const celsius = toCelsius(value, fromUnit);
  return fromCelsius(celsius, toUnit);
}

function roundTo2(value) {
  return Math.round(value * 100) / 100;
}

const UNIT_SYMBOLS = {
  celsius: '°C',
  fahrenheit: '°F',
  kelvin: 'K',
};
inputValueEl.addEventListener('input', () => {
  let raw = inputValueEl.value;
  raw = raw.replace(/[^0-9.\-]/g, '');

    raw = raw.replace(/(?!^)-/g, '');
  const firstDot = raw.indexOf('.');
  if (firstDot !== -1) {
    raw = raw.slice(0, firstDot + 1) + raw.slice(firstDot + 1).replace(/\./g, '');
  }

  inputValueEl.value = raw;
  if (errorMessageEl.classList.contains('show')) {
    clearError();
  }
});

function validateInput() {
  const raw = inputValueEl.value.trim();

  if (raw === '' || raw === '-' || raw === '.') {
    return { valid: false, value: null, message: 'Please enter a temperature value.' };
  }

  const numeric = Number(raw);

  if (Number.isNaN(numeric)) {
    return { valid: false, value: null, message: 'That doesn\u2019t look like a valid number.' };
  }
  const fromUnit = fromUnitSel.value;
  const celsius = toCelsius(numeric, fromUnit);
  if (celsius < ABSOLUTE_ZERO_C - 1e-9) {
    return {
      valid: false,
      value: null,
      message: `That's below absolute zero (${ABSOLUTE_ZERO_C}\u00b0C), the coldest temperature physically possible.`,
    };
  }

  return { valid: true, value: numeric, message: '' };
}

function showError(message) {
  errorMessageEl.textContent = message;
  errorMessageEl.classList.add('show');
  inputValueEl.classList.add('is-invalid');
}

function clearError() {
  errorMessageEl.textContent = '';
  errorMessageEl.classList.remove('show');
  inputValueEl.classList.remove('is-invalid');
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  handleConvert();
});

function handleConvert() {
  clearError();
  outputValueEl.classList.remove('landed');

  const { valid, value, message } = validateInput();

  if (!valid) {
    showError(message);
    outputValueEl.value = '';
    return;
  }
  spinnerEl.hidden = false;
  convertBtn.disabled = true;
  outputValueEl.value = '';

  setTimeout(() => {
    const fromUnit = fromUnitSel.value;
    const toUnit = toUnitSel.value;
    const result = roundTo2(convertTemperature(value, fromUnit, toUnit));

    outputValueEl.value = `${result} ${UNIT_SYMBOLS[toUnit]}`;
    outputValueEl.classList.add('landed');

    spinnerEl.hidden = true;
    convertBtn.disabled = false;
  }, 500); 
}

swapBtn.addEventListener('click', () => {
  const tempUnit = fromUnitSel.value;
  fromUnitSel.value = toUnitSel.value;
  toUnitSel.value = tempUnit;

  const outputNumeric = parseFloat(outputValueEl.value);
  if (!Number.isNaN(outputNumeric)) {
    inputValueEl.value = outputNumeric;
    outputValueEl.value = '';
    outputValueEl.classList.remove('landed');
  }

  clearError();
});

resetBtn.addEventListener('click', () => {
  form.reset();
  fromUnitSel.value = 'celsius';
  toUnitSel.value = 'fahrenheit';
  outputValueEl.value = '';
  outputValueEl.classList.remove('landed');
  clearError();
  copyBtn.classList.remove('copied');
});


copyBtn.addEventListener('click', async () => {
  const text = outputValueEl.value.trim();
  if (!text) return;

  try {
    await navigator.clipboard.writeText(text);
    copyBtn.classList.add('copied');
    setTimeout(() => copyBtn.classList.remove('copied'), 1500);
  } catch (err) {
    outputValueEl.select();
    document.execCommand('copy');
    copyBtn.classList.add('copied');
    setTimeout(() => copyBtn.classList.remove('copied'), 1500);
  }
});
let currentTheme = 'dark';

themeToggleBtn.addEventListener('click', () => {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  themeToggleBtn.setAttribute('aria-pressed', String(currentTheme === 'light'));
});

function updateClock() {
  const now = new Date();
  const formatted = now.toLocaleString(undefined, {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  liveClockEl.textContent = formatted;
  liveClockEl.setAttribute('datetime', now.toISOString());
}

updateClock();
setInterval(updateClock, 1000);


const footerYearEl = document.getElementById('footerYear');
if (footerYearEl) {
  footerYearEl.textContent = new Date().getFullYear();
}