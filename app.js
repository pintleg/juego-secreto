// con el document.querySelector , interactuamos con el archivo de HTML. Creamos un puente, usando la etiqueta(h1, p)

//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Juego del número secreto';
//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un número del 1 al 10';

//anatomia de una función.
//declaración de función.
//Como podemos ver, transformarmos dos asignaciones en una con una función. 

//Lo anterior, se deja como ayuda, pero podemos ver que las funciones se redujeron en una única funciòn.

let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
// Función que imprime el texto que queramos en el elemento que necesitemos.

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return; //buena practica.
}

// Función que lee de la caja cuantos intentos el usuario escogio.
function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        } else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    }

//Función de Limpieza de Caja

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

//Función generadora de número aleatorio entre 1 y 10;
function generadorDeNumero() {
    let numeroGenerado = Math.floor((Math.random()*numeroMaximo+1));
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Su ya sorteamos todos los números.
    if(listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos lo números posibles')
    } else{
    //Si el número generado esta incluido en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generadorDeNumero();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
   }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generadorDeNumero();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    condicionesIniciales();
    //Deshabilitar el bóton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
