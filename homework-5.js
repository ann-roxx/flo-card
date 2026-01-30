//Создать функцию, где выводится название города и температура в консоль

function discribeWeather (city, temperature) {
  console.log(`Сейчас в ${city} температура - ${temperature} градусов по Цельсию`);
}

discribeWeather("Сплит", 24)

//Создать переменную и функцию к ней сo сравнением скорости света

const speedOfLight = 299792458;

function compareSpeed (speed) {
  if (speed > speedOfLight) {
    console.log(`Сверхсветовая скорость ${speed} м/с`);
  } else if (speed < speedOfLight) {
    console.log(`Субсветовая скорость ${speed} м/с`);
  } else {
    console.log(`Скорость света ${speed} м/с`);
  }
}

compareSpeed(355000000);
compareSpeed(180001234);
compareSpeed(299792458);

//Создать переменные и фунцию для преобреьения товара и сравнения цены

const product = "Ноутбук";
const price = 59600;

function buyProduct(budget) {
  if (budget > price) {
    console.log (`${product} приобретён. Спасибо за покупку!`);
  } else {
    const difference = price - budget;
    console.log(`Вам не хватает ${difference}, пополните баланс.`);
  }
}

buyProduct(60000);
buyProduct(59000);

//Создать функцию

function showMessage (name, massege) {
  console.log(`Привет ${name}, открывай свои ${massege}!`);
}

showMessage("Влад", "IT-курсы");

//Создать перменные

const bloging = "Блог";
const followers = 10000;

function getfollowers(monetisation) {
  if (monetisation > followers) {
    console.log (`Поздравляем, у вас ${followers} подписчиков! Ваш ${bloging} монетизирован!`);
  } else {
    const difference = followers - monetisation;
    console.log(`Вам не хватает ${difference} для подключения монетизации.`);
  }
}

getfollowers(10500);
getfollowers(9450);

const cosmetic = "Крем";
const age = 25;
function makeCorrectChoice(age) {
  if (age > 25) {
    console.log(`Этот ${cosmetic} подходит для девушкек ${age}+. Отличный выбор!`);
  } else {
    console.log(`Этот ${cosmetic} не подходит вашему типу кожи. Ваш возраст ${age} лет.`);
  }
}

makeCorrectChoice(26);
makeCorrectChoice(17);
