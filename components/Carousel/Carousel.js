class Carousel {
  constructor(element) {
    this.element = element;
    this.slides = this.element.querySelectorAll(".slide");
    this.currentIndex = 1;

    this.next = document.querySelector(".next");
    this.prev = document.querySelector(".prev");

    this.next.addEventListener("click", () => this.nextSlide());
    this.prev.addEventListener("click", () => this.prevSlide());

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

  nextSlide() {
    if (this.currentIndex === this.slides.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex += 1;
    }
    this.setCurrentSlide();
  }

  prevSlide() {
    if (this.currentIndex === 0) {
      this.currentIndex = 0;
    } else {
      this.currentIndex -= 1;
    }
    this.setCurrentSlide(); 
  }
}

let carousel = document.querySelector(".carousel");
new Carousel(carousel);
