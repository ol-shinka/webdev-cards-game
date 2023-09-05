import { renderGame } from "./render";
//import { renderGameLevel } from "./renderGameLevel";

export function getAppHTML(
  arrCardsFlipDuplicate: Array<string>,
  appEl: HTMLElement | null,
) {
  const appHTML = `   
    <div class="game-cards">
     <header class="game-cards-timer">
         <div class="game-cards-timer__module">  
            <div class="game-cards-timer__init">
                <p class="game-cards-timer__item">min</p>
                <p class="game-cards-timer__item">sec</p>
            </div>   
            <span class="game-cards-timer__time" id="min">00</span>
            <span class="game-cards-timer__time">.</span>  
             <span class="game-cards-timer__time" id="sec">00</span> 
         </div>
         <button class="restart-button" id="restart-button" type="submit">Начать заново</button>
     </header>
     <div class="game-cards__suits" id="suits">${arrCardsFlipDuplicate.join(
       "",
     )}</div>
    </div>  `;

  if (appEl) {
    appEl.innerHTML = appHTML;
    (document.getElementById("restart-button") as HTMLElement).addEventListener(
      "click",
      () => {
        renderGame();
      },
    );
  }
}

export function resultGame(
  resGame: boolean,
  modalGameHTML: HTMLElement | null,
  currentDate: Date,
  spentTime: string,
) {
  const minutModal: number = 0;
  const secondModal: number = 0;

  function getModalTimer(minutModal: number, secondModal: number) {
    const endDate = new Date();
    const diffDate = endDate.getTime() - currentDate.getTime();

    minutModal = Math.floor(diffDate / 60000);
    secondModal = Math.floor((diffDate % 60000) / 1000);

    spentTime = `${
      minutModal < 10 ? "0" + minutModal.toString() : minutModal.toString()
    }:${
      secondModal < 10 ? "0" + secondModal.toString() : secondModal.toString()
    }`;
    return spentTime;
  }
  getModalTimer(minutModal, secondModal);

  const modalHTML = `<div class="modal-result-game">
    ${
      resGame
        ? '<img class="modal__img" src="./static/img/modal_game/celebration.svg" alt="emoji">'
        : '<img class="modal__img" src="./static/img/modal_game/dead.svg" alt="emoji">'
    }
           <h3 class="modal__heading">${
             resGame ? "Вы выиграли!" : "Вы проиграли"
           }</h3>
           <p class="modal__text">Затраченное время</p>   
           <div class="modal__time">${spentTime}</div>
           <button class="modal__button">Начать заново</button>
           </div>`;

  if (modalGameHTML) {
    modalGameHTML.innerHTML = modalHTML;
    (document.querySelector(".modal__button") as HTMLElement).addEventListener(
      "click",
      () => {
        modalGameHTML.style.display = "none";
        renderGame();
      },
    );
  }
}
