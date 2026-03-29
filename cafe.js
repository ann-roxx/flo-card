// Реализовать класс "Кафе". Он будет принимать 2 параметра, название кафе и его месторасположение.
// Реализуем 2 метода внутри него:
// 1) получить информацию про кафе
// 2) заказать напиток

// При заказе напитка передавать аргументом сам напиток
// и вызывать его внутренние методы

//Что итоговое должно получиться:
//1. Можем получить информацию про кафе
//2. Можем заказать напиток
//3. Можем получить информацию про напиток

export class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getInfo() {
    return [this.name, this.location].toString();
  }

  makeOrder(drink) {
    const info = drink.getInfo();
    const temp = drink.getTemperature();
    const order = drink.serve();

    return `Инфо о напитке: ${info.join(", ")}, температура при подаче: ${temp} °C, статус заказа: ${order}`
  }
}

