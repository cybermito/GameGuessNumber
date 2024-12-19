//Vamos a crear la lógica del juego

//Declaración de variables

//Generamos el número aleatorio
let randomNumber = Math.floor(Math.random() * 100) + 1;

//Guardamos una referencia a los elementos "p" de nuestro HTML
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

//Guardamos la referencia a los elementos input con las
//clases especificadas
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

//Guardamos el número de intentos y una variable para generar
//un botón de reset
let guessCount = 1;
let resetButton //Para crear una referencia a un botón.

//Funciones
//Son bloques de código reutilizable que escribimos una sola vez
//y podemos ejecutar una y otra vez, ahorrando la necesidad de
//repetir código todo el tiempo.

function checkGuess(){
    //condicionales
    // Son instrucciones que comprueban una comparación y
    //realizará una acción u otra según sea verdadero o falso.
    //Sintaxis condicones
    /*
        if (condición) {
            Cuando condición es True
            Ejecuto este bloque de código
        } else {
            Cuenado condición es False
            Ejecuto este bloque de código 
        }
    */

    let userGuess = Number(guessField.value);

    //Comprobamos si el número introducido es igual al 
    //número aleatorio
    if (userGuess === randomNumber) {
        //Si es igual, mostramos mensaje de Felicitación
        lastResult.textContent = "¡Felicidades! ¡Lo has logrado!";
        //Cambiamos los estilos de fondo de lastResult
        lastResult.style.backgroundColor = "green";
        //Quitamos el texto de lowOrHi
        lowOrHi.textContent = "";
        setGameOver(); 
    } else if (guessCount === 10) { //fallamos y no quedan intentos
        lastResult.textContent = "¡Fin del juego!";
        setGameOver();
    } else {
        lastResult.textContent = "¡Incorrecto!";
        lastResult.style.backgroundColor = "red";
        //Comprobamos si el número introducido es mayor o menor al aleatorio
        //Es la ayuda al jugador para adivinar el número
        if (userGuess < randomNumber){
            lowOrHi.textContent = "¡El número es muy bajo!";
        }else if (userGuess > randomNumber) {
            lowOrHi.textContent = "¡El número es muy grande!";
        }
    }

    guessCount++;
    guessField.value = "";
    guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Iniciar nuevo juego";
    resetButton.style.backgroundColor = "black";
    resetButton.style.color = "lightgreen";
    resetButton.style.padding = "10px";
    resetButton.style.border = "1px solid green";
    resetButton.style.borderRadius = "5px";
    document.body.append(resetButton);
    resetButton.addEventListener("click", resetGame);
}

function resetGame(){
    guessCount = 1;

    const resetParas = document.querySelectorAll(".resultParas p");
    //Bucle
    //Sintaxis for
    /* 
        for (inicializar contador; condición de parada; incrementar |
        decrementar variable contador){
            bloque de código
        }
    */
    for ( let i = 0; i < resetParas.length; i++){
        resetParas[i].textContent = "";
    }

    //Eliminamos el botón reset game.
    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = "black";

    randomNumber = Math.floor(Math.random() * 100) + 1;
}