// 4. Создать через конструктор модальное окно. Внутри класса будут методы:
// - для открытия модального окна.
// - для закрытия модального окна.
// - для проверки, открыто ли сейчас модальное окно.
// - метод, который слушает кнопку (крестик) для закрытия модалки и 
// закрывает модалку (реализовать через eventListener) и вызывать в конструкторе.
// Используя данный класс - переписать логику задания №9.

class Modal {
  constructor(modalId) {
    this.modal = document.getElementById(modalId);
    this.modalWindow = this.modal.querySelector(".modal_window");
    this.overlay = this.modal.querySelector(".overlay");
    this.closeBtn = this.modal.querySelector(".close_window");

    this.listenCloseButton();
    }

    open() {
      this.modalWindow.classList.add("active");
      this.overlay.classList.add("active");
    }

    close() {
      this.modalWindow.classList.remove("active");
      this.overlay.classList.remove("active");
    }

    listenCloseButton() {
      this.closeBtn.addEventListener("click", () => {
        this.close();
      })
    };
  }

const enterBtn = document.querySelector(".footer_enter");
const registerModal  = new Modal("registerModal");

enterBtn.addEventListener("click", () => {
  registerModal.open();
})
