export function makeFishPictureMarkup() {
  // Top clues

  const topBlockContainer = document.querySelector(".top-clues");

  const topBlocks = [];

  const oneTopIndexes = [19, 34, 42, 45, 49, 64, 72];
  const twoTopIndexes = [30, 31, 33, 36, 38, 41, 48, 56, 61, 63, 66, 68];
  const threeTopIndexes = [4, 46, 50, 52, 54, 59, 60, 67, 69, 71, 74];
  const fourTopIndexes = [57, 65];
  const fiveTopIndexes = [51];
  const sixTopIndexes = [62, 73];
  const eightTopIndexes = [53];
  const fourteenTopIndexes = [70];

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
    } else if (sixTopIndexes.includes(i)) {
      topBlocks.push(`<div class="clue-item">6</div>`);
    } else if (eightTopIndexes.includes(i)) {
      topBlocks.push(`<div class="clue-item">8</div>`);
    } else if (fourteenTopIndexes.includes(i)) {
      topBlocks.push(`<div class="clue-item">14</div>`);
    } else {
      topBlocks.push(`<div class="clue-item"></div>`);
    }
  }

  topBlockContainer.innerHTML = topBlocks.join("");

  //Left clues

  const leftBlockContainer = document.querySelector(".left-clues");

  const leftBlocks = [];

  const oneLeftIndexes = [
    15, 18, 19, 22, 23, 25, 26, 27, 28, 31, 32, 33, 37, 38, 42, 43, 46, 47, 48,
    53, 54, 57, 63, 68, 73,
  ];
  const twoLeftIndexes = [3, 8, 14, 17, 24, 30, 36, 45, 49, 51, 52, 67, 74];
  const threeLeftIndexes = [16, 29, 44, 58, 59];
  const fourLeftIndexes = [13, 34, 39];
  const fiveLeftIndexes = [4, 21, 69];
  const sixLeftIndexes = [9, 41, 64];

  for (let i = 0; i < 75; i++) {
    if (oneLeftIndexes.includes(i)) {
      leftBlocks.push(`<div class="clue-item">1</div>`);
    } else if (twoLeftIndexes.includes(i)) {
      leftBlocks.push(`<div class="clue-item">2</div>`);
    } else if (threeLeftIndexes.includes(i)) {
      leftBlocks.push(`<div class="clue-item">3</div>`);
    } else if (fourLeftIndexes.includes(i)) {
      leftBlocks.push(`<div class="clue-item">4</div>`);
    } else if (fiveLeftIndexes.includes(i)) {
      leftBlocks.push(`<div class="clue-item">5</div>`);
    } else if (sixLeftIndexes.includes(i)) {
      leftBlocks.push(`<div class="clue-item">6</div>`);
    } else {
      leftBlocks.push(`<div class="clue-item"></div>`);
    }
  }

  leftBlockContainer.innerHTML = leftBlocks.join("");

  //Game block

  const gameContainer = document.querySelector(".game");

  const gameBlocks = [];

  const blackBlocks = [
    0, 1, 8, 9, 10, 11, 12, 15, 16, 21, 22, 23, 24, 25, 26, 34, 35, 36, 37, 39,
    40, 45, 48, 49, 50, 52, 53, 55, 59, 62, 63, 64, 65, 66, 68, 70, 73, 74, 77,
    81, 83, 85, 87, 88, 89, 91, 92, 94, 96, 98, 100, 101, 102, 103, 106, 107,
    111, 113, 115, 116, 117, 118, 121, 122, 123, 124, 125, 126, 128, 130, 132,
    133, 134, 137, 138, 140, 143, 145, 148, 149, 154, 155, 157, 158, 160, 164,
    165, 170, 171, 172, 174, 175, 176, 180, 186, 187, 188, 189, 190, 191, 195,
    196, 198, 203, 204, 205, 206, 207, 211, 213, 214,
  ];

  for (let i = 0; i < 225; i++) {
    gameBlocks.push(`<div class="clue-item-game"></div>`);
  }

  for (let i = 0; i < gameBlocks.length; i++) {
    if (blackBlocks.includes(i)) {
      gameBlocks[i] = `<div class="clue-item-game to-be-black"></div>`;
    }
  }

  gameContainer.innerHTML = gameBlocks.join("");
  const outerContainer = document.querySelector(".outer-game-container");
  outerContainer.classList.add("easy-level");
}
