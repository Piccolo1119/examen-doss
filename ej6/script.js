/* Crea un script que pida al usuario 5 números, y muestre en pantalla únicamente la suma 
de los que son números primos. */

//declaramos las variables contador para contar cuantos numeros llevamos introducidos y la suma de estos
let cont = 0;
let suma = 0;

//abrimos un contador que va a ir acumulando intentos
while (cont < 5) {
    let num = parseInt(prompt(`Vas por el numero: ${cont + 1}`))
    //si es distinto de numero o espacio en blanco sigue el bucle sin contar el intento
    if (isNaN(num) || num == " " ){
        continue;
    }
    //se cuenta el intento y se pasa a comprobar si es primo o no
    else {
        cont++;
    }
    //declaramos una variable que indica que es falso que sea primo y que no entre el 1 en juego
    let esPrimo = false;
    //comenzamos un bucle por cada numero introducido
    // hay que contar desde el 2 hasta el numero indicado
    for (let i = 2; i <= num; i++) {
        //si es divisible el numero introducido por el indicado en la cuenta y ademas son distintos, no es primo y sale del bucle
        if(num % i === 0 && num !== i) {
            esPrimo = false;
            break;
        //si no se cumple es que será primo, y se siguen comprobando los numeros hasta que se confirma y se acaba el bucle
        } else{
            esPrimo = true;
        }
    }
    //en caso de serlo se cumple esta condicion y se suma, luego volvemos al bucle que se pregunta
    if(esPrimo) {
        suma += num;
    }
}

alert(`La suma de los primos es igual a = ${suma}`);