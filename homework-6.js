// 3.Создать объект "персональные данные"

const personalData = {
  name: "Anna",
  age: 28,
  city: "Kilia",
  profession: "teacher",
  heigth: 170,
  weight: 63,
  nationality: "Ukrainian"
}

console.log(personalData);

// 4.Создать объект "модель авто"

const autoPassport = {
  model: "Audi Q7",
  year: 2015,
  color: "black",
  engineType: "petrol",
  transmission: "automatic",
  price: 22500
}

autoPassport.owner = personalData;
console.log(autoPassport);
console.log(autoPassport.owner.name);

// 5.Создать функию "проверка максимальной скорости"

function addMaxSpeed(autoPassport) {
  if (!autoPassport.hasOwnProperty("максимальная скорость")) {
    autoPassport["максимальная скорость"] = 210;
    console.log(autoPassport);
  }
}
addMaxSpeed(autoPassport, 210);
console.log("Добавлена MaxSpeed");

// 6.Создать функцию, которая выводит обьект и свойство из нее

function showProperty(object, property) {
  const value = object[property];
  console.log(value);
}

showProperty(autoPassport, "model");
showProperty(autoPassport, "color");

//7.Создать массив с названиями пролуктов

const productBag = ["Хлеб", "Молоко", "Банан", "Каша", "Мясо"]
console.log(productBag);

//8. Создать два массива и обьеденить, добавив второй в конец

const books = [
  { name: "Train",
    genre: "detective",
    year: 1976,
    color:"broun",
    edition: 10500
  },
  { name: "Adriatic",
    genre: "tale",
    year: 2002,
    color:"blue",
    edition: 3200
  },
  { name: "She",
    genre: "roman",
    year: 2023,
    color:"pink",
    edition: 30000
  },
  { name: "Why not?",
    genre: "detective",
    year: 1997,
    color:"black",
    edition: 10225
  }
]

books.push ({
  name: "In my soul",
  genre: "mistery",
  year: 2001,
  color:"red",
  edition: 4607
})
console.log(books)

//9.Создать второй массив и обьеденить их с предыдущим

const limitedBooks = [
  { name: "Yesterday",
    genre: "documental",
    year: 1995,
    color:"blue",
    edition: 1000
  },
  { name: "Today",
    genre: "documental",
    year: 2015,
    color:"pink",
    edition: 1000
  },
  { name: "Tommorow",
    genre: "documental",
    year: 2025,
    color:"black",
    edition: 1000
  }
]
console.log(limitedBooks)

const allBooks = [...books, ...limitedBooks]
console.log(allBooks)

//10. Cоздать массив с помощью map, добавить новое свойство isRare и сделвть проверку на true или false

function addIsRare(books) {
  return books.map (function(book) {
    if (book.year > 2000) {
      book.isRare = true;
    } else {
      book.isRare = false;
    }
    return book;
  })
}

const rareBooks = addIsRare(limitedBooks);
console.log(rareBooks);

rareBooks.forEach(function (book) {
  console.log(book.name, book.isRare);
});

//11. Тренируюсь. Можешь не проверять))) Мне было очень сложно с заданием №5 и №10
// test #10
const test = [
  { name: "Boho",
    price: 2500,
    country: "Japan",
    age: "25"
  },
  { name: "Lime",
    price: 2300,
    country: "China",
    age: "25"
  },
  { name: "Kiki",
    price: 3100,
    country: "Korea",
    age: "35"
  }
]

console.log(test);

function allIsRare(cream) {
  return cream.map (function(cream) {
    if (cream.age > 25) {
      cream.isRare = true;
    } else {
      cream.isRare = false;
    }
    return cream;
  })
}

const produktCream = allIsRare(test);
console.log(produktCream);

produktCream.forEach(function(cream) {
  console.log(cream.age, cream.isRare);
  })

const numbers = [1, 2, 3, 4, 5, 6]
console.log(numbers);

function allIsRare(counting) {
  return counting.map (function(counting){
    if (counting > 4) {
      counting = true;
    } else {
      counting = false;
    }
    return counting;
  })
}

const cards = allIsRare(numbers)
console.log(cards);

cards.forEach(function(counting) {
  console.log(counting, counting.isRare);
})

// test #5

const dress = {
  prise: 200,
  color: "pink",
  made: "USA",
}

console.log(dress);

function addLenght (dress) {
  if (!dress.hasOwnProperty ("длина платья")) {
    dress ["длина платья"] = "120"
    console.log (dress)
  }
}

addLenght(dress, 120);

function addType (dress) {
  if (!dress.hasOwnProperty ("тип платья")) {
    dress ["тип плятья"] = "midi"
  }
  console.log(dress)
}

addType(dress, "midi");

