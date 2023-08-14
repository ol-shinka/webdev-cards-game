const { it, expect, describe } = require("@jest/globals");
const {
  renderGameLevel,
  getCardsImages,
  arrCardsFlip,
  min,
  resGame,
} = require("./components/renderGameLevel");

describe("renderGameLevel()", () => {
  describe("getCardsImages", () => {
    it("проверка на наличие i", () => {
      const img = `<img id="cards-click" data-index="${i}" class="cards-suits" src="../static/img/рубашка.png">`;
      const expected = `<img id="cards-click" data-index="${i}" class="cards-suits" src="../static/img/рубашка.png">`;

      const res = renderGameLevel(getCardsImages(img, "${i}"));

      expect(expected).toContainEqual(res);
    });

  //   it("длина массива"),
  //     () => {
  //       const arr = new arrCardsFlip();

  //       arr.addItem({name: iCard});

  //       expect(arr.items).toHaveLength(36);
  //     };
  });

  it("проверка на null", () => {
    const min = 3;
    const expected = null;

    const res = renderGameLevel(min, "null");

    expect(expected).toBeNull(res);
  });

  it("проверка на ложь", () => {
    const fal = true;
    const expected = false;

    const res = renderGameLevel(resGame(fal, false));

    expect(expected).toBeFalsy(res);
  });
})