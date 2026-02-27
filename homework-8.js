import { cards } from "./cards.js";
console.log(cards);

// 3. Cоздать и реализовать шаблон для продуктовых карточек.

const productCardsTamplate = document.getElementById("cards-template");
const cardsList = document.getElementById("cards-list");

// 4. Используя метод .reduce(), получить массив объектов, где ключем является 
// название продукта, а значением - его описание.

const cardsReduce = cards.reduce((acc, cards) => {
  acc[cards.name] = cards.description;
  return acc;
}, {});

console.log(cardsReduce);

// 5. Cоздать 2 функции, одна возвращает количество карточек, которое нужно ввести, 
// другая - рендерить эти карточки (принимая массив аргументом).

/*function getCardCount() {
  let count = prompt("Сколько карточек отобразить? От 1 до 5");
  if (count >= 1 && count <= 5) {
    return parseInt(count);
  } else {
    alert("Некорректный ввод. Введите число от 1 до 5.");
    return getCardCount();
  }
}

function renderCards(cards) {
  cardsList.innerHTML = "";

  cards.forEach(card => {
  const cardsClone = productCardsTamplate.content.cloneNode(true);

  const img = cardsClone.querySelector(".img-form");
  img.src = `${IMAGE}${card.picture}`;
  img.alt = card.name;

  cardsClone.querySelector(".product-category").textContent = `${card.category}`;
  cardsClone.querySelector(".product-name").textContent = `${card.name}`;
  cardsClone.querySelector(".description").textContent = `${card.description}`;

  const compoundItems = cardsClone.querySelector(".compound");
  card.compound.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    compoundItems.appendChild(li);
  });

  cardsClone.querySelector(".price").textContent = `${card.price}`;
  cardsList.appendChild(cardsClone);
});
}
const IMAGE = "";
const count = getCardCount();
const cardsCount = cards.slice(0, count);
renderCards(cardsCount);*/
