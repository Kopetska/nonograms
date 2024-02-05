export function makeButterflyPictureMarkup() {
  // Top clues

  const topBlockContainer = document.querySelector(".top-clues");

  const topBlocks = [];

  const oneTopIndexes = [
    27, 32, 41, 42, 48, 49, 50, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 73,
  ];
  const twoTopIndexes = [39, 40, 51, 64];
  const threeTopIndexes = [43, 47, 52, 53, 62, 72, 74];
  const fourTopIndexes = [48, 50, 63, 65];
  const fiveTopIndexes = [26, 61];
  const sixTopIndexes = [51, 66];

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
    } else {
      topBlocks.push(`<div class="clue-item"></div>`);
    }
  }

  topBlockContainer.innerHTML = topBlocks.join("");

  //Left clues

  const leftBlockContainer = document.querySelector(".left-clues");

  const leftBlocks = [];

  const oneLeftIndexes = [
    8, 9, 16, 17, 18, 19, 22, 23, 28, 29, 33, 38, 54, 59, 62, 64, 68,
  ];
  const twoLeftIndexes = [32, 43, 49, 57, 58];
  const threeLeftIndexes = [4, 13, 34, 44, 63];
  const fourLeftIndexes = [14, 24];
  const fiveLeftIndexes = [39, 48, 53];
  const sixLeftIndexes = [69];

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
    11, 12, 13, 26, 28, 31, 32, 33, 41, 42, 43, 44, 46, 49, 56, 59, 61, 65, 71,
    72, 73, 74, 76, 81, 91, 92, 96, 98, 99, 100, 107, 112, 113, 114, 115, 116,
    122, 123, 126, 127, 128, 138, 139, 140, 141, 142, 144, 145, 152, 153, 154,
    155, 156, 161, 170, 167, 168, 182, 170, 171, 177, 182, 185, 186, 187, 192,
    201, 203, 204, 205, 206, 207, 208,
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
