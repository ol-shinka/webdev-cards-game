import { shuffle } from "lodash";
import { arrCardsImages } from "./arrCardsImages";
import { getAppHTML, resultGame } from "./getAppHTML";
import { gameTimer } from "./timer";
import { renderGame } from "./render";

export function renderGameLevel(levelGame: number, appEl: HTMLElement | null) {
  const min: number = 0;
  const sec: number = 0;
  let currentDate: Date;
  let combDate: string;

  function getCurrentDate() {
    return (currentDate = new Date());
  }

  let resGame: boolean = false;
  let id: NodeJS.Timer;

  const arrCardsFlip: Array<string> = [];
  const arrCardsFlipSort = shuffle(arrCardsImages).slice(0, levelGame / 2);
  const arrCardsFlipDuplicate = shuffle(
    arrCardsFlipSort.concat(arrCardsFlipSort),
  );

  function getCardsImages(levelGame: number) {
    for (let i = 0; i < levelGame; i++) {
      arrCardsFlip.push(
        `<img id="cards-click" data-index="${i}" class="cards-suits" src="../static/img/рубашка.png">`,
      );
    }
    return arrCardsFlip;
  }

  getCardsImages(levelGame);

  if (appEl) {
    appEl.innerHTML = "";
    getAppHTML(arrCardsFlipDuplicate, appEl);
  }

  const fontGameCards = document.querySelector(".game-cards");
  const modalGameHTML = document.getElementById("modal-window");

  const minute = document.getElementById("min");
  const second = document.getElementById("sec");

  setTimeout(() => {
    id = gameTimer(min, sec, minute, second);
    getCurrentDate();
  }, 5000);

  let clickCards: boolean = true;
  let firstCard: number;
  let secondCard: number;
  let counter: number = levelGame;

  const restartButton: HTMLElement | null =
    document.getElementById("submit-button");
  if (restartButton) {
    restartButton.addEventListener("click", () => {
      renderGame();
    });
  }

  function flipСards() {
    (
      document.getElementById("suits") as HTMLElement
    ).innerHTML = `${arrCardsFlip.join("")}`;

    const reversalCards = document.querySelectorAll(".cards-suits");
    const reversalCardsArr = Array.from(reversalCards);

    for (const reverseSlideCard of reversalCardsArr) {
      reverseSlideCard.addEventListener("click", () => {
        const index = Number((reverseSlideCard as HTMLElement).dataset.index);
        if (clickCards) {
          arrCardsFlip[index] = arrCardsFlipDuplicate[index];
          firstCard = index;
          (
            document.getElementById("suits") as HTMLElement
          ).innerHTML = `${arrCardsFlip.join("")}`;

          flipСards();
        } else {
          arrCardsFlip[index] = arrCardsFlipDuplicate[index];

          secondCard = index;

          (
            document.getElementById("suits") as HTMLElement
          ).innerHTML = `${arrCardsFlip.join("")}`;

          twoCards(firstCard, secondCard);

          counter = counter - 2;
          if (counter === 0) {
            resGame = !resGame;
            (fontGameCards as HTMLElement).style.opacity = ".2";
            (modalGameHTML as HTMLElement).style.display = "block";
            resultGame(resGame, modalGameHTML, currentDate, combDate);
            clearInterval(id);
          }
        }
        clickCards = !clickCards;
      });
    }
  }

  setTimeout(flipСards, 5000);

  function twoCards(firstIndexCard: number, secondIndexCard: number) {
    if (firstCard !== null && secondCard !== null) {
      if (arrCardsFlip[firstIndexCard] === arrCardsFlip[secondIndexCard]) {
        flipСards();
      } else {
        (fontGameCards as HTMLElement).style.opacity = ".2";
        (modalGameHTML as HTMLElement).style.display = "block";
        resultGame(resGame, modalGameHTML, currentDate, combDate);
        clearInterval(id);
      }
    }
  }
}
