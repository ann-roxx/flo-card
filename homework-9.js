// 4. выводить введенный пользователем email, нажимая на кнопку Подписаться, подключить валидацию,
//  чтобы проверить, если написание адресса не верное

const emailData = document.querySelector(".footer_input");
const form = document.querySelector(".footer_email_box");

form.addEventListener("submit", (event) => {
  event.preventDefault()
  if(!emailData.checkValidity()) {
    alert("Некоректный email. Исправьте ошибку")
    return
  }

  console.log({email: emailData.value});
  console.log("Вы успешно авторизировались");
})

// 5. Активировать модальное окно в js, виводить его на экран через кнопку 
// регистрация и закрывать крестиком,

const enterBtn = document.querySelector(".footer_enter");
const modalWindow = document.querySelector(".modal_window");
const overlay = document.querySelector(".overlay");

enterBtn.addEventListener("click", () => {
  modalWindow.classList.add("active")
  overlay.classList.add("active")
  console.log(modalWindow);
})

const closeBtn = document.querySelector(".close_window");

closeBtn.addEventListener("click", () => {
  modalWindow.classList.remove("active")
  overlay.classList.remove("active")
  console.log(modalWindow);
})

// 6. Создать форму регитсрации, к каждому инпуту подключить валидацию,
// создать внешнюю константу user.

let user;
const formTemplate = document.querySelector(".form_template");
const password = document.querySelector(".password");
const passwordRepeat = document.querySelector(".password2");
const firstName = document.querySelector(".firstname");
const surname = document.querySelector(".surname");
const birthday = document.querySelector(".birthday");
const number = document.querySelector(".number");
const emailAddress = document.querySelector(".email_address");

formTemplate.addEventListener("submit", (event) => {
  event.preventDefault()

  if (!formTemplate.checkValidity()) {
    alert("Пожалуйста, заполните форму корректно.")
    return
  }

  if (password.value !== passwordRepeat.value) {
    alert("Проверьте написание пароля.")
    return
  }

  user = {
  firstname: firstName.value,
  surname: surname.value,
  birthday: birthday.value,
  number: number.value,
  email: emailAddress.value,
  password: password.value,
  createdOn: new Date()
  }
  console.log(user)

  modalWindow.classList.remove("active")
  overlay.classList.remove("active")

  console.log("Вы успешно авторизировались");

  formTemplate.reset()
})







