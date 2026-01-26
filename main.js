const productCards = document.querySelectorAll('.style-card');
const changeAllCardColorButton= document.querySelector('#change-all-card-color-button');
const blueColorHash = '#30eed5';
const greenColorHash = '#4ec40a';

//Покраска всех карточек

changeAllCardColorButton.addEventListener('click', () => {
  productCards.forEach((card) =>card.style.background = blueColorHash);
})

//Покраска первой карточки

const firstProductCard = document.querySelector('.style-card');
const changeFirstCardColorButton= document.querySelector('#change-first-card-color-button');

changeFirstCardColorButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = greenColorHash;
})

//Открыть Google

const openGoogleButton = document.querySelector('#open-google-button');

openGoogleButton.addEventListener('click', openGoogle);


function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?')

  if (answer === true) {
    window.open('https://google.com');
  } else {
    return;
  }
}

// Окно для консоли

const outputLogButton = document.querySelector('#output-console-log');

outputLogButton-addEventListener('click', () => outputConsoleLog ('ДЗ №4'))

function outputConsoleLog(massage) {
  alert(massage)
  console.log(massage)
}

// Заголовок в консоли

const mainTitleOutputLog = document.querySelector('.title')

mainTitleOutputLog.addEventListener('mouseover', function () {
  console.log(maintitle.textContent);
})

// Двухцветная кнопка

const changeColorButton = document.querySelector ('#color-toggle-button')

changeColorButton.addEventListener('click', function () {
  changeColorButton.classList.toggle('color-toggle-button');
})