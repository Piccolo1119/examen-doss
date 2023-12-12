//ejercicio 5.20 del libro

//creamos una clase llamada Aula
class Aula {
    //establecemos un constructor que acepte dos parametros de entrada en la creación de un objeto con la clase Aula, 
    //Estos serán alumnos y sillas
    constructor(alumnos, sillas) {
        this.alumnos = alumnos;
        this.sillas = sillas;
    }

    //creamos un metodo que muestre por consola la información introducida
    mostrarInfo() {
        console.log(`Las aulas tienen ${this.alumnos} y ${this.sillas} sillas`);
    }
}

//ahora creamos una clase llamada música que herede de Aula
class Musica extends Aula {
    
    //Creamos un constructor que acepte los atributos de la clase padre (Aula) mediante el super() y a parte
    //Añadimos el atributo "pizarraDigital" 
    constructor(alumnos, sillas, pizarraDigital) {
        super(alumnos, sillas);
        this.pizarraDigital = pizarraDigital;
    }
    //creamos un metodo que muestre por consola la información introducida y en este caso se añade
    // que se pueda introducir la existencia o no de una pizarraDigital
    mostrarInfo() {
        console.log(`El aula de música tiene ${this.alumnos} alumnos, ${this.sillas} sillas y ${this.pizarraDigital} tiene pizarra digial`);
    }
}

class Tecnologia extends Aula {
    
    constructor(alumnos, sillas, pizarraDigital) {
        super(alumnos, sillas);
        this.pizarraDigital = pizarraDigital;
    }
    //creamos un metodo que muestre por consola la información introducida y en este caso se añade
    // que se pueda introducir la existencia o no de una pizarraDigital

    mostrarInfo() {
        console.log(`El aula de tecnología tiene ${this.alumnos} alumnos, ${this.sillas} sillas y ${this.pizarraDigital} tiene pizarra digial`);
    }
}

//ahora creamos un objeto por cada una las clases y mostramos su información
let miAula = new Aula(25, 40);
miAula.mostrarInfo();

let miMusica = new Musica(15, 35 , "si");
miMusica.mostrarInfo();

let miTecnologia = new Tecnologia(30, 45, "no");
miTecnologia.mostrarInfo();
