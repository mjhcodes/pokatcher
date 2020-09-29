export const isObjEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

export const getRandomNumArray = (max) => {
  return new Array(10).fill(1).map((n) => n * Math.ceil(Math.random() * max));
};

export const getArticle = (word) => {
  return word[0].match(/[aeiou]/gi) ? "an" : "a";
};
