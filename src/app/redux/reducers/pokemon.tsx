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
  filter: {
    sortBy: string;
    itemsPerPage: number;
    currentPage: number;
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
  filter: {
    search: "",
    sort: "name",
    itemsPerPage: 20,
    currentPage: 1,
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
  }),
  on(pokemon.updateFilters, (state, { payload }) => {
    return {
      ...state,
      filter: {
        ...state.filter,
        ...payload,
      },
    };
  })
);
