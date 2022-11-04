import React, { useEffect, useState } from "react";
import { PokemonPageProps } from ".";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pagination from "../../components/baseComponents/Pagination";
import Select from "../../components/baseComponents/Select";
import Input from "../../components/baseComponents/Input";
import PokemonCard from "../../components/featureComponents/PokemonCard";
import { OPTIONS, OPTIONS_Records } from "../../constants";
import "./_pokemon.scss";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions";

const PokemonDetails: React.FC<PokemonPageProps> = ({
  pokemon,
  useLoadPage,
  filters,
}) => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`;
  const [pokemonData, setPokemonData] = useState([]);
  const [filteredData, setFilteredData] = useState(pokemon?.pokemonData);
  const [search, setSearch] = useState(filters?.search);
  const [sort, setSort] = useState(filters?.sort);
  const [currentPage, setCurrentPage] = useState(filters?.currentPage);
  const [itemsPerPage, setItemsPerPage] = useState(filters?.itemsPerPage);
  const dispatch = useDispatch();

  useLoadPage(url);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    setPokemonData(pokemon?.pokemonData);
    const seachFilter = pokemonData?.filter((item: any) => {
      return (
        item.name.toLowerCase().includes(search) ||
        item.abilities.find((ability: any) =>
          ability.ability.name.toLowerCase().includes(search)
        )
      );
    });
    const sorted = seachFilter?.sort((a: any, b: any) =>
      a[sort] > b[sort]
        ? 1
        : a[sort] === b[sort]
        ? a.size > b.size
          ? 1
          : -1
        : -1
    );
    setFilteredData(sorted);
    dispatch(
      actions.pokemon.updateFilters({
        sort,
        itemsPerPage,
        currentPage,
        search,
      })
    );
  }, [
    pokemonData,
    search,
    sort,
    pokemon?.pokemonData,
    itemsPerPage,
    currentPage,
  ]);

  const totalPages = Math.ceil(filteredData?.length / itemsPerPage);
  const indexOfLastCard = currentPage * itemsPerPage;
  const indexOfFirstCard = indexOfLastCard - itemsPerPage;

  return (
    <Container>
      <Row>
        <div>
          <h1>Pokemon Dashboard</h1>
          <Row className="pokemon-search">
            <Col md={6}>
              <div>
                {" "}
                <h2>Search pokemon</h2>
              </div>

              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search pokemon by name or abilities"
              />
            </Col>
          </Row>
          <Row className="pokemon-filter-outer">
            <Col md={4} sm={12} xs={12}>
              {filteredData && (
                <Pagination
                  onLeftClick={handlePrev}
                  onRightClick={handleNext}
                  currentPage={currentPage}
                  totalPages={totalPages}
                />
              )}
            </Col>
            <Col md={8} sm={12} xs={12}>
              <Row className="pokemon-filter">
                <Col md={4}>
                  <Select
                    label="Sort by"
                    options={OPTIONS}
                    value={sort}
                    onChange={(e: any) => setSort(e.target.value)}
                  ></Select>
                </Col>
                <Col md={4}>
                  <Select
                    label="Pokemons per Page"
                    options={OPTIONS_Records}
                    value={itemsPerPage}
                    onChange={(e: any) => setItemsPerPage(e.target.value)}
                  ></Select>
                </Col>
              </Row>
            </Col>
          </Row>

          {filteredData && (
            <PokemonCard
              data={filteredData}
              indexOfFirstCard={indexOfFirstCard}
              indexOfLastCard={indexOfLastCard}
            />
          )}

          <Row className="pokemon-pagination">
            <Col md={12}>
              {filteredData && (
                <Pagination
                  onLeftClick={handlePrev}
                  onRightClick={handleNext}
                  currentPage={currentPage}
                  totalPages={totalPages}
                />
              )}
            </Col>
          </Row>
        </div>
      </Row>
    </Container>
  );
};

export default PokemonDetails;
