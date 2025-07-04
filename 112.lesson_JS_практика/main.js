// const modalCloseBtn = document.querySelector('.modal__close-btn')
// const modal = document.querySelector('.modal')

// modalCloseBtn.addEventListener('click', () => {
//     modal.classList.add('hidden')
// })

// const btnOpen = document.querySelector('.btn-open')

// btnOpen.addEventListener('click', () => {
//     modal.classList.remove('hidden')
// })

const btn = document.querySelector('.btn-open')
const modal = document.querySelector('.modal')
const body = document.body

const openModal = () => {
    modal.classList.add('modal--open')
    body.classList.add('body--fixed')
}

const closeModal = () => {
    modal.classList.remove('modal--open')
    body.classList.remove('body--fixed')
}

btn.addEventListener('click', openModal)

modal.addEventListener('click', event => {
    const target = event.target
if(target && target.classList.contains('modal') || target.classList.contains('modal__close-btn')) {
    closeModal()
}
})

document.addEventListener('keydown', event => {
    // console.log(event.code)
    if(event.code === 'Escape' && modal.classList.contains('modal--open')) {
        closeModal()
    }
})



