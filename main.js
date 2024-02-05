import { makeSnailPictureMarkup } from "./function-snail.js";
import { makeMousePictureMarkup } from "./function-mouse.js";
import { makeFishPictureMarkup } from "./function-fish.js";
import { makeButterflyPictureMarkup } from "./function-butterfly.js";
import { makeCrabPictureMarkup } from "./function-crab.js";
import { makePiranhaPictureMarkup } from "./function-piranha.js";
import { runBasicMarkup } from "./function-basic-markup.js";

// makeSnailPictureMarkup();
// makeMousePictureMarkup();
// makeFishPictureMarkup();
// makeButterflyPictureMarkup();
// makeCrabPictureMarkup();
// makePiranhaPictureMarkup();
runBasicMarkup();

const listOfAllGames = [
  makeSnailPictureMarkup,
  makeMousePictureMarkup,
  makeFishPictureMarkup,
  makeButterflyPictureMarkup,
  makeCrabPictureMarkup,
  makePiranhaPictureMarkup,
];

const listOfPictures = [
  "./images/snail.png",
  "./images/mouse.png",
  "./images/fish.png",
  "./images/butterfly.png",
  "./images/crab.png",
  "./images/piranha.png",
];

const form = document.querySelector("form");

function onFormClick(event) {
  listOfAllGames[Number(event.target.value)]();
}

form.addEventListener("change", onFormClick);

const gameRef = document.querySelector(".game");
const congratulationRef = document.querySelector(".congratulation");

const buttonReset = document.querySelector(".button-reset");
const buttonContinue = document.querySelector(".button-continue");
const buttonSave = document.querySelector(".button-save");
const buttonRandom = document.querySelector(".button-random");
const buttonSolution = document.querySelector(".button-solution");

let counter = 0;

let eventCounter = 0;
let startTimer = 0;
let finishTimer = 0;

let indexOfGame = 0;

function playGame(event) {
  const blackItems = document.querySelectorAll(".to-be-black");
  const congratulationRef = document.querySelector(".congratulation");

  if (event) {
    eventCounter += 1;
  }

  if (eventCounter === 1) {
    startTimer = Date.now();
  }

  if (event.target.classList.contains("to-be-black")) {
    counter += 1;

    if (event.target.classList.contains("black")) {
      event.target.classList.remove("black");
      counter -= 2;
      event.target.innerHTML = `<audio src="./audios/empty-cell.mp3" autoplay></audio>`;
    } else {
      event.target.classList.add("black");
      event.target.innerHTML = `<audio src="./audios/black-cell.mp3" autoplay></audio>`;
    }
  } else {
    event.target.innerHTML = `<img class="cross-mark" src="./images/cross.png" alt="Cross"><audio src="./audios/x-cell.mp3" autoplay></audio>`;
  }

  if (blackItems.length === counter) {
    finishTimer = Date.now();
    congratulationRef.innerHTML = `<span>Great! You have solved the nonogram in ${Math.round(
      (finishTimer - startTimer) / 1000
    )} seconds!</span><audio src="./audios/win.mp3" autoplay></audio>`;

    gameRef.removeEventListener("click", playGame);
  }
}

function onButtonResetClick() {
  gameRef.addEventListener("click", playGame);

  const gameItems = document.querySelectorAll(".clue-item-game");

  congratulationRef.textContent = "";
  counter = 0;
  eventCounter = 0;
  startTimer = 0;
  finishTimer = 0;

  gameItems.forEach((item) => item.classList.remove("black"));
  gameItems.forEach((item) => (item.innerHTML = ""));
}

function onButtonSaveClick() {
  localStorage.setItem(
    "game",
    document.querySelector(".outer-game-container").outerHTML
  );
  localStorage.setItem("counter", counter);
  localStorage.setItem("startTime", startTimer);
}

function onButtonContinueClick() {
  const outerGameContainer = document.querySelector(".outer-game-container");

  const markupFromLS = localStorage.getItem("game");
  const counterFromLS = Number(localStorage.getItem("counter"));
  const startTimeFromLS = Number(localStorage.getItem("startTime"));

  outerGameContainer.outerHTML = markupFromLS;
  counter = counterFromLS;
  startTimer = startTimeFromLS;

  const gameRef = document.querySelector(".game");
  gameRef.addEventListener("click", playGame);

  localStorage.clear();
}

function onButtonRandomClick() {
  const randomGame =
    listOfAllGames[Math.floor(Math.random() * listOfAllGames.length)];

  randomGame();

  indexOfGame = listOfAllGames.indexOf(randomGame);
}

function onButtonSolutionClick() {
  const outerGameContainer = document.querySelector(".outer-game-container");

  const imageSolution = document.createElement("img");
  imageSolution.src = listOfPictures[indexOfGame];
  imageSolution.alt = "Picture of solution";
  imageSolution.classList.add("image-solution");

  outerGameContainer.prepend(imageSolution);

  setTimeout(() => {
    imageSolution.remove();
  }, 7000);
}

// gameRef.addEventListener("click", playGame);

// buttonReset.addEventListener("click", onButtonResetClick);
// buttonContinue.addEventListener("click", onButtonContinueClick);
// buttonSave.addEventListener("click", onButtonSaveClick);
// buttonRandom.addEventListener("click", onButtonRandomClick);
// buttonSolution.addEventListener("click", onButtonSolutionClick);

gameRef.addEventListener("click", playGame);

buttonReset.addEventListener("click", onButtonResetClick);
buttonContinue.addEventListener("click", onButtonContinueClick);
buttonSave.addEventListener("click", onButtonSaveClick);
buttonRandom.addEventListener("click", onButtonRandomClick);
buttonSolution.addEventListener("click", onButtonSolutionClick);
