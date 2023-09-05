import { renderGameLevel } from "./renderGameLevel";

export function renderGame() {
  const appEl: HTMLElement | null = document.getElementById("app");

  const appHTML = `
    <div class="top center">
    <form id="form-level" class="game-box" method="POST" action="#">
        <h1 class="game-box__title">Выбери<br>сложность</h1>

        <div class="box-levels">
            <input class="box-levels__radio" type="radio" id="radio1" name="radios" value="6">
            <label class="box-levels__label" for="radio1">1</label>
            <input class="box-levels__radio" type="radio" id="radio2" name="radios" value="12">
            <label class="box-levels__label" for="radio2">2</label>
            <input class="box-levels__radio" type="radio" id="radio3" name="radios" value="18">
            <label class="box-levels__label" for="radio3">3</label>
        </div>
        <button class="start-button" type="submit">Старт</button>
    </form>
</div>`;

  if (appEl) {
    appEl.innerHTML = appHTML;

    const form: Element | null = document.getElementById("form-level");

    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log(e);

        const levels = document.querySelectorAll(".box-levels__radio");

        for (const level of levels) {
          if ((level as HTMLInputElement).checked) {
            const levelGame: number = Number((level as HTMLInputElement).value);
            renderGameLevel(levelGame, appEl);
          }
        }
      });
    }
  }
}
