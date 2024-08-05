const selectLanguageMain = document.querySelector(".select-language-current");
const selectLanguageOptions = document.querySelectorAll(
  ".select-language-body-item"
);

const select = function (mainBtn, options, parentClass, activeClass) {
  mainBtn.addEventListener("click", toggleFunction);

  options.forEach((option) => {
    option.addEventListener("click", function () {
      const optionParametr = this.textContent;
      mainBtn.textContent = optionParametr;
      option.closest(parentClass).classList.toggle(activeClass);
    });
  });

  function toggleFunction() {
    this.closest(parentClass).classList.toggle(activeClass);
  }
};

select(
  selectLanguageMain,
  selectLanguageOptions,
  ".select-language",
  "is-active"
);

const solutionsBtn = document.querySelector(
  ".nav-wrapper-left-part-solutions-wrapper-solutions-btn"
);
const solutionsPopUp = document.querySelector(
  ".nav-wrapper-left-part-solutions-wrapper-solutions-pop-up"
);

solutionsBtn.addEventListener("click", (e) => {
  solutionsBtn.classList.toggle("active");
  solutionsPopUp.classList.toggle("active");
});

const solutionTabs = document.querySelector(".solutions-pop-up-btns-wrapper");
const solutionTabsBtns = document.querySelectorAll(
  ".solutions-pop-up-btns-wrapper-btn"
);
const solutionContents = document.querySelectorAll(
  ".solutions-pop-up-content-wrapper-list"
);

solutionTabs.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    solutionTabsBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    solutionContents.forEach((content) => {
      if (content.classList.contains("active")) {
        content.classList.remove("active");
      }
      if (content.id === id) {
        content.classList.add("active");
      }
    });
  }
});

const monthlyPccCurrent = document.querySelector(".select-monthly-ppc-current");
const monthlyPccOptions = document.querySelectorAll(
  ".select-monthly-ppc-body-item"
);

select(monthlyPccCurrent, monthlyPccOptions, ".select-monthly-ppc", "active");

const popUp = document.querySelector(".pop-up");
const closePopUpBtn = document.querySelector(".white-cross");
const mainBtnBookADemo = document.querySelector(
  ".hero-wrapper-btn-parent-book-a-demo-btn"
);
mainBtnBookADemo.addEventListener("click", (e) => {
  addClassDisplayNoneIntoPopUp();
});
closePopUpBtn.addEventListener("click", (e) => {
  removeClassDisplayNoneFromPopUp();
});
document.addEventListener("keydown", (e) => {
  if (e.keyCode === 27) {
    removeClassDisplayNoneFromPopUp();
  }
});

const bookADemoNavBtn = document.querySelector(
  ".nav-wrapper-right-part-book-a-demo"
);

bookADemoNavBtn.addEventListener("click", () => {
  addClassDisplayNoneIntoPopUp();
});

function removeClassDisplayNoneFromPopUp() {
  popUp.classList.add("display-none");
}

function addClassDisplayNoneIntoPopUp() {
  popUp.classList.remove("display-none");
}

const tryNowBtn = document.querySelector(".try-now-btn");

tryNowBtn.addEventListener("click", () => {
  addClassDisplayNoneIntoPopUp();
});

// text animation

window.addEventListener("scroll", function () {
  const textElement = document.getElementById("scroll-text");
  const scrollPosition = window.scrollY;
  const documentHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  // Приводим значение scrollPosition в диапазон от 0 до 1
  const scrollFactor = Math.min(scrollPosition / documentHeight, 1);

  // Устанавливаем clip-path для псевдоэлемента
  const newClip = 100 - scrollFactor * 100; // в процентах
  textElement.style.setProperty("--clip-value", `${newClip}%`);

  // Отладочная информация
  console.log(
    `scrollPosition: ${scrollPosition}, documentHeight: ${documentHeight}, scrollFactor: ${scrollFactor}, newClip: ${newClip}%`
  );
});

const swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   type: "fraction",
  // },
  slidesPerView: 3,
  spaceBetween: 20,
});

