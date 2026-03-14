import "./Modal.js";
import "./Form.js";
import "./homework-4.js";
import "./homework-5.js";
import "./homework-6.js";
import "./homework-7.js";
import "./homework-8.js";
import "./homework-9.js";
import "./alco.js";
import "./alcoPremium.js";

// 2. Импортировать предыдущие файлы .js в главный main.js  методом side-efect import

// 3. Cоздать функцию конструктор с помощью классов + реализовать наследовательность.
// правило - 1 класс = 1 файл

const tekila = new Alco("B16", "medium")
const vodka = new Alco("Elbrus", "strong")
tekila.stock()
vodka.stock()

const visky = new AlcoPremium("Sundrello", "medium-strong", "86$")
visky.stock()
