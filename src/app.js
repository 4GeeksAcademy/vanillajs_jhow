/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["El perro", "Mi abuela", "El cartero", "El cumpleañero"];
let action = ["se comió", "mojó", "aplastó", "dañó"];
let what = ["mi trabajo", "mi teléfono", "el carro"];
let when = [
  "antes de clase",
  "cuando dormía",
  "mientras hacía ejercicio",
  "durante la comida",
  "mientras rezaba"
];
// Función para generar una excusa aleatoria
function generarExcusa() {
  // Función para obtener un elemento aleatorio de un array
  function obtenerElementoAleatorio(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // Generar una excusa
  let excusa = `${obtenerElementoAleatorio(who)} ${obtenerElementoAleatorio(
    action
  )} ${obtenerElementoAleatorio(what)} ${obtenerElementoAleatorio(when)}.`;

  return excusa;
}
let excusaGenerada = generarExcusa();

document.getElementById("excusa").innerHTML = excusaGenerada;
