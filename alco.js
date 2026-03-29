// правило "Экземпляры класса выносим в именованый файл, а классы - в главном"

export class Alco {

  constructor(brand, type) {

    this.brand = brand;
    this.type = type; 
  }

  stock() {
    console.log(`${this.brand}, ${this.type} in stock`)
  }
}
