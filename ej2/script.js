//* Pide al usuario varios datos por pantalla  el ciclo y su modulo favorito, poniendo uno por defecto
//en el cuadro de busqueda


let go = true;
//creamos un bucle para que se repita el proceso hasta que el usuario introduzca la información correcta
while (go) {

    //el usuario debe introducir dos variables, indistintamente en minúscula o en mayúscula.

    let ciclo = prompt('Dime tu ciclo formativo favorito: ', 'DAW').toUpperCase();
    let modulo= prompt('Dime tu modulo de este ciclo favorito:', 'DWEC').toUpperCase();

    //ponemos condiciones para que no pueda introducir ni numeros ni espacios en blanco
    if((!isNaN(ciclo) || ciclo == " ") || (!isNaN(modulo) || modulo == " ")) {
        //en caso de cumplirse esta condición el bucle continúa y se envia un mensaje de advertencia
        go = true;
        alert('Introduce nombres validos!!!');
    }
    else {
        //en caso de introducir nombres validos se imprime por pantalla el siguiente mensaje y se sale del bucle
        document.write(`Tu ciclo favorito es ${ciclo} y tu modulo favorito es ${modulo}`);
        break;
    }
}




    


