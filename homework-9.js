// 4. выводить введенный пользователем email, нажимая на кнопку Подписаться, подключить валидацию,
//  чтобы проверить, если написание адресса не верное

const emailData = document.querySelector(".footer_input");
const form = document.querySelector(".footer_email_box");

function getFormData(form) {
  return Object.fromEntries(new FormData(form));
}

form.addEventListener("submit", (event) => {
  event.preventDefault()

  if(emailData.checkValidity()) {
    const emailData = getFormData(form)
    const emailObject = {email: emailData.value}
    console.log(emailObject);
  } else {
    alert("Некоректный email. Исправьте ошибку")
  }
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

const formTemplate = document.querySelector(".form_template");
let user = null;

formTemplate.addEventListener("submit", (event) => {
  event.preventDefault()

  if (formTemplate.checkValidity()) {
    const userData = getFormData(formTemplate);

  if (userData.password === userData.passwordRepeat) {
    user = userData;
    user.createdOn = new Date();
    alert("Вы успешно зарегистрировались!")
    console.log(user);

    formTemplate.reset()

  } else {
    alert("Проверьте написание пароля.");
    }
  } else {
    alert("Пожалуйста, заполните форму корректно.");
  }
  })

