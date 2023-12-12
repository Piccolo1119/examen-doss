/* 5.24 Crea una clase Película que permita gestionar esta información: nombre de la película, año de estreno,
duración, género, los seis actores o actrices más importantes, la URL de su cartel promocional y su director;
y una acción que permita mostrar en consola toda la información. El constructor recibirá los datos
en una cadena JSONde la que deberá sacar los valores de cada propiedad. Crea un objeto de la clase y ponla a prueba.*/


//metemos en una variable llamada pelicula una nuevca cadena string en formato json

let cadenaPelicula = new String(`{
    "nombre" : "Señor de los anillos",
    "año" : "2001",
    "actores" : "[Elijah wood, Vigo, Orlando]"}`);

console.log(cadenaPelicula);

//creamos una clase pelicula donde introduciremos la cadena json
class Pelicula {
    constructor(cadenaJSON) {ç
        //hacemos que se introduzca en el constructor y que cada atributo pase a formato objeto
        this.cadenaJSON = JSON.parse(cadenaJSON);
        this.nombre = this.cadenaJSON.nombre;
        this.año = this.cadenaJSON.año;
        this.actores = this.cadenaJSON.actores;
    }

    //mostramos la info por pantalla.
    mostrarInfo() {
        console.log(`La pelicula ${this.nombre} se estrenó en el año ${this.año} con estos actores: 
        ${this.actores}`);
    }
}

let miPeli = new Pelicula(cadenaPelicula);
miPeli.mostrarInfo();