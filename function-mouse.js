export function makeMousePictureMarkup() {
  // Top clues

  const topBlockContainer = document.querySelector(".top-clues");

  const topBlocks = [];

  const oneTopIndexes = [
    9, 18, 24, 33, 34, 40, 46, 47, 49, 53, 54, 61, 62, 63, 68, 70,
  ];
  const twoTopIndexes = [22, 35, 37, 52, 67, 69, 72];
  const threeTopIndexes = [32, 39, 48, 50, 60, 71, 73];
  const fourTopIndexes = [64, 74];
  const fiveTopIndexes = [55];
  const sixTopIndexes = [65];
  const eightTopIndexes = [38];
  const elevenTopIndexes = [66];

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
    } else if (elevenTopIndexes.includes(i)) {
      topBlocks.push(`<div class="clue-item">11</div>`);
    } else {
      topBlocks.push(`<div class="clue-item"></div>`);
    }
  }

  topBlockContainer.innerHTML = topBlocks.join("");

  //Left clues

  const leftBlockContainer = document.querySelector(".left-clues");

  const leftBlocks = [];

  const oneLeftIndexes = [8, 9, 11, 12, 13, 14, 18, 22, 24, 44, 48, 49, 58, 68];
  const twoLeftIndexes = [4, 43, 54, 63];
  const threeLeftIndexes = [7, 29, 59, 64];
  const fourLeftIndexes = [23, 28, 47, 57, 69, 74];
  const fiveLeftIndexes = [39, 44];
  const sixLeftIndexes = [19, 34, 53];
  const eightLeftIndexes = [62];

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
    } else if (eightLeftIndexes.includes(i)) {
      leftBlocks.push(`<div class="clue-item">8</div>`);
    } else {
      leftBlocks.push(`<div class="clue-item"></div>`);
    }
  }

  leftBlockContainer.innerHTML = leftBlocks.join("");

  //Game block

  const gameContainer = document.querySelector(".game");

  const gameBlocks = [];

  const blackBlocks = [
    9, 10, 18, 19, 20, 23, 26, 32, 35, 38, 41, 47, 51, 52, 53, 54, 55, 56, 62,
    65, 66, 67, 68, 70, 78, 79, 80, 81, 83, 84, 85, 95, 96, 97, 98, 99, 100,
    111, 112, 113, 114, 115, 125, 126, 128, 139, 140, 141, 142, 144, 149, 153,
    154, 155, 156, 157, 158, 163, 164, 168, 169, 170, 171, 174, 177, 178, 179,
    180, 181, 182, 183, 184, 185, 186, 187, 189, 190, 192, 193, 194, 195, 200,
    201, 202, 203, 210, 211, 212, 213,
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
