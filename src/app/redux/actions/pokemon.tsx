import { action, fsa, payload } from "ts-action";

export const load = action("POKEMON/LOAD", payload());

export interface PokemonData {
  country_id: number;
  country_name: string;
  total_reviews: number;
  average_review_score: number;
}

export const updatePokemon = action("POKEMON/UPDATE_POKEMON", fsa<any>());
export const pokemonDetailsLoad = action(
  "POKEMON/POKEMON_DETAILS_LOAD",
  payload()
);
export const updatePokemonDetails = action(
  "POKEMON/UPDATE_POKEMON_DETAILS",
  fsa<any>()
);
export const updateFilters = action("POKEMON/UPDATE_FILTERS", fsa<any>());
