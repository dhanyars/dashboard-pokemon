import { reducer, on } from "ts-action";
import { pokemon } from "../actions";

export interface pokemonState {
  pokemonList: {
    data: {
      results: [];
    };
  };
  pokemonDetails: {
    data: {
      results: [];
    };
  };
}

const initialState = {
  pokemonList: {
    data: { results: [] },
  },
  pokemonDetails: {
    data: {
      results: [],
    },
  },
};

export default reducer<any>(
  initialState,
  on(pokemon.load, (state) => {
    return {
      ...state,
      pokemonList: {
        ...state.pokemonList,
      },
    };
  }),
  on(pokemon.updatePokemon, (state, { payload, error }) => {
    if (error) {
      return {
        ...state,
        pokemonList: { ...state.pokemonList, status: "error" },
      };
    }

    return {
      ...state,
      pokemonList: {
        ...state.pokemonList,
        data: payload,
      },
    };
  }),
  on(pokemon.pokemonDetailsLoad, (state) => {
    return {
      ...state,
      pokemonDetails: {
        ...state.pokemonDetails,
      },
    };
  }),
  on(pokemon.updatePokemonDetails, (state, { payload }) => {
    return {
      ...state,
      pokemonDetails: {
        ...state.pokemonDetails,
        data: payload,
      },
    };
  })
);
