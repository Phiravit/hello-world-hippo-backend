const button = document.getElementById('colorButton');
button.addEventListener('click', () => {
  document.body.style.background = getRandomColor();
});

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256); 
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Counter functionality
const counterValue = document.getElementById('counterValue');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
let count = 0;

incrementBtn.addEventListener('click', () => {
  count++;
  counterValue.textContent = count;
});

decrementBtn.addEventListener('click', () => {
  count--;
  counterValue.textContent = count;
});

// Text manipulator functionality
const textInput = document.getElementById('textInput');
const upperCaseBtn = document.getElementById('upperCaseBtn');
const textOutput = document.getElementById('textOutput');

upperCaseBtn.addEventListener('click', () => {
  const inputText = textInput.value;
  textOutput.textContent = inputText.toUpperCase();
});
