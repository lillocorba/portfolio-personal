/* ANIMACIONES HERO */

const emoji = document.querySelector('.fondoEmoji')
const heroH1 = document.querySelector('.hero-h1')
const heroH4 = document.querySelector('.hero-h4')
const heroBoton = document.querySelector('.contenedor-hero-boton')

document.addEventListener("DOMContentLoaded", () => {
    emoji.classList.add('fondoEmoji-active')
    heroH1.classList.add('hero-h1-active')
    heroH4.classList.add('hero-h1-active')
    heroBoton.classList.add('contenedor-hero-boton-active')
})

/* ANIMACIONES BANNERS */

const containerBanners = document.querySelector('.contenedorBanners')
const bannerDesarrollo = document.querySelector('.bannerDesarrollo')

document.addEventListener('scroll', function () {
    if (window.scrollY > (window.pageYOffset + containerBanners.getBoundingClientRect().top) - (window.innerHeight / 1.1)) {

        bannerDesarrollo.classList.add('bannerDesarrollo-active')

    }
})

const bannerDiseño = document.querySelector('.bannerDiseño')

document.addEventListener('scroll', function () {
    if (window.scrollY > (window.pageYOffset + bannerDiseño.getBoundingClientRect().top) - (window.innerHeight / 0.9)) {

        bannerDiseño.classList.add('bannerDiseño-active')

    }
})

/* ANIMACIONES PROYECTOS */

const titulosProyectos = document.querySelector('.fila-proyectos-titulo')

document.addEventListener('scroll', function () {
    if (window.scrollY > (window.pageYOffset + titulosProyectos.getBoundingClientRect().top) - (window.innerHeight / 0.9)) {

        titulosProyectos.classList.add('fila-proyectos-titulo-active')

    }
})

const proyecto1 = document.querySelector('.proyecto-contenedor')

document.addEventListener('scroll', function () {
    if (window.scrollY > (window.pageYOffset + proyecto1.getBoundingClientRect().top) - (window.innerHeight / 0.9)) {

        proyecto1.classList.add('proyecto-contenedor-active')

    }
})

const proyecto2 = document.querySelector('.proyecto-contenedor-2')

document.addEventListener('scroll', function () {
    if (window.scrollY > (window.pageYOffset + proyecto2.getBoundingClientRect().top) - (window.innerHeight / 0.9)) {

        proyecto2.classList.add('proyecto-contenedor-2-active')

    }
})

const proyecto3 = document.querySelector('.proyecto-contenedor-3')

document.addEventListener('scroll', function () {
    if (window.scrollY > (window.pageYOffset + proyecto3.getBoundingClientRect().top) - (window.innerHeight / 0.9)) {

        proyecto3.classList.add('proyecto-contenedor-3-active')

    }
})

const proyecto4 = document.querySelector('.proyecto-contenedor-4')

document.addEventListener('scroll', function () {
    if (window.scrollY > (window.pageYOffset + proyecto4.getBoundingClientRect().top) - (window.innerHeight / 0.9)) {

        proyecto4.classList.add('proyecto-contenedor-4-active')

    }
})

const proyecto5 = document.querySelector('.proyecto-contenedor-5')

document.addEventListener('scroll', function () {
    if (window.scrollY > (window.pageYOffset + proyecto5.getBoundingClientRect().top) - (window.innerHeight / 0.9)) {

        proyecto5.classList.add('proyecto-contenedor-5-active')

    }
})

/* ANIMACIONES CLIENTES */

const titulosClientes = document.querySelector('.fila-clientes-titulo')

document.addEventListener('scroll', function () {
    if (window.scrollY > (window.pageYOffset + titulosClientes.getBoundingClientRect().top) - (window.innerHeight / 0.9)) {

        titulosClientes.classList.add('fila-clientes-titulo-active')

    }
})

const flechasClientes = document.querySelector('.fila-clientes-arrows')

document.addEventListener('scroll', function () {
    if (window.scrollY > (window.pageYOffset + flechasClientes.getBoundingClientRect().top) - (window.innerHeight / 0.9)) {

        flechasClientes.classList.add('fila-clientes-arrows-active')

    }
})

const logosClientes = document.querySelector('.fila-clientes-logos')

document.addEventListener('scroll', function () {
    if (window.scrollY > (window.pageYOffset + logosClientes.getBoundingClientRect().top) - (window.innerHeight / 0.9)) {

        logosClientes.classList.add('fila-clientes-logos-active')

    }
})

/* ANIMACIONES SKILLS */

const titulosSkills = document.querySelector('.fila-skills-titulos')
const skills = document.querySelector('.fila-skills-logos')

document.addEventListener('scroll', function () {
    if (window.scrollY > (window.pageYOffset + titulosSkills.getBoundingClientRect().top) - (window.innerHeight / 0.9)) {

        titulosSkills.classList.add('fila-skills-titulos-active')
        skills.classList.add('fila-skills-logos-active')

    }
})


/* ANIMACIONES CONTACTO */

const titulosContacto = document.querySelector('.fila-contacto-titulos')

document.addEventListener('scroll', function () {
    if (window.scrollY > (window.pageYOffset + titulosContacto.getBoundingClientRect().top) - (window.innerHeight / 0.9)) {

        titulosContacto.classList.add('fila-contacto-titulos-active')

    }
})

const bannerContacto = document.querySelector('.fila-contacto')

document.addEventListener('scroll', function () {
    if (window.scrollY > (window.pageYOffset + bannerContacto.getBoundingClientRect().top) - (window.innerHeight / 0.9)) {

        bannerContacto.classList.add('fila-contacto-active')

    }
})

const contactoDatos = document.querySelector('.fila-contacto-datos')

document.addEventListener('scroll', function () {
    if (window.scrollY > (window.pageYOffset + contactoDatos.getBoundingClientRect().top) - (window.innerHeight / 0.9)) {

        contactoDatos.classList.add('fila-contacto-datos-active')

    }
})

const contactoIconos = document.querySelector('.fila-contacto-iconos')

document.addEventListener('scroll', function () {
    if (window.scrollY > (window.pageYOffset + contactoIconos.getBoundingClientRect().top) - (window.innerHeight / 0.9)) {

        contactoIconos.classList.add('fila-contacto-iconos-active')

    }
})