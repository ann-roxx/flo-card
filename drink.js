// Реализовать абстрактный класс Drink, класс должен содержать общие свойства
// 1) название, 2) размер, 3) цена, 4) температура (приватный).
// От него создавать наследников.

//Также наш класс должен содержать общие методы, такие как:
// 1) получить информацию про напиток,
// 2) получить температуру напитка,
// 3) установить температуру напитка,
// 4) приготовить напиток (приватный),
// 5) подать напиток.

export class Drink {
  #temperature;
  constructor(name, size, price) {
    this.name = name;
    this.size = size;
    this.price = price;
  }

  getInfo() {
    return [this.name, this.size, this.price].toString();
  }

  getTemperature() {
    return this.#temperature;
  }

  setTemperature(temperature) {
    this.#temperature = temperature;
  }

  #cookDrink() {
    return "Напиток готов"
  }

  serve() {
    const service = this.#cookDrink();
    return service + " и подан посетителю."
  }
}
