import { test, expect, describe } from "@jest/globals";
const { arrCardsImages } = require("./components/arrCardsImages");
const { arrCardsFlip } = require("./components/renderGameLevel");
const {arrCardsFlipDuplicate} = require('./components/renderGameLevel');
const { shuffle } = require("lodash");

describe("проверки", () => {
  test("есть ли в массиве элементы", () => {
    expect(arrCardsFlip).not.toBeNull();
  });

  test("валиден ли массив с элементами", () => {
    expect(shuffle(arrCardsFlipDuplicate)).not.toContain(true);
  });

  test("длина массива 36", () => {
    expect(arrCardsImages).toHaveLength(36);
  });
});
