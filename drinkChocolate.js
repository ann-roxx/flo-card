import { Drink } from "./drink.js";

export class HotChocolate extends Drink {

  constructor(name, size, price, type, compound, country, temperature) {

    super(name, size, price)
    this.type = type;
    this.compound = compound;
    this.country = country;

    this.setTemperature(temperature);
  }

  getInfo() {
    return [...super.getInfo(), this.type, this.compound, this.country];
  }
}

