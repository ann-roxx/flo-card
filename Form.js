// 5. Реализовать через конструктор форму и выполнить следующие методы:
// - для получения всех значений формы.
// - для проверки валидности формы (метод возвращает true/false в зависимости от того, валидна ли форма).
// - для сброса значений формы.
// + переписать логику задания №9

class Form {
  constructor(formId) {
    this.form = document.getElementById(formId);
  }

  getAllValues() {
    const formData = new FormData(this.form);
    return Object.fromEntries(formData.entries());
  }

  isValid() {
    return this.form.checkValidity();
  }

  reset() {
    return this.form.reset();
  }
}

window.Form = Form;
