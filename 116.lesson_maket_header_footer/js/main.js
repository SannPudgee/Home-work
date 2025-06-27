(function() {

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
})()
// самовызывающая функция чтобы создать локальное поле видимости



