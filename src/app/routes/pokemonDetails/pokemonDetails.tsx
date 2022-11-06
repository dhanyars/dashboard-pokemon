import React from "react";
import { PokemonPageProps } from ".";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import DetailsCard from "../../components/featureComponents/DetailsCard";

const PokemonDetails: React.FC<PokemonPageProps> = ({
  pokemon,
  useLoadPage,
}) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("id");
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  useLoadPage(url);

  // useEffect(() => {

  // }, [pokemonData, search, sort]);

  return (
    <Container>
      <Row>
        <div>
          <DetailsCard pokemon={pokemon} />
        </div>
      </Row>
    </Container>
  );
};

export default PokemonDetails;
