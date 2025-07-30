(function () {
    //burger
    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.header__link')

        if (!burgerIcon && !burgerNavLink) return



        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')

        } else {
            document.body.classList.remove('body--opened-menu')
        }
    }

    //tabs
    //выбираем секцию
    const tabControsl = document.querySelector('.tab-controls')
    //дилегируем события отрабатывая все клики на нём
    tabControsl.addEventListener('click', toggleTab)
    //event функция
    function toggleTab(e) {
        //ищем у таргета родитель с классом и в эту переменную его записываем
        const tabControl = e.target.closest('.tab-controls__link')
        //затем проверка если нет прекращаем функцию
        if (!tabControl) return
        //отменяем поведение ссылки
        e.preventDefault()
        //если нажимаем на уже активный элемент содержит класс то прерываем функцию
        if (tabControl.classList.contains('tab-controls__link--active')) return
        //получаем селектор класса
        const tabContentID = tabControl.getAttribute('href')
        // console.log(tabControl.getAttribute('href'));
        const tabContent = document.querySelector(tabContentID)
        const activeControl = document.querySelector('.tab-controls__link--active')
        const activeContent = document.querySelector('.tab-content--active')

        //если этот элемент есть remuve class
        if (activeControl) {
            activeControl.classList.remove('tab-controls__link--active')
        }
        if (activeContent) {
            activeContent.classList.remove('tab-content--active')
        }
        //проверяем висит ли класс на элементе и удаляем
        //навешиваем класс show на клик atbContentID меняется на tab1 2 3 4 
        tabContent.classList.add('tab-content--active')
        tabControl.classList.add('tab-controls__link--active')
    }


    //swiper
// TAB 1
const thumbs1 = new Swiper('.swiper-gallery__thumbs--1', {
  slidesPerView: "auto",
  spaceBetween: 0,
  watchSlidesProgress: true,
});

const main1 = new Swiper('.swiper-gallery__top--1', {
    slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: '.swiper-controls__next--1',
    prevEl: '.swiper-controls__prev--1',
  },
  pagination: {
    el: '.swiper-controls__pagination--1',
    type: 'custom',
    renderCustom: (swiper, current, total) => `${current} из ${total}`,
  },
  thumbs: {
    swiper: thumbs1,
  },
});
// TAB 2
const thumbs2 = new Swiper('.swiper-gallery__thumbs--2', {
  slidesPerView: "auto",
  spaceBetween: 0,
  watchSlidesProgress: true,
});

const main2 = new Swiper('.swiper-gallery__top--2', {
    slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: '.swiper-controls__next--2',
    prevEl: '.swiper-controls__prev--2',
  },
  pagination: {
    el: '.swiper-controls__pagination--2',
    type: 'custom',
    renderCustom: (swiper, current, total) => `${current} из ${total}`,
  },
  thumbs: {
    swiper: thumbs2,
  },
});
// TAB 3
const thumbs3 = new Swiper('.swiper-gallery__thumbs--3', {
  slidesPerView: "auto",
  spaceBetween: 0,
  watchSlidesProgress: true,
});

const main3 = new Swiper('.swiper-gallery__top--3', {
    slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: '.swiper-controls__next--3',
    prevEl: '.swiper-controls__prev--3',
  },
  pagination: {
    el: '.swiper-controls__pagination--3',
    type: 'custom',
    renderCustom: (swiper, current, total) => `${current} из ${total}`,
  },
  thumbs: {
    swiper: thumbs3,
  },
});
// TAB 4
const thumbs4 = new Swiper('.swiper-gallery__thumbs--4', {
  slidesPerView: "auto",
  spaceBetween: 0,
  watchSlidesProgress: true,
});

const main4 = new Swiper('.swiper-gallery__top--4', {
    slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: '.swiper-controls__next--4',
    prevEl: '.swiper-controls__prev--4',
  },
  pagination: {
    el: '.swiper-controls__pagination--4',
    type: 'custom',
    renderCustom: (swiper, current, total) => `${current} из ${total}`,
  },
  thumbs: {
    swiper: thumbs4,
  },
});


//swiper book 
  const swiper = new Swiper('.mySwiper', {
    
    initialSlide: 0,
    centeredSlides: false,
    slidesPerView: 1.5,
    spaceBetween: 35,

    pagination: {
      el: '.mySwiper-controls__pagination',
      type: 'custom',
      renderCustom: (swiper, current, total) => `${current} из ${total}`,
    },

    navigation: {
      nextEl: '.swiper-controls__next',
      prevEl: '.swiper-controls__prev',
    },

        breakpoints: {
          400: {
slidesPerView: 2,
          },
          600: {
slidesPerView: 2.5,
          },
          800: {
initialSlide: 1,
centeredSlides: true,
slidesPerView: 3,
spaceBetween: 70,
          },

1100: {
  initialSlide: 2,
  centeredSlides: true,
  slidesPerView: 4,
  spaceBetween: 90,
},

1400: {
  initialSlide: 2,
  slidesPerView: 5,
  centeredSlides: true,
},

1600: {
    initialSlide: 2,
  centeredSlides: true,
  slidesPerView: 5.7,
  spaceBetween: 106,
}

        }
  });

  // в псевдоэлемент пишем номер слайда
const section = document.querySelector('.mySwiper'); // 👉 указываем нужную секцию
const slides = section.querySelectorAll('.swiper-slide'); // 👉 ищем слайды только в ней

slides.forEach((slide, index) => {
  slide.setAttribute('data-index', index + 1); // Присваиваем номер
});

// accordeons questions
const accordions = document.querySelectorAll('.accordion');

accordions.forEach((item) => {
  const header = item.querySelector('.accordion-header');

  header.addEventListener('click', () => {
    // Закрыть все
    accordions.forEach((acc) => acc.classList.remove('accordion--open'));

    // Открыть текущий
    item.classList.add('accordion--open');
  });
});



    // const swiper = new Swiper('.swiper', {
    //     observer: true,
    //     observeParents: true,
    //     slidesPerView: "auto",
    // });
    

})()