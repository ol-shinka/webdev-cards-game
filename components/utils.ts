export function getCardsImages(levelGame: number) {
  const arrCardsFlip: Array<string> = [];
  for (let i = 0; i < levelGame; i++) {
    arrCardsFlip.push(
      `<img id="cards-click" data-index="${i}" class="cards-suits" src="../static/img/рубашка.png">`,
    );
  }
  return arrCardsFlip;
}