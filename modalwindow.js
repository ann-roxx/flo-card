// 4. Создать через конструктор модальное окно. Внутри класса будут методы:
// - для открытия модального окна.
// - для закрытия модального окна.
// - для проверки, открыто ли сейчас модальное окно.
// - метод, который слушает кнопку (крестик) для закрытия модалки и 
// закрывает модалку (реализовать через eventListener) и вызывать в конструкторе.
// Используя данный класс - переписать логику задания №9.

export default class Modal {
  constructor(modalId) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById("overlay");
    this.closeBtn = this.modal.querySelector(".close_window");

    this.handleClose = this.close.bind(this);

    this.closeBtn.addEventListener("click", this.handleClose);
    this.overlay.addEventListener("click", this.handleClose);
    }

    open() {
      this.modal.classList.add("active");
      this.overlay.classList.add("active");
    }

    close() {
      this.modal.classList.remove("active");
      this.overlay.classList.remove("active");
    }
  }
