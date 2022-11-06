import React from "react";
import { connect } from "react-redux";
import { AppState, Unpack } from "../../types";
import PokemonDetails from "./pokemonDetails";
import * as actions from "../../redux/actions";

const mapStateToProps = (state: AppState) => ({
  pokemon: state.pokemon.pokemonDetails.data,
});

const mapDispatchToProps = (dispatch: any) => ({
  useLoadPage: (url: any) => {
    React.useEffect(() => {
      dispatch(actions.pokemon.pokemonDetailsLoad({ url }));
    }, [url]);
  },
});

export interface PokemonPageProps
  extends Unpack<typeof mapStateToProps>,
    Unpack<typeof mapDispatchToProps> {}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetails);
