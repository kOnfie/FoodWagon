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

const slidesPerView = (initialValue) => {
  const width = window.innerWidth;

  if (width >= 1100) {
    return initialValue;
  }

  if (width < 1100 && width >= 768) {
    return 3;
  }

  if (width < 768) {
    return 1;
  }
};

const swiper = new Swiper(".mySwiper-popular", {
  slidesPerView: slidesPerView(5),
  spaceBetween: 16,
  navigation: {
    nextEl: ".swiper-button-next-popular",
    prevEl: ".swiper-button-prev-popular",
  },
});

const swiperSearchSection = new Swiper(".mySwiper-search", {
  slidesPerView: slidesPerView(6),
  spaceBetween: 34,
  navigation: {
    nextEl: ".swiper-button-next-search",
    prevEl: ".swiper-button-prev-search",
  },
});

window.addEventListener("resize", () => {
  const width = window.innerWidth;

  if (width >= 1100) {
    swiper.params.slidesPerView = 5;
    swiper.update();

    swiperSearchSection.params.slidesPerView = 5;
    swiperSearchSection.update();
  }

  if (width < 1100 && width >= 768) {
    swiper.params.slidesPerView = 3;
    swiper.update();

    swiperSearchSection.params.slidesPerView = 3;
    swiperSearchSection.update();
  }

  if (width < 768) {
    swiper.params.slidesPerView = 1;
    swiper.update();

    swiperSearchSection.params.slidesPerView = 1;
    swiperSearchSection.update();
  }
});
