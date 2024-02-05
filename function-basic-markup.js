export function runBasicMarkup() {
  const basicMarkup = `
  <div class="container">
  <form>
    <p class="form-title">Choose a nonogram</p>
    <ul class="form-list">
         <li class="form-item">
            <input class="form-input" id="snail" type="radio" name="game" value="0">
            <label for="snail">
                <img class="form-img" src="./images/snail.png" alt="Snail picture">
            </label>
        </li>
          <li class="form-item">
            <input class="form-input" id="mouse" type="radio" name="game" value="1">
            <label for="mouse">
                <img class="form-img" src="./images/mouse.png" alt="Mouse picture">
            </label>
        </li>
        <li class="form-item">
            <input class="form-input" id="fish" type="radio" name="game" value="2">
            <label for="fish">
                <img class="form-img" src="./images/fish.png" alt="Fish picture">
            </label>
        </li>
         <li class="form-item">
            <input class="form-input" id="butterfly" type="radio" name="game" value="3">
            <label for="butterfly">
                <img class="form-img" src="./images/butterfly.png" alt="Butterfly picture">
            </label>
        </li>
         <li class="form-item">
            <input class="form-input" id="crab" type="radio" name="game" value="4">
            <label for="crab">
                <img class="form-img" src="./images/crab.png" alt="Crab picture">
            </label>
        </li>
          <li class="form-item">
            <input class="form-input" id="piranha" type="radio" name="game" value="5">
            <label for="piranha">
                <img class="form-img" src="./images/piranha.png" alt="Piranha picture">
            </label>
        </li>
    </ul>
</form>
   <p class="congratulation"></p>
    <div class="table-game-buttons-wrapper">
      <div class="outer-game-container hidden">
        <div class="game-container">
            <div class="top-line">
                <div class="empty-block"></div>
                <div class="top-clues"></div>
            </div>
            <div class="bottom-line">
                <div class="left-clues"></div>
                <div class="game"></div>
            </div>
        </div>
      </div>
      <ul class="btn-list">
        <li>
            <button class="button-dark-light">
                <img src="./images/contrast.png" alt="Icon for dark or light theme">
            </button>
        </li>
        <li>
            <button class="btn button-reset">Reset game</button>
        </li>
        <li>
            <button class="btn button-continue">Continue last game</button>
        </li>
        <li>
            <button class="btn button-save">Save game</button>
        </li>
        <li>
            <button class="btn button-random">Random game</button>
        </li>
        <li>
             <button class="btn button-solution">Solution</button>
        </li>
      </ul>
    </div></div>`;

  document.body.innerHTML = basicMarkup;
}
