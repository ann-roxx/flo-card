import { Drink } from "./drink.js";

export class Tekila extends Drink {

  constructor(name, size, price, category, strength, country, temperature) {

    super(name, size, price);
    this.category = category;
    this.strength = strength;
    this.country = country;

    this.setTemperature(temperature);
  }

  getInfo() {
    return [...super.getInfo(), this.category, this.strength, this.country];
  }
}

