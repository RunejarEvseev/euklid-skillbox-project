// burger
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',

function () {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__nav--active');
    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function() {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  })
})

// search
let btnSearh = document.querySelector(".search");
let fieldSearch = document.querySelector(".header__search");
let btnCloseSearch = document.querySelector(".header__close-search");

btnSearh.addEventListener("click", function () {
  fieldSearch.classList.add("header__search--active");
});

btnCloseSearch.addEventListener("click", function () {
  fieldSearch.classList.remove("header__search--active");
});

// slider
var swiper = new Swiper('.hero__swiper', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
		clickable: true
  },

  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  });

// tabs
document.querySelectorAll(".work-list__btn").forEach(function (tabsBtn) {
  tabsBtn.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll(".work-list__btn").forEach(function (btn) {
      btn.classList.remove("work-list__btn--active");
    });
    e.currentTarget.classList.add("tabs-list__btn--active");
    document.querySelectorAll(".work__tabs").forEach(function (tabsBtn) {
      tabsBtn.classList.remove("tabs-item--active");
    });
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("tabs-item--active");
  });
});

// faq
new Accordion(".accordion-list", {
  elementClass: "accordion",
  triggerClass: "accordion__control",
  panelClass: "accordion__content",
  activeClass: "accordion--active",
});

document.querySelectorAll(".faq__item").forEach(function (faqItem) {
  faqItem.addEventListener("click", function (e) {
    document.querySelectorAll(".faq__item").forEach(function (faqItem) {
      faqItem.classList.remove("faq__item--active");
    });
    faqItem.classList.add("faq__item--active");
  });
});
