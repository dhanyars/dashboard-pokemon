import React from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles/_details.scss";

export interface PokemonProps {
  pokemon?: any;
  indexOfFirstCard?: number;
  indexOfLastCard?: number;
}

const DetailsCard: React.FC<PokemonProps> = ({ pokemon }) => {
  const history = useHistory();

  return (
    <div>
      <Container>
        <Row>
          <div className="card-details-outer">
            <Button
              className="button"
              onClick={() => history.goBack()}
              variant="secondary"
            >
              {" "}
              Go Back
            </Button>
            {pokemon && (
              <div className="card-details">
                <div className="card-details-name"> {pokemon.name} </div>
                <div className="card-details-img">
                  {" "}
                  <img
                    height="200"
                    width="200"
                    src={pokemon?.sprites?.front_default}
                    alt="pokemon display"
                  />{" "}
                </div>

                <Row>
                  <Col md={3}>
                    <div>
                      <strong>Weight</strong>{" "}
                    </div>
                  </Col>
                  <Col md={6}>
                    <span> {pokemon.weight}</span>
                  </Col>
                </Row>
                <Row>
                  <Col md={3}>
                    <div>
                      <strong>Height</strong>{" "}
                    </div>
                  </Col>
                  <Col md={6}>
                    <span> {pokemon.height}</span>
                  </Col>
                </Row>
                <Row>
                  <Col md={3}>
                    <div>
                      <strong>Base Experience</strong>{" "}
                    </div>
                  </Col>
                  <Col md={6}>
                    <span> {pokemon.base_experience}</span>
                  </Col>
                </Row>
                <Row>
                  <Col md={3}>
                    <div>
                      <strong>Abilities</strong>{" "}
                    </div>
                  </Col>
                  <Col md={6}>
                    <span>
                      {" "}
                      {pokemon?.abilities?.map((ability: any, index: any) => {
                        return (
                          <span>
                            <span key={index}>{ability.ability.name}</span>
                            {pokemon?.abilities?.length > index + 1 && (
                              <span>,</span>
                            )}
                          </span>
                        );
                      })}
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col md={3}>
                    <div>
                      <strong>Types</strong>{" "}
                    </div>
                  </Col>
                  <Col md={6}>
                    <span>
                      {" "}
                      {pokemon?.types?.map((type: any, index: number) => {
                        return (
                          <span>
                            <span>{type.type.name}</span>
                            {pokemon?.types?.length > index + 1 && (
                              <span>,</span>
                            )}
                          </span>
                        );
                      })}
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col md={3}>
                    <div>
                      <strong>Stat</strong>{" "}
                    </div>
                  </Col>
                  <Col md={6}>
                    <span>
                      {" "}
                      {pokemon?.stats &&
                        pokemon?.stats
                          .filter((stat: any) => stat.effort > 0)
                          .map((stat: any) => <div>{stat.stat.name}</div>)}
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col md={3}>
                    <div>
                      <strong>Moves</strong>{" "}
                    </div>
                  </Col>
                  <Col md={6}>
                    <span>
                      {" "}
                      {pokemon?.moves &&
                        pokemon?.moves.map((move: any, index: number) => (
                          <span>
                            <span>{move.move.name}</span>
                            {pokemon?.moves?.length > index + 1 && (
                              <span>,</span>
                            )}
                          </span>
                        ))}
                    </span>
                  </Col>
                </Row>
              </div>
            )}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default DetailsCard;
