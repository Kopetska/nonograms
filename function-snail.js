export function makeSnailPictureMarkup() {
  // Top clues

  const topBlockContainer = document.querySelector(".top-clues");

  const topBlocks = [];

  const oneTopIndexes = [60, 61, 73, 74];
  const twoTopIndexes = [38, 39, 54, 64, 68, 72];
  const threeTopIndexes = [45, 46, 52, 55, 57, 67];
  const fourTopIndexes = [53, 69, 70];
  const fiveTopIndexes = [63];
  const sevenTopIndexes = [65];
  const eightTopIndexes = [62];
  const nineTopIndexes = [66, 71];

  for (let i = 0; i < 75; i++) {
    if (oneTopIndexes.includes(i)) {
      topBlocks.push(`<div class="clue-item">1</div>`);
    } else if (twoTopIndexes.includes(i)) {
      topBlocks.push(`<div class="clue-item">2</div>`);
    } else if (threeTopIndexes.includes(i)) {
      topBlocks.push(`<div class="clue-item">3</div>`);
    } else if (fourTopIndexes.includes(i)) {
      topBlocks.push(`<div class="clue-item">4</div>`);
    } else if (fiveTopIndexes.includes(i)) {
      topBlocks.push(`<div class="clue-item">5</div>`);
    } else if (sevenTopIndexes.includes(i)) {
      topBlocks.push(`<div class="clue-item">7</div>`);
    } else if (eightTopIndexes.includes(i)) {
      topBlocks.push(`<div class="clue-item">8</div>`);
    } else if (nineTopIndexes.includes(i)) {
      topBlocks.push(`<div class="clue-item">9</div>`);
    } else {
      topBlocks.push(`<div class="clue-item"></div>`);
    }
  }

  topBlockContainer.innerHTML = topBlocks.join("");

  //Left clues

  const leftBlockContainer = document.querySelector(".left-clues");

  const leftBlocks = [];

  const oneLeftIndexes = [11, 12, 15, 16, 20, 21, 28];
  const twoLeftIndexes = [13, 14, 17, 18, 19, 22, 23, 24, 27, 29, 33];
  const threeLeftIndexes = [26, 32, 37, 38, 39];
  const fourLeftIndexes = [4, 34];
  const sixLeftIndexes = [9];
  const elevenLeftIndexes = [44];
  const fifteenLeftIndexes = [49];

  for (let i = 0; i < 50; i++) {
    if (oneLeftIndexes.includes(i)) {
      leftBlocks.push(`<div class="clue-item">1</div>`);
    } else if (twoLeftIndexes.includes(i)) {
      leftBlocks.push(`<div class="clue-item">2</div>`);
    } else if (threeLeftIndexes.includes(i)) {
      leftBlocks.push(`<div class="clue-item">3</div>`);
    } else if (fourLeftIndexes.includes(i)) {
      leftBlocks.push(`<div class="clue-item">4</div>`);
    } else if (sixLeftIndexes.includes(i)) {
      leftBlocks.push(`<div class="clue-item">6</div>`);
    } else if (elevenLeftIndexes.includes(i)) {
      leftBlocks.push(`<div class="clue-item">11</div>`);
    } else if (fifteenLeftIndexes.includes(i)) {
      leftBlocks.push(`<div class="clue-item">15</div>`);
    } else {
      leftBlocks.push(`<div class="clue-item"></div>`);
    }
  }

  leftBlockContainer.innerHTML = leftBlocks.join("");

  //Game block

  const gameContainer = document.querySelector(".game");

  const gameBlocks = [];

  const blackBlocks = [
    7, 8, 9, 10, 21, 22, 23, 24, 25, 26, 30, 32, 36, 37, 40, 41, 45, 47, 50, 51,
    53, 54, 56, 57, 60, 62, 65, 66, 68, 69, 71, 72, 76, 77, 78, 80, 81, 83, 86,
    87, 91, 92, 93, 95, 96, 98, 99, 100, 101, 106, 107, 108, 110, 111, 112, 114,
    115, 116, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 135, 136,
    137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149,
  ];

  for (let i = 0; i < 150; i++) {
    gameBlocks.push(`<div class="clue-item-game"></div>`);
  }

  for (let i = 0; i < gameBlocks.length; i++) {
    if (blackBlocks.includes(i)) {
      gameBlocks[i] = `<div class="clue-item-game to-be-black"></div>`;
    }
  }

  gameContainer.innerHTML = gameBlocks.join("");
  const outerContainer = document.querySelector(".outer-game-container");
  outerContainer.classList.add("snail");
}
