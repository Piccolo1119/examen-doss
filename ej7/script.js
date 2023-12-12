/* Realiza una función prototipo llamada cuenta bancaria que tenga 3 atributos genéricos (nombre, dni, edad) 
y un atributo importante "saldo". Además tendrá 2 métodos:
retirar dinero e ingresar dinero. Probar su funcionamiento con un ingreso y una retirada (pág 12/pdf POO)*/


//declaramos la funcion llamada cuentabancaria dodne se introducen unos parametros de entrada
function CuentaBancaria(nombre, edad, dni, saldo) {

    //declaramos los atributos de los parametros de entrada
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.saldo = saldo;

    //creamos dos funciones prototipo que accede directamente a los atributos mediante el this

    this.retirar = function(dinero) {
        if (this.saldo <= 0) {
            return('No te queda pasta');
        }
        else {
            this.saldo -= dinero;
            return(`Te queda este dinero: ${this.saldo}`);
        }
    }
    this.ingresar = (dinero) => {
        this.saldo += dinero;
        return(`Tienes este dinero: ${this.saldo}`);
    }
}

//creamos una funcion prototipo fuera, llamandola para obtener los datos
CuentaBancaria.prototype.mostrarInfo = function() {
    console.log(`Nombre: ${this.nombre}, edad: ${this.edad}, dni ${this.dni}. Tienes ${this.saldo} euros en la cuenta`);
}

//introducimos los parametros de enrtrada y los consoleamos.
let miCuenta = new CuentaBancaria('Julio', '22', '03205147M', 300);
miCuenta.mostrarInfo();
console.log(miCuenta.retirar(200));
console.log(miCuenta.ingresar(500));
miCuenta.mostrarInfo();