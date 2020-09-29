const { isObjEmpty, getRandomNumArray, getArticle } = require("./util");

test("accepts object; returns true if no keys and false if keys exist", () => {
  expect(isObjEmpty({})).toBe(true);
  expect(isObjEmpty({ name: "Bulbasaur" })).toBe(false);
  expect(
    isObjEmpty({ name: "Greninja", name: "Lucario", name: "Mimikyu" })
  ).toBe(false);
});

test("accepts a maximum number; returns array of 10 different numbers, each > 0 and < the maximum number", () => {
  expect(getRandomNumArray(807)).toHaveLength(10);
  expect(getRandomNumArray(807).every((n) => n > 0)).toBe(true);
  expect(getRandomNumArray(807).every((n) => n <= 807)).toBe(true);
});

test("accepts word as string; returns 'a' if 1st letter is consonant and 'an' if vowel", () => {
  expect(getArticle("ice")).toBe("an");
  expect(getArticle("rock")).toBe("a");
  expect(getArticle("fairy")).toBe("a");
});
