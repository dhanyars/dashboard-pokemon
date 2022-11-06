import axios from "axios";

export async function loadPokemonData(pokemonUrl: any) {
  const response = await axios.get(pokemonUrl);
  const next = response.data.next;
  const prev = response.data.previous;
  const result = await response.data.results;
  const urls = result.map((res: any) => axios.get(res.url));
  const pokemonData = await (
    await axios.all(urls)
  ).map((uRes: any) => uRes.data);

  return { pokemonData: [...pokemonData], url: { next: next, prev: prev } };
}

export async function loadPokemonDetails(pokemonUrl: any) {
  const response = await axios.get(pokemonUrl);
  const result = await response.data;
  // const urls = result.map((res: any) => axios.get(res.url));
  // const pokemonData = await (
  //   await axios.all(urls)
  // ).map((uRes: any) => uRes.data);

  return result;
}
