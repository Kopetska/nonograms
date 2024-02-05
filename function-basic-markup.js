export function runBasicMarkup() {
  const basicMarkup = `
   <p class="congratulation"></p>
    <div class="table-game-buttons-wrapper">
      <div class="outer-game-container">
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
    </div>`;

  document.body.innerHTML = basicMarkup;
}
