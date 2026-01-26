//Покраска всех карточек

const productCards = document.querySelectorAll('.style-card');
const AllCardColorButton= document.querySelector('#change-all-card-color-button');
const blueColorHash = '#30eed5';
const greenColorHash = '#4ec40a';

AllCardColorButton.addEventListener('click', () => {
  productCards.forEach((card) =>card.style.background = blueColorHash);
})

//Покраска первой карточки

const firstProductCard = document.querySelector('.style-card');
const FirstCardColorButton= document.querySelector('#change-first-card-color-button');

FirstCardColorButton.addEventListener('click', () => {
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

const outputLogButton = document.querySelector('#output-console-log')

outputLogButton.addEventListener('click', () => outputConsoleLog ('ДЗ №4'));

function outputConsoleLog(massage) {
  alert(massage)
  console.log(massage)
}

// Заголовок в консоли

const mainTitleOutputLog = document.querySelector('.title')

mainTitleOutputLog.addEventListener('mouseover', function () {
  console.log(mainTitleOutputLog.textContent);
})

// Двухцветная кнопка

const doubleColorButton = document.querySelector ('#color-toggle-button')

doubleColorButton.addEventListener('click', function () {
  doubleColorButton.classList.toggle('color-button--switch');
})
