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

const PokemonDetails: React.FC<PokemonPageProps> = ({ pokemon, useLoadPage }) => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`;
  const [pokemonData, setPokemonData] = useState([]);
  const [filteredData, setFilteredData] = useState(pokemon?.pokemonData);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("name");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useLoadPage(url);

  const handleNext = (value: string) => {
    setCurrentPage(currentPage + 1);
  };
  const handlePrev = (value: string) => {
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
  }, [pokemonData, search, sort, pokemon?.pokemonData]);

  const totalPages = Math.ceil(filteredData?.length / itemsPerPage);
  const indexOfLastCard = currentPage * itemsPerPage;
  const indexOfFirstCard = indexOfLastCard - itemsPerPage;

  return (
    <Container>
      <Row>
        <div>
          <Input value={search} onChange={(e) => setSearch(e.target.value)} />

          <Select
            label="Sort by"
            options={OPTIONS}
            value={sort}
            onChange={(e: any) => setSort(e.target.value)}
          ></Select>

          <Select
            label="Records per Page"
            options={OPTIONS_Records}
            value={itemsPerPage}
            onChange={(e: any) => setItemsPerPage(e.target.value)}
          ></Select>

          {filteredData && (
            <div>
              <Pagination
                onLeftClick={handlePrev}
                onRightClick={handleNext}
                currentPage={currentPage}
                totalPages={totalPages}
              />

              <PokemonCard
                data={filteredData}
                indexOfFirstCard={indexOfFirstCard}
                indexOfLastCard={indexOfLastCard}
              />
            </div>
          )}
        </div>
      </Row>
    </Container>
  );
};

export default PokemonDetails;
