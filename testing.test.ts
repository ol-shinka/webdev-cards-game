import { test, expect, describe } from "@jest/globals";

const {
  arrCardsFlip,
  reversalCardsArr
} = require("./components/renderGameLevel");

describe("проверки", () => {
  test("есть ли в массиве элементы", () => {
    expect(arrCardsFlip).not.toBeNull();
  });

  test("есть ли картинка с определенным путём", () => {
    expect(reversalCardsArr).toContain(
      `<img id="cards-click" data-index="${36}" class="cards-suits" src="../static/img/рубашка.png">`,
    );
  });

  test("сколько элементов в массиве", () => {
    expect(reversalCardsArr).toHaveLength(36);
  });
});
