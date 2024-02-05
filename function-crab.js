export function makeCrabPictureMarkup() {
  // Top clues

  const topBlockContainer = document.querySelector(".top-clues");

  const topBlocks = [];

  const oneTopIndexes = [
    6, 8, 16, 19, 20, 21, 23, 24, 25, 28, 34, 40, 60, 61, 62, 64, 65, 66, 67,
    68, 69, 70, 72, 73, 74,
  ];
  const twoTopIndexes = [1, 31, 35, 36, 38, 39, 43, 45, 46, 51, 52, 53, 58, 59];
  const threeTopIndexes = [13, 30, 32, 33, 37, 41, 42, 50, 54, 63, 71];
  const fourTopIndexes = [44, 48, 56];
  const fiveTopIndexes = [47, 57];
  const sevenTopIndexes = [49, 55];

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
    } else {
      topBlocks.push(`<div class="clue-item"></div>`);
    }
  }

  topBlockContainer.innerHTML = topBlocks.join("");

  //Left clues

  const leftBlockContainer = document.querySelector(".left-clues");

  const leftBlocks = [];

  const oneLeftIndexes = [26, 27, 28, 29, 32, 52, 54, 61, 64, 68, 69];
  const twoLeftIndexes = [24, 30, 31, 33, 34, 57, 59, 62, 63];
  const threeLeftIndexes = [14, 18, 43];
  const fourLeftIndexes = [42, 44];
  const fiveLeftIndexes = [9, 13, 19, 23];
  const sixLeftIndexes = [48, 49];
  const sevenLeftIndexes = [58];
  const elevenLeftIndexes = [39, 53];
  const fifteenLeftIndexes = [74];

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
    } else if (sevenLeftIndexes.includes(i)) {
      leftBlocks.push(`<div class="clue-item">7</div>`);
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
    23, 24, 25, 26, 27, 32, 33, 34, 35, 36, 41, 42, 43, 46, 47, 48, 55, 56, 57,
    58, 59, 60, 61, 62, 63, 64, 73, 74, 75, 81, 83, 89, 90, 91, 94, 95, 97, 99,
    100, 103, 104, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 121,
    122, 123, 124, 126, 127, 128, 130, 131, 132, 133, 135, 136, 137, 138, 139,
    140, 144, 145, 146, 147, 148, 149, 150, 152, 153, 154, 155, 156, 157, 158,
    159, 160, 161, 162, 164, 166, 167, 169, 170, 171, 172, 173, 174, 175, 177,
    178, 181, 183, 184, 190, 191, 193, 198, 206, 210, 211, 212, 213, 214, 215,
    216, 217, 218, 219, 220, 221, 222, 223, 224,
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
