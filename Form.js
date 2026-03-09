// 5. Реализовать через конструктор форму и выполнить следующие методы:
// - для получения всех значений формы.
// - для проверки валидности формы (метод возвращает true/false в зависимости от того, валидна ли форма).
// - для сброса значений формы.
// + переписать логику задания №9

class Form {
  constructor(formId) {
    this.form = document.getElementById(formId);
    this.user = null;

    this.form.addEventListener("submit", this.handleSubmit.bind(this));
  }

  getFormData() {
    const formData = new FormData(this.form);
    return Object.fromEntries(formData.entries());
  }

  checkValid() {
    return this.form.checkValidity();
  }

  resetForm() {
    return this.form.reset();
  }

  handleSubmit(event) {
  event.preventDefault()
  
    if (this.checkValid()) {
      const userData = this.getFormData();
    
    if (userData.password === userData.passwordRepeat) {
      this.user = userData;
      this.user.createdOn = new Date();

      alert("Вы успешно зарегистрировались!")
      console.log(this.user);

      this.resetForm();
      } else {
      alert("Проверьте написание пароля.");
      }
    } else {
    alert("Пожалуйста, заполните форму корректно.");
   }
  }
}

const registerForm = new Form ("registerForm");
