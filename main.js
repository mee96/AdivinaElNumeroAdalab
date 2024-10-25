"user strict";

console.log("konichiwa, sekai");


const max = 100;
function getRandomNumber(max) {
 return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(max);
console.log(randomNumber);


const button = document.querySelector(".js-button");
let contador = 0;
const NumeroUser = document.querySelector(".js-num");
const intentos = document.querySelector(".js-intentos");
const pista = document.querySelector(".js-pista");
const handlePrueba = (ev) => {
    ev.preventDefault();
    contador++;
    intentos.innerHTML = `Número de intentos : ${contador}`;
    const numuser = parseInt(NumeroUser.value) ;
    console.log(numuser);

    if (numuser === randomNumber) {
     pista.innerHTML = "¡Has ganado campeona!";
    } else if (numuser < randomNumber) {
        pista.innerHTML = "Demasiado alto";
    } else if(numuser > randomNumber){
        pista.innerHTML = "Demasiado bajo";
        
    } else if(numuser > max) { 
        pista.innerHTML = " El número debe estar entre 100 y 1";
    }
}







button.addEventListener("click", handlePrueba);
