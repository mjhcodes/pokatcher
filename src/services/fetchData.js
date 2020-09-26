// gets total pokemon count from api;
// determines random offset, then stores it in local storage
export async function setRandomOffset() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1");
  res
    .json()
    .then((res) =>
      localStorage.setItem(
        "random_offset",
        Math.floor(Math.random() * res.count - 10)
      )
    )
    .catch((err) => localStorage.setItem("errors_offset", err));
}

export async function fetchPokemons() {
  // if no offset in storage, sets offset at random number between 1-100
  const offset = localStorage.getItem("random_offset")
    ? localStorage.getItem("random_offset")
    : Math.floor(Math.random() * 100);
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=10`
  );
  res
    .json()
    .then((res) =>
      localStorage.setItem("pokemons", JSON.stringify(res.results))
    )
    .catch((err) => localStorage.setItem("errors_fetch", err));
}
