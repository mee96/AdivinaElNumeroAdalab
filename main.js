"user strict";

console.log("konichiwa, sekai");


const max = 100;
function getRandomNumber(max) {
 return Math.ceil(Math.random() * max);

}
console.log(getRandomNumber(max));

const button = document.querySelector(".js-button");
let contador = 0;
const intentos = document.querySelector(".js-intentos");
const handlePrueba = (ev) => {
    ev.preventDefault();
    contador++;
    intentos.innerHTML = `Número de intentos : ${contador}`;
}
button.addEventListener("click", handlePrueba)