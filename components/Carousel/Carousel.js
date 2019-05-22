class Carousel {
  constructor(element) {
    this.element = element;
    this.slides = this.element.querySelectorAll(".slide");
    this.currentIndex = 1;

    this.deselect();
    this.setCurrentSlide();
  }

  deselect() {
    this.slides.forEach(slide => {
      slide.classList.remove("show");
    });
  }
  setCurrentSlide() {
    this.deselect();
    let slides = document.querySelectorAll(".slide");

    slides.forEach((slide, index) => {
      if (index === this.currentIndex) {
        slide.classList.add("show");
      }
    });
  }
}

let carousel = document.querySelector(".carousel");
new Carousel(carousel);
