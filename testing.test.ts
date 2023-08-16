import { test, expect, describe } from "@jest/globals";
const { arrCardsImages } = require("./components/arrCardsImages");
const { arrCardsFlip } = require("./components/renderGameLevel");

describe("проверки", () => {
  test("есть ли в массиве элементы", () => {
    expect(arrCardsFlip).not.toBeNull();
  });

  test("есть ли картинка с определенным путём", () => {
    expect(arrCardsFlip).toContain(
      `<img id="cards-click" data-index="${i}" class="cards-suits" src="../static/img/рубашка.png">`,
    );
  });

  test("длина массива 36", () => {
    expect(arrCardsImages).toHaveLength(36);
  });
});
