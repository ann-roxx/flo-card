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
const registerModal = new Modal("registerModal");

enterBtn.addEventListener("click", () => {
  registerModal.open();
})

// 6. Создать форму регитсрации, к каждому инпуту подключить валидацию,
// создать внешнюю константу user.

const registerForm = new Form ("registerForm")
let user = null;

registerForm.form.addEventListener("submit", (event) => {
  event.preventDefault()

  if (registerForm.isValid()) {
    const userData = getAllValues(registerForm);

  if (userData.password === userData.passwordRepeat) {
    user = userData;
    user.createdOn = new Date();
    alert("Вы успешно зарегистрировались!")
    console.log(user);

    registerForm.reset()

  } else {
    alert("Проверьте написание пароля.");
    }
  } else {
    alert("Пожалуйста, заполните форму корректно.");
  }
  })

