export function makePiranhaPictureMarkup() {
  // Top clues

  const topBlockContainer = document.querySelector(".top-clues");

  const topBlocks = [];

  const oneTopIndexes = [33, 62, 91, 94, 98, 106, 107, 113, 114, 142];
  const twoTopIndexes = [63, 64, 82, 92, 93, 95, 99, 100, 120, 121, 141];
  const threeTopIndexes = [39, 65, 69, 70, 97, 101, 108, 109, 122, 123];
  const fourTopIndexes = [67, 68, 71, 119, 124, 125, 126, 149];
  const fiveTopIndexes = [110];
  const sixTopIndexes = [61, 127, 128];
  const eightTopIndexes = [118, 129, 143, 148];
  const tenTopIndexes = [130, 144];
  const elevenTopIndexes = [96, 112];
  const twelveTopIndexes = [131];
  const thirteenTopIndexes = [102, 132, 145];
  const sixteenTopIndexes = [146];
  const nineteenTopIndexes = [138, 147];
  const twentyTopIndexes = [139, 140];
  const twentyTwoTopIndexes = [111, 133, 137];
  const twentyFourTopIndexes = [134];
  const twentyFiveTopIndexes = [135];
  const twentySixTopIndexes = [136];

  for (let i = 0; i < 150; i++) {
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
    } else if (tenTopIndexes.includes(i)) {
      topBlocks.push(`<div class="clue-item">10</div>`);
    } else if (elevenTopIndexes.includes(i)) {
      topBlocks.push(`<div class="clue-item">11</div>`);
    } else if (twelveTopIndexes.includes(i)) {
      topBlocks.push(`<div class="clue-item">12</div>`);
    } else if (thirteenTopIndexes.includes(i)) {
      topBlocks.push(`<div class="clue-item">13</div>`);
    } else if (sixteenTopIndexes.includes(i)) {
      topBlocks.push(`<div class="clue-item">16</div>`);
    } else if (nineteenTopIndexes.includes(i)) {
      topBlocks.push(`<div class="clue-item">19</div>`);
    } else if (twentyTopIndexes.includes(i)) {
      topBlocks.push(`<div class="clue-item">20</div>`);
    } else if (twentyTwoTopIndexes.includes(i)) {
      topBlocks.push(`<div class="clue-item">22</div>`);
    } else if (twentyFourTopIndexes.includes(i)) {
      topBlocks.push(`<div class="clue-item">24</div>`);
    } else if (twentyFiveTopIndexes.includes(i)) {
      topBlocks.push(`<div class="clue-item">25</div>`);
    } else if (twentySixTopIndexes.includes(i)) {
      topBlocks.push(`<div class="clue-item">26</div>`);
    } else {
      topBlocks.push(`<div class="clue-item"></div>`);
    }
  }

  topBlockContainer.innerHTML = topBlocks.join("");

  //Left clues

  const leftBlockContainer = document.querySelector(".left-clues");

  const leftBlocks = [];

  const oneLeftIndexes = [
    14, 28, 36, 41, 42, 45, 46, 47, 50, 51, 52, 53, 55, 56, 57, 58, 62, 67, 83,
    124, 144, 148, 149,
  ];
  const twoLeftIndexes = [19, 23, 63, 119, 139, 143];
  const threeLeftIndexes = [
    24, 34, 37, 68, 78, 88, 104, 109, 114, 123, 129, 133, 134, 138,
  ];
  const fourLeftIndexes = [18, 29, 39, 44, 92, 99, 127, 128];
  const fiveLeftIndexes = [4, 9, 49, 94];
  const sixLeftIndexes = [13, 32];
  const eightLeftIndexes = [17];
  const nineLeftIndexes = [122];
  const tenLeftIndexes = [38, 43];
  const elevenLeftIndexes = [33, 48];
  const twelveLeftIndexes = [22];
  const fourteenLeftIndexes = [118];
  const sixteenLeftIndexes = [27, 59, 64, 84, 93, 113];
  const seventeenLeftIndexes = [54, 69];
  const eighteenLeftIndexes = [89, 108];
  const nineteenLeftIndexes = [79, 103];
  const twentyOneLeftIndexes = [98];
  const twentySixLeftIndexes = [74];

  for (let i = 0; i < 150; i++) {
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
    } else if (nineLeftIndexes.includes(i)) {
      leftBlocks.push(`<div class="clue-item">9</div>`);
    } else if (tenLeftIndexes.includes(i)) {
      leftBlocks.push(`<div class="clue-item">10</div>`);
    } else if (elevenLeftIndexes.includes(i)) {
      leftBlocks.push(`<div class="clue-item">11</div>`);
    } else if (twelveLeftIndexes.includes(i)) {
      leftBlocks.push(`<div class="clue-item">12</div>`);
    } else if (fourteenLeftIndexes.includes(i)) {
      leftBlocks.push(`<div class="clue-item">14</div>`);
    } else if (sixteenLeftIndexes.includes(i)) {
      leftBlocks.push(`<div class="clue-item">16</div>`);
    } else if (seventeenLeftIndexes.includes(i)) {
      leftBlocks.push(`<div class="clue-item">17</div>`);
    } else if (eighteenLeftIndexes.includes(i)) {
      leftBlocks.push(`<div class="clue-item">18</div>`);
    } else if (nineteenLeftIndexes.includes(i)) {
      leftBlocks.push(`<div class="clue-item">19</div>`);
    } else if (twentyOneLeftIndexes.includes(i)) {
      leftBlocks.push(`<div class="clue-item">21</div>`);
    } else if (twentySixLeftIndexes.includes(i)) {
      leftBlocks.push(`<div class="clue-item">26</div>`);
    } else {
      leftBlocks.push(`<div class="clue-item"></div>`);
    }
  }

  leftBlockContainer.innerHTML = leftBlocks.join("");

  //Game block

  const gameContainer = document.querySelector(".game");

  const gameBlocks = [];

  const blackBlocks = [
    20, 21, 22, 23, 24, 48, 49, 50, 51, 52, 76, 77, 78, 79, 80, 81, 89, 98, 99,
    100, 101, 102, 103, 104, 105, 108, 109, 110, 111, 118, 119, 126, 127, 128,
    129, 130, 131, 132, 133, 134, 135, 136, 137, 140, 141, 147, 148, 149, 154,
    155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169,
    171, 176, 177, 178, 179, 183, 184, 185, 186, 187, 188, 191, 192, 193, 194,
    195, 196, 197, 198, 199, 200, 201, 206, 207, 208, 212, 215, 216, 217, 222,
    223, 224, 225, 226, 227, 228, 229, 230, 231, 236, 237, 238, 241, 246, 252,
    253, 254, 255, 256, 257, 258, 259, 260, 261, 265, 266, 267, 268, 271, 276,
    279, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 294, 295, 296,
    297, 298, 301, 303, 306, 309, 312, 313, 314, 315, 316, 317, 318, 319, 320,
    321, 322, 323, 324, 325, 326, 327, 328, 331, 333, 336, 339, 342, 343, 344,
    345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 361, 366,
    367, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385,
    386, 387, 391, 395, 396, 397, 401, 402, 403, 404, 405, 406, 407, 408, 409,
    410, 411, 412, 413, 414, 415, 416, 417, 422, 423, 424, 425, 426, 427, 428,
    429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443,
    444, 445, 446, 447, 451, 452, 453, 459, 460, 461, 462, 463, 464, 465, 466,
    467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 480, 493, 494, 495,
    496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511,
    512, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534,
    535, 536, 537, 538, 541, 542, 543, 544, 547, 548, 549, 550, 551, 552, 553,
    554, 555, 556, 557, 558, 559, 560, 561, 562, 564, 565, 566, 567, 568, 572,
    573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587,
    589, 590, 591, 592, 595, 596, 597, 598, 603, 604, 605, 606, 607, 608, 609,
    610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 626, 627, 628,
    634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648,
    649, 650, 651, 657, 658, 659, 665, 666, 667, 668, 669, 670, 671, 672, 673,
    674, 675, 676, 677, 678, 679, 680, 687, 688, 689, 697, 698, 699, 700, 701,
    702, 703, 704, 705, 706, 707, 708, 709, 710, 718, 719, 729, 730, 731, 732,
    733, 734, 735, 736, 737, 739, 740, 741, 749, 759, 760, 761, 762, 764, 765,
    766, 767, 770, 771, 772, 790, 791, 792, 794, 795, 796, 820, 821, 822, 825,
    826, 851, 852, 856, 882, 886,
  ];

  for (let i = 0; i < 900; i++) {
    gameBlocks.push(`<div class="clue-item-game"></div>`);
  }

  for (let i = 0; i < gameBlocks.length; i++) {
    if (blackBlocks.includes(i)) {
      gameBlocks[i] = `<div class="clue-item-game to-be-black"></div>`;
    }
  }

  gameContainer.innerHTML = gameBlocks.join("");
  const outerContainer = document.querySelector(".outer-game-container");
  outerContainer.classList.add("medium-level");
}
