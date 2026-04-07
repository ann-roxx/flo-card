import { Alco } from "./alco.js";

export class AlcoPremium extends Alco {

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
