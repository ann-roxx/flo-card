//2. Создать массив от 1 до 10 и отфильтровать начиная с 5

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers);

const newArray = numbers.filter((number) => number >= 5);

console.log(newArray);

//3. Создать массив строк и провернить определенную

const snacks = ["Nuts", "Cookies", "Candies", "Crunches"];

console.log(snacks.includes("Nuts"));

//4. Написать функцию которая переворачивает содержимoе предыдущих двух массивов

function reverseNumbers(numbers) {
  const newNumbers = [...numbers];
  newNumbers.reverse();
  return newNumbers;
}

const reversedNumbers = reverseNumbers(numbers);
console.log(reversedNumbers);

function reverseSnacks(snacks) {
  const newSnacks = [...snacks];
  newSnacks.reverse();
  return newSnacks;
}

const reversedSnacks = reverseSnacks(snacks);
console.log(reversedSnacks);



//7. Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"

import { comments } from "./comments.js";
  console.log(comments); 

const comComments = comments.filter(comment => comment.email.includes(".com"));

console.log(comComments);

//8. Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1

const idComments = comments.map(comment => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1
}));

console.log(idComments);

//9. Перебрать массив, что бы объекты состояли только из айди и имени

const onlyIdNameComments = comments.map(comment => ({
  id: comment.id,
  name: comment.name
}));

console.log(onlyIdNameComments);

//10. Перебираем массив, добавить свойство isInvalid и проверить, если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.

const bodyComments = comments.map(comment => ({
  ...comment,
  isInvalid: comment.body.length > 180
}));

console.log(bodyComments);

//11. Вывести массив почт с помощью reduce

const emailComments = comments.reduce((acc, comment) => {
  acc.push (comment.email);
  return acc
}, []);

console.log(emailComments);

        // и с помощью map

const emailCommmentMap = comments.map(comments => (comments.email));

console.log(emailCommmentMap);

//12. Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.

const emailString = emailCommmentMap.toString();
console.log(emailString);

console.log(emailCommmentMap.join("&"));
