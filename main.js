import "./homework-4.js";
import "./homework-5.js";
import "./homework-6.js";
import "./homework-7.js";
import "./homework-8.js";
import "./homework-9.js";
import { Alco } from "./alco.js";
import { AlcoPremium } from "./alcoPremium.js";
import { Drink } from "./drink.js";
import { Tea } from "./drinkTea.js";
import { HotChocolate } from "./drinkChocolate.js";
import { Tekila } from "./drinkTekila.js";
import { Cafe } from "./cafe.js";

// ДЗ №10
// 2. Импортировать предыдущие файлы .js в главный main.js  методом side-efect import

// 3. Cоздать функцию конструктор с помощью классов + реализовать наследовательность.
// правило - 1 класс = 1 файл

const tekila = new Alco("B16", "medium")
const vodka = new Alco("Elbrus", "strong")
tekila.stock()
vodka.stock()

const visky = new AlcoPremium("Sundrello", "medium-strong", "86$")
visky.stock()

// ДЗ №11

const greenTea = new Tea("SaiTi", "50g", "15$", "green", "midle", "India", 110)
console.log(greenTea.getInfo());
console.log(greenTea.getTemperature());
console.log(greenTea.serve());

const hotChoco = new HotChocolate("Truffel", "300ml", "10$", "dark", "70% cacao", "Belgium", 100)
console.log(hotChoco.getInfo());
console.log(hotChoco.getTemperature());
console.log(hotChoco.serve());

const newTekila = new Tekila("Sunrise", "1L", "85$", "premium", "40% alco", "USA", 15)
console.log(newTekila.getInfo());
console.log(newTekila.getTemperature());
console.log(newTekila.serve());

const cafe = new Cafe("Amanda", "Pula")
console.log(cafe.getInfo());
console.log(cafe.makeOrder(greenTea));
console.log(cafe.makeOrder(newTekila));
console.log(cafe.makeOrder(hotChoco));
