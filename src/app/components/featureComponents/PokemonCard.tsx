import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "../baseComponents/Card";
import { getRandomColor } from "../../utils/utils";
import { Link } from "react-router-dom";

export interface PokemonProps {
  data?: any;
  indexOfFirstCard?: number;
  indexOfLastCard?: number;
}

const PokemonCard: React.FC<PokemonProps> = ({
  data,
  indexOfFirstCard,
  indexOfLastCard,
}) => {
  return (
    <div>
      <Container>
        <Row>
          {data.slice(indexOfFirstCard, indexOfLastCard).map((item: any) => {
            const types = item.types.map((itemType: any) => itemType.type.name);
            const randomColor = getRandomColor();
            return (
              <Col md={3} xs={12}>
                <Link
                  key={item.id}
                  to={{
                    pathname: `/PokemonDetails/?id=${item.id}`,
                  }}
                >
                  <Card style={{ background: randomColor }}>
                    <div>
                      <div>{item.name}</div>
                      <div>
                        {item.sprites.other.dream_world.front_default ? (
                          <img
                            height="100px"
                            width="100px"
                            src={item.sprites.other.dream_world.front_default}
                          ></img>
                        ) : null}
                      </div>
                      <div>Type: {types?.toString()}</div>
                    </div>
                  </Card>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default PokemonCard;
