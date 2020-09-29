import axios from "axios";
import { getRandomNumArray } from "../utils/util";

export async function getRandomPokemons(setPokemons) {
  const API_DATA_COUNT = 807; // max available pokemons to be called from pokeapi.co
  const idArray = getRandomNumArray(API_DATA_COUNT);
  const random_pokemons = [];

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

  setPokemons(random_pokemons);
}
