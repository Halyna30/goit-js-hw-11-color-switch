import _ from "lodash";
import "./style.css";

// const colors = [
//   "#FFFFFF",
//   "#2196F3",
//   "#4CAF50",
//   "#FF9800",
//   "#009688",
//   "#795548",
// ];

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const refs = {
//   start: document.querySelector("[data-action='start']"),
//   stop: document.querySelector("[data-action='stop']"),
//   body: document.querySelector("body"),
// };

// refs.start.addEventListener("click", changeColorOn);

// refs.stop.addEventListener("click", changeColorOn);

// function changeColorOn(event) {
//   console.log(event.target);
//   console.dir(event);
//   console.log(event.currentTarget);
//   // if (event.target === refs.stop) {
//   //   clearInterval(intervalId);
//   //   return;
//   // }
//   setInterval(() => {
//     console.log("Change color");
//   }, 1000);
// }

// // function changeColorOff(event) {
// //   clearInterval(intervalId);
// //   console.log(event.target);
// // }

console.log("Переключатель цветов");

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  return element;
}

document.body.appendChild(component());
console.log("hello");