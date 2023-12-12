//hacemos una constante que se llame flechas que almacene todas las arrow del html
const flechas = document.querySelectorAll('.arrow');

//por cada flecha se hace lo siguiente
flechas.forEach(arrow  => {
    //por cada click se va a coger al elemento hermano de la clase padre de arrow
    // y se va a almacenar en la clase submenu, posteriormente se le aplica la clase show
    //y luego al elemento arrow se le aplica rotate-arrow para que gire
    arrow.addEventListener('click', function() {
        const submenu = this.parentElement.nextElementSibling;
        submenu.classList.toggle('show');
        this.classList.toggle('rotate-arrow');
        //o this.style.transform = rotate(90deg);
    })
})