const comments = [
  {
    header: "Office ipsum you must be",
    text: "Office ipsum you must be muted. Meat move job no technologically I hit member thought. Banner synergy club money build. Boil needed fruit synergize could box. Be goto dangerous shift of read.",
    ["avatar-src"]: "img/slider-1.png",
    name: "Office",
    surname: "Office",
  },
  {
    header: "Office ipsum you must be",
    text: "Office ipsum you must be muted. Meat feature lean launch hour hill stands go. Squad dear have diarize feature sky manage door activities. Nail muted re-inventing that long is responsible eager. That my q1 sorry a you support. Crystallize policy picture done.",
    ["avatar-src"]: "img/slider-2.png",
    name: "Office",
    surname: "Office",
  },
  {
    header: "Office ipsum you must be",
    text: "Office ipsum you must be muted. Power working practices helicopter these model big cc. Squad good picture box offline don't were comms hurting. Heads-up manage most hanging hits make container view cob ipsum. Synergize.",
    ["avatar-src"]: "img/slider-3.png",
    name: "Office ipsum",
    surname: "Read",
  },
  {
    header: "Office ipsum you must be",
    text: "Office ipsum you must be muted. Meat move job no technologically I hit member thought. Banner synergy club money build. Boil needed fruit synergize could box. Be goto dangerous shift of read.",
    ["avatar-src"]: "img/slider-1.png",
    name: "Office",
    surname: "Office",
  },
  {
    header: "Office ipsum you must be",
    text: "Office ipsum you must be muted. Meat feature lean launch hour hill stands go. Squad dear have diarize feature sky manage door activities. Nail muted re-inventing that long is responsible eager. That my q1 sorry a you support. Crystallize policy picture done.",
    ["avatar-src"]: "img/slider-2.png",
    name: "Office",
    surname: "Office",
  },
  {
    header: "Office ipsum you must be",
    text: "Office ipsum you must be muted. Power working practices helicopter these model big cc. Squad good picture box offline don't were comms hurting. Heads-up manage most hanging hits make container view cob ipsum. Synergize.",
    ["avatar-src"]: "img/slider-3.png",
    name: "Office ipsum",
    surname: "Read",
  },
];

const swiperWrapper = document.querySelector(".swiper-wrapper");

comments.forEach((comment) => {
  const swiperSlide = document.createElement("div");
  swiperSlide.className = "swiper-slide";

  const swiperSlideHeader = document.createElement("div");
  swiperSlideHeader.className = "swiper-slide-header";
  swiperSlideHeader.textContent = `${comment.header}`;

  const swiperSlideText = document.createElement("div");
  swiperSlideText.className = "swiper-slide-text";
  swiperSlideText.textContent = `${comment.text}`;

  const swiperSlideBottomPart = document.createElement("div");
  swiperSlideBottomPart.className = "swiper-slide-bottom-part";

  const swiperSlideBottomPartPhoto = document.createElement("div");
  swiperSlideBottomPartPhoto.className = "swiper-slide-bottom-part-photo";

  const swiperSlideBottomPartPhotoImg = document.createElement("img");
  swiperSlideBottomPartPhotoImg.src = `${comment["avatar-src"]}`;
  swiperSlideBottomPartPhotoImg.alt = "comment";

  const swiperSlideBottomPartNameWrapper = document.createElement("div");
  swiperSlideBottomPartNameWrapper.className =
    "swiper-slide-bottom-part-name-wrapper";

  const swiperSlideBottomPartNameWrapper1 = document.createElement("div");
  swiperSlideBottomPartNameWrapper1.textContent = `${comment.name}`;

  const swiperSlideBottomPartNameWrapper2 = document.createElement("div");
  swiperSlideBottomPartNameWrapper2.textContent = `${comment.surname}`;

  swiperSlideBottomPartNameWrapper.append(
    swiperSlideBottomPartNameWrapper1,
    swiperSlideBottomPartNameWrapper2
  );
  swiperSlideBottomPartPhoto.append(swiperSlideBottomPartPhotoImg);
  swiperSlideBottomPart.append(
    swiperSlideBottomPartPhoto,
    swiperSlideBottomPartNameWrapper
  );
  swiperSlide.append(swiperSlideHeader, swiperSlideText, swiperSlideBottomPart);
  swiperWrapper.append(swiperSlide);
});

let currentSlider = 1;
const buttonNext = document.querySelector(".swiper-button-next");
const buttonPrev = document.querySelector(".swiper-button-prev");

const swiperPagination = document.querySelector(".swiper-pagination");
const totalSlides = document.querySelectorAll(".swiper-slide").length;
function updatePagination() {
  swiperPagination.innerHTML = `${currentSlider} <span>of ${comments.length}</span>`;
}

buttonNext.addEventListener("click", (e) => {
  if (currentSlider < totalSlides) {
    ++currentSlider;
    updatePagination();
  }
});

buttonPrev.addEventListener("click", () => {
  if (currentSlider > 1) {
    --currentSlider;
    updatePagination();
  }
});

updatePagination();

const tryNowMeetingBtn = document.querySelector(".try-now-meeting-wrapper-btn");

tryNowMeetingBtn.addEventListener("click", () => {
  addClassDisplayNoneIntoPopUp();
});

const ratesBtns = document.querySelectorAll(".rates-wrapper-list-item-btn");
ratesBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    addClassDisplayNoneIntoPopUp();
  });
});
