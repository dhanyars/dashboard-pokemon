import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { AppState, Unpack } from "../../types";
import Pokemon from "./pokemon";
import * as actions from "../../redux/actions";
import { useDispatch } from "react-redux";

const mapStateToProps = (state: AppState) => ({
  pokemon: state.pokemon.pokemonList.data,
  filters: state.pokemon.filter,
});

const mapDispatchToProps = (dispatch: any) => ({
  useLoadPage: (url: any) => {
    React.useEffect(() => {
      dispatch(actions.pokemon.load({ url }));
    }, []);
  },
});

export interface PokemonPageProps
  extends Unpack<typeof mapStateToProps>,
    Unpack<typeof mapDispatchToProps> {}

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);
