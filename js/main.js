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

navigator.geolocation.getCurrentPosition((position) => {
  console.log("position:", position);

  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const getAddress = async () => {
    try {
      const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);

      const { address } = await res.json();
      console.log("data:", address);

      document.querySelector(".header__location--name").innerHTML =
        address.road + ", " + (address.village || address.city) + ", " + address.country;
    } catch (error) {
      console.log("Помилка:", error);
    }
  };

  getAddress();
});

const loginButton = document.querySelector(".header__login");
const modal = document.querySelector("#authModal");

loginButton.addEventListener("click", () => {
  modal.classList.add("active");

  document.body.style.overflow = "hidden";
});

document.querySelector(".modal__close").addEventListener("click", () => {
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" || event.key === "Esc") {
    if (modal && modal.classList.contains("active")) {
      modal.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  }
});

modal.addEventListener("click", function (event) {
  if (event.target === this) {
    this.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

document.querySelector(".auth-form").addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(event);

  const formData = new FormData(event.target);

  const name = formData.get("name");
  const phone = formData.get("phone");
  const password = formData.get("password");

  alert(`User: ${name}, phone: ${phone}, password: ${password}`);
});
