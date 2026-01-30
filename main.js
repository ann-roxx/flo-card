//Покраска всех карточек

const productCards = document.querySelectorAll('.style-card');
const allCardColorButton= document.querySelector('#all-cards-color-button');
const blueColorHash = '#30eed5';
const greenColorHash = '#4ec40a';

AllCardColorButton.addEventListener('click', () => {
  productCards.forEach((card) =>card.style.background = blueColorHash);
})

//Покраска первой карточки

const firstProductCard = document.querySelector('.style-card');
const firstCardColorButton= document.querySelector('#first-card-color-button');

firstCardColorButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = greenColorHash;
})

//Открыть Google

const openGoogleButton = document.querySelector('#google-button');

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

const outputLogButton = document.querySelector('#console-log-option')

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
