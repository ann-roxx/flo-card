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
  if (!autoPassport.hasOwnProperty("maxSpeed")) {
    autoPassport["maxSpeed"] = 210;
    console.log(autoPassport);
  }
}
addMaxSpeed(autoPassport, 210);
console.log("Добавлена MaxSpeed");

// 6.Создать функцию, которая выводит обьект и свойство из нее

function showProperty(object, property) {
  console.log(object[property]);
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

books.push({
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

// первый вариант решения задачи

  const seriesLimitedBooks = limitedBooks.map(function(book){
  const newBooks = {...book};
  if (newBooks.year <= 2000) {
    newBooks.isRare = true
  } else {
    newBooks.isRare = false
  }
  return newBooks;
}) 

console.log(seriesLimitedBooks);

// второй вариант решения задачи

function addIsRare(books) {
  return books.map(book => {
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
