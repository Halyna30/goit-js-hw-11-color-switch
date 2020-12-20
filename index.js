const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  start: document.querySelector("[data-action='start']"),
  stop: document.querySelector("[data-action='stop']"),
  body: document.querySelector("body"),
};

const changeColor = {
  intervalId: null,
  changeColorActive: false,
  on() {
    if (this.changeColorActive) {
      return;
    }

    this.changeColorActive = true;

    this.intervalId = setInterval(() => {
      console.log("change color");
      refs.body.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colors.length)];
    }, 1000);
  },
  off() {
    console.log("stop change");
    this.changeColorActive = false;
    clearInterval(this.intervalId);
  },
};

console.log("Переключатель цветов");
refs.start.addEventListener("click", changeColor.on.bind(changeColor));

refs.stop.addEventListener("click", changeColor.off.bind(changeColor));
