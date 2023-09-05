import { test, expect, describe } from "@jest/globals";
const { arrCardsImages } = require("./components/arrCardsImages");
const { arrCardsFlip } = require("./components/renderGameLevel");
const { arrCardsFlipDuplicate } = require("./components/renderGameLevel");
const { shuffle } = require("lodash");
const { getCardsImages } = require("./components/utils");

describe("проверки", () => {
  test("есть ли в массиве элементы", () => {
    expect(arrCardsFlip).not.toBeNull();
  });

  test("проверка", () => {
    const level = 3;
    const cards = getCardsImages(level);
    expect(cards).toHaveLength(level);
  });

  test("валиден ли массив с элементами", () => {
    expect(shuffle(arrCardsFlipDuplicate)).not.toContain(true);
  });

  test("длина массива 36", () => {
    expect(arrCardsImages).toHaveLength(36);
  });
});
