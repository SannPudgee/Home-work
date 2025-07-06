(function() {

    //burger
    document.addEventListener('click', burgerInit) 
// при клике на документ будет срабатывать функция
    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        //смотрит родителя с классом и возвращает родителя и если сам элемент родитель
        const burgerNavLink = e.target.closest('.nav__link')

//         if(burgerIcon) {
// console.log('Есть!'); при нажатии на бургер фамили будет есть
//         }

// console.log(document.documentElement.clientWidth);
// //узнаем ширину окна при клике

if(!burgerIcon && !burgerNavLink) return
//&& это и это
//функция прекращается если жмякать не не них
// if(burgerIcon) {
//     e.preventDefault()
// } отменяет дефолтные свойства
if (document.documentElement.clientWidth > 900) return

// console.log('работает')
//проверка
if (!document.body.classList.contains('body--opened-menu')) {
    document.body.classList.add('body--opened-menu')
} else {
    document.body.classList.remove('body--opened-menu')
}
//если есть класс
//! переворачивает true false
//else иначе
// document.body.classList.add('body--opened-menu')
//добавление класса

// console.log(target)
//тыкаешь на сайт в консоле видишь на какой элемент
    }

    // modalka
    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.about__img-button')

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
    }

    function closeModal(e) {
        e.preventDefault()
        
        const target = e.target

        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
        }
    }

    //Tabs
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
    if(tabControl.classList.contains('tab-controls__link--active')) return

//получаем селектор класса

const tabContentID = tabControl.getAttribute('href')
    // console.log(tabControl.getAttribute('href'));
    const tabContent = document.querySelector(tabContentID)
    const activeControl = document.querySelector('.tab-controls__link--active')
    const activeContent = document.querySelector('.tab-content--show')

    //если этот элемент есть remuve class
    if(activeControl) {
        activeControl.classList.remove('tab-controls__link--active')
    }
    if(activeContent) {
        activeContent.classList.remove('tab-content--show')
    }
    //проверяем висит ли класс на элементе и удаляем

//навешиваем класс show на клик atbContentID меняется на tab1 2 3 4 
tabContent.classList.add('tab-content--show')
tabControl.classList.add('tab-controls__link--active')


}

//accordion

//записываем в переменную все аккордион lists
const accordionLists = document.querySelectorAll('.accordion-list');

//по каждому пробегаемся
accordionLists.forEach(el =>{
    //оставляем открытой вкладку сразу

//навешиваем прослушиватель на клик
    el.addEventListener('click', (e) =>{

                //переменная листа
        const accordionList = e.currentTarget;
                //ищем открытый item внутри accordion
        const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened');
        //
        const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content');


        //currentTarget тот элемент на который навесил обработчик событий
    //делигирование событий когда кликаем на лист. если кликаем на кнопку код продолжаем
    const accordionControl = e.target.closest('.accordion-list__control');
    //target тот элемент на который кликнули
    if (!accordionControl) return
    //запись в переменную самого элемента
    const accordionItem = accordionControl.parentElement;
    //записываем контент под кнопкой
    const accordionContent = accordionControl.nextElementSibling;
    //если item существует и при этом след элементы разные  удали закрываем контент поля другим полем 
    if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
        //отбираем класс accordionOpenedItem
        accordionOpenedItem.classList.remove('accordion-list__item--opened');
        accordionOpenedContent.style.maxHeight = null
    }
//выполняем функцию вешаем класс
accordionItem.classList.toggle('accordion-list__item--opened');
//проверка если есть модификатор тогда прописываем стиль для контента увеличиваем макс высоту
//узнаем высоту элемента как если бы он не был скрыт
if(accordionItem.classList.contains('accordion-list__item--opened')) {
    accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
} else{
    //иначе если нет класса это свойство обнуляем
    accordionContent.style.maxHeight = null
}

    })
})

// =======================================

// slaider-gallery

const swiper = new Swiper('.gallery__slider', {
    // Optioneal parameters
    spaceBetween: 15,
    slidesPerView: 1.5,

    //if we need pagination
    pagination: {
        el: '.gallery__pagination',
        type: 'fraction',
    }, 
    
    //Navigation arrows
    navigation: {
        nextEl: '.gallery__next',
        prevEl: '.gallery__prev',
    },

    breakpoints: {
        451: {
        slidesPerView: 2,
        },
        601: {
slidesPerView: 3,
        },

        801: {
spaceBetween: 32,
        },

        1101: {
            slidesPerView: 4,
        }
    }

});


})()
// самовызывающая функция чтобы создать локальное поле видимости



