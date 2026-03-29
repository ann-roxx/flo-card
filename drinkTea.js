// От класса Drink создать наследников и присвоить 
// им дополнительные уникальные свойства.
import { Drink } from "./drink.js";

export class Tea extends Drink {
  constructor(name, size, price, type, strength, country, temperature) {
    super(name, size, price)
    this.type = type;
    this.strength = strength;
    this.country = country;

    this.setTemperature(temperature);
  }

  getInfo() {
    return [...super.getInfo(), this.type, this.strength, this.country];
  }
}

