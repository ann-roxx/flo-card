import "./main.js";
import "./homework-5.js";
import "./homework-6.js";
import "./homework-7.js";
import "./homework-8.js";
import "./homework-9.js";

// 2. Импортировать предыдущие файлы .js в главный методом side-efect import

// 3. Cоздать функцию конструктор с помощью классов + реализовать наследовательность.

class Alco {
  constructor(brand, type){
  this.brand = brand;
  this.type = type; 
  }

  stock() {
    console.log(`${this.brand}, ${this.type} in stock`)
  }
}

class AlcoPremium extends Alco {
  constructor(brand, type, price) {
    super(brand, type)
    this.price = price;
    }

  buy() {
    console.log(`${this.brand}, ${this.type} buy now!`)
  }

  stock() {
    super.stock()
    console.log(`premium price = ${this.price}`)
  }
}

const tekila = new Alco("B16", "medium")
const vodka = new Alco("Elbrus", "strong")
tekila.stock()
vodka.stock()

const visky = new AlcoPremium("Sundrello", "medium-strong", "86$")
visky.stock()


class Flower {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  choose () {
    console.log(`${this.name}, ${this.color} choose us!`)
  }
}

class Tulip extends Flower {
  constructor(name, color, country) {
    super(name, color);
    this.country = country
  }

  showCountry() {
    console.log(`${this.name}, ${this.color} from ${this.country}`)
  }
}

const belgiumTulip = new Tulip("Kasandra", "pink", "Belgium")
const notherlandTulip = new Tulip("Lulu", "white", "Notherland")
belgiumTulip.showCountry()
notherlandTulip.showCountry()
