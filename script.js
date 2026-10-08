// 1
const colorForm = document.querySelector('form');

colorForm.addEventListener('change', (event) => {
  document.body.style.backgroundColor = event.target.value;
});

// 2
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
  const trimmedValue = nameInput.value.trim();
  nameOutput.textContent = trimmedValue === '' ? 'незнайомець' : trimmedValue;
});

const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', () => {
  console.log('Сработало событие blur!');
  console.log('Введено:', validationInput.value.length, 'Ожидалось:', validationInput.dataset.length);

  const requiredLength = Number(validationInput.dataset.length);
  const currentLength = validationInput.value.length;

  if (currentLength === requiredLength) {
    validationInput.style.borderColor = 'green';
  } else {
    validationInput.style.borderColor = 'red';
  }
});

// 3
const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

fontSizeControl.addEventListener('input', (event) => {
  text.style.fontSize = `${event.target.value}px`;
});