/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let quien = [
    "la vecina",
    "mi tio",
    "El pepe",
    "bolivar y su espada",
    "harry potter",
    "CR7"
  ];
  let accion = ["robo", "salio", "pateo", "quiso", "volo"];
  let que = [
    "una media",
    "la patilla",
    "el celular",
    "la mantequilla",
    "el banano"
  ];
  let cuando = ["antier", "hace 1 semana", "ahoritica", "ayer"];

  function generateRandomSentence() {
    let randomCuando = cuando[Math.floor(Math.random() * cuando.length)];
    let randomQuien = quien[Math.floor(Math.random() * quien.length)];
    let randomQue = que[Math.floor(Math.random() * que.length)];
    let randomAccion = accion[Math.floor(Math.random() * accion.length)];

    return (
      randomQuien + " " + randomAccion + " " + randomQue + " " + randomCuando
    );
  }
  console.log(generateRandomSentence());
  let excuse = document.getElementById("excuse");
  excuse.innerHTML = generateRandomSentence();

  document.getElementById("generateButton").addEventListener("click", () => {
    window.location.reload();
  });
};
