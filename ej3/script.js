/* Obten la hora actual del día con los métodos date() y getHours().
A continuación da los buendos días, buenas tardes o buenas noches dependiendo de la hora. */

//creamos una variable llamada fecha que almacene la fecha actual en el formato estámndar europeo
let fecha = new Date();
//creamos otra variable llamada horas que obtenga unicamente la hora
let horas = fecha.getHours();

//establecemos unos condicionales, para dar los buenos dias, tardes y noches por mensaje dependiendo de esta hora
if (horas >= 6 && horas < 12) {

    alert('Buenos dias!!');

} else if (horas >=12 && horas < 21) {

    alert('Buenas tardes!!!');

} else {

    alert('Buenas noches!!')
}