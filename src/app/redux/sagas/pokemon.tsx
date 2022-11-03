import { call, put, all, takeLatest } from "redux-saga/effects";
import { pokemon } from "../actions";
import * as api from "../../api";

export interface PokemonData {
  data: { results: Array<PokemonList> };
}

export interface PokemonList {
  name: string;
  url: string;
}

function* fetchData(action: any) {
  try {
    console.log("inside");
    const {
      payload: { url },
    } = action;
    const data: PokemonData = yield call(api.pokemon.loadPokemonData, url);
    yield put(pokemon.updatePokemon(data));
  } catch (err) {
    yield put(
      pokemon.updatePokemon(err instanceof Error ? err : new Error("error"))
    );
  }
}

function* fetchDetails(action: any) {
  try {
    console.log("inside");
    const {
      payload: { url },
    } = action;
    const data: PokemonData = yield call(api.pokemon.loadPokemonDetails, url);
    yield put(pokemon.updatePokemonDetails(data));
  } catch (err) {
    yield put(
      pokemon.updatePokemonDetails(
        err instanceof Error ? err : new Error("error")
      )
    );
  }
}

function* actionWatcher() {
  yield takeLatest(pokemon.load.type, fetchData);
  yield takeLatest(pokemon.pokemonDetailsLoad.type, fetchDetails);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
