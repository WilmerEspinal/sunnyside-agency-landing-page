let menuHamburger = document.querySelector('#hamburger')
let navMobil = document.querySelector('.mobilmenu')

menuHamburger.addEventListener('click', () => {
    navMobil.classList.toggle('inactive')
})