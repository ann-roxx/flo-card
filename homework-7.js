//2. Создать массив от 1 дл 10 и отфильтровать начиная с 5

const numbers = [1,2,3,4,5,6,7,8,9,10];

console.log(numbers);

const newArray = numbers.filter ((number, index) => index >= 4);

console.log(newArray);

//3. Создать массив строк и провернить определенную

const snacks = ["Nuts", "Cookies", "Candies", "Crunches"];

console.log();

console.log(snacks.includes("Nuts"));

//4. Написать функцию которая переворачивает содержимoе предыдущих двух массивов

const reversedNumbers = numbers.reverse();
console.log(reversedNumbers);

const reversedSnacks = snacks.reverse();
console.log(reversedSnacks);



//7. Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"

const comComments = comments.filter(comment => comment.email.includes (".com"));

console.log(comComments);

//8. Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1

const idComments = comments.map(comment => {
  return { ...comment, postId: comment.id <= 5 ? 2 : 1};
})

console.log(idComments);

//9. Перебрать массив, что бы объекты состояли только из айди и имени

const onlyIdNameComments = comments.map(comment => ({
  id: comment.id,
  name:comment.name
}));

console.log(onlyIdNameComments);

//10. Перебираем массив, добавить свойство isInvalid и проверить, если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.

const bodyComments = comments.map(comment => ({
  ...comment,
  isInvalid: comment.body.length > 180
}));

console.log(bodyComments);


//пока не получается, не проверяй, осталось еше 12 и 11
// 11. Вывести массив почт с помощью reduce  и с помощью map



/*const emailComments = comments.reduce(function(result, comment) {
  result [comment,email] = {
    email: comment.email
  }
  return result
})




const emailComments = comments.reduce((acc,comment) => {
  acc.push (comment, email);
  return acc
}, []);
console.log(emailCommentsMap);*/