import { Application, Controller } from 'stimulus';
window.Stimulus = Application.start()

const button = document.querySelector(".btn");

button.addEventListener("click", (event) => {
  console.log("I was clicked");
  event.currentTarget.classList.remove("btn-primary");
  event.currentTarget.classList.add("btn-danger");
  event.currentTarget.innerText = "Bingo!";
 })



