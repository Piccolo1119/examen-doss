
//creamos una constante que va almacenar la clase '.hamburger' del html
const burger = document.querySelector('.hamburger');
//creamos una constante que va almacenar la clase '.nav-links' del html
const navlinks = document.querySelector('.nav-links');

//creamos un evento de click, que al clickar en hamburguesa los nav-links se activen (pasan a clase active)
burger.addEventListener('click', function() {
    navlinks.classList.toggle('active');
})