import axios from "axios";

// based on total pokemon count, gets a random number and fills new array * 10 -
// will later be used to map incrementely for individual api calls
export async function setRandomIdArray() {
  const apiURL = "https://pokeapi.co/api/v2/pokemon?limit=1";
  await axios
    .get(apiURL)
    .then((res) => {
      // subtracts ten to ensure later api calls don't exceed total
      const random_id = Math.floor(Math.random() * (res.data.count - 10));
      const random_id_array = new Array(10).fill(random_id);
      localStorage.setItem("random_id_array", random_id_array);
    })
    .catch((err) => localStorage.setItem("errors", err));
}

// based on id array, fetches ten separate Pokemon
// and sets as a new array into local storage
export async function getRandomPokemons() {
  const random_pokemons = [];

  let idArray = localStorage.getItem("random_id_array");
  idArray = idArray
    ? idArray.split(",").map((n, i) => parseInt(n) + i)
    : new Array(10).fill(1).map((n) => n * Math.ceil(Math.random() * 100));

  await axios
    .all([
      axios.get(`https://pokeapi.co/api/v2/pokemon/${idArray[0]}`),
      axios.get(`https://pokeapi.co/api/v2/pokemon/${idArray[1]}`),
      axios.get(`https://pokeapi.co/api/v2/pokemon/${idArray[2]}`),
      axios.get(`https://pokeapi.co/api/v2/pokemon/${idArray[3]}`),
      axios.get(`https://pokeapi.co/api/v2/pokemon/${idArray[4]}`),
      axios.get(`https://pokeapi.co/api/v2/pokemon/${idArray[5]}`),
      axios.get(`https://pokeapi.co/api/v2/pokemon/${idArray[6]}`),
      axios.get(`https://pokeapi.co/api/v2/pokemon/${idArray[7]}`),
      axios.get(`https://pokeapi.co/api/v2/pokemon/${idArray[8]}`),
      axios.get(`https://pokeapi.co/api/v2/pokemon/${idArray[9]}`),
    ])
    .then((res) => {
      res.forEach((data) => random_pokemons.push(data.data));
    })
    .catch((err) => localStorage.setItem("errors", err));

  localStorage.setItem("random_pokemons", JSON.stringify(random_pokemons));
}
