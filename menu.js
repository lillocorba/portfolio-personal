const burger = document.querySelector('.burgerBtn')
const linea1 = document.querySelector('.linea1')
const linea2 = document.querySelector('.linea2')
const navLinks = document.querySelector('.nav-links')
const linkMenu = document.querySelectorAll('.linkMenu')


burger.addEventListener("click", () => {
    navLinks.classList.toggle('active')
    linea1.classList.toggle('linea1-active')
    linea2.classList.toggle('linea2-active')
})

linkMenu.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.toggle('active')
        linea1.classList.toggle('linea1-active')
        linea2.classList.toggle('linea2-active')
    })
});
