const deliveryButton = document.querySelector("#delivery--button");
const pickupButton = document.querySelector("#pickup--button");

deliveryButton.addEventListener("click", () => {
  deliveryButton.classList.add("active");
  pickupButton.classList.remove("active");
});

pickupButton.addEventListener("click", () => {
  pickupButton.classList.add("active");
  deliveryButton.classList.remove("active");
});

const slidesPerView = () => {
  const width = window.innerWidth;

  if (width >= 1100) {
    return 5;
  }

  if (width < 1100 && width >= 768) {
    return 3;
  }

  if (width < 768) {
    return 1;
  }
};

const swiper = new Swiper(".mySwiper", {
  slidesPerView: slidesPerView(),
  spaceBetween: 16,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

window.addEventListener("resize", () => {
  const width = window.innerWidth;

  if (width >= 1100) {
    swiper.params.slidesPerView = 5;
    swiper.update();
  }

  if (width < 1100 && width >= 768) {
    swiper.params.slidesPerView = 3;
    swiper.update();
  }

  if (width < 768) {
    swiper.params.slidesPerView = 1;
    swiper.update();
  }
});
