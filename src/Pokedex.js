import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

/** Index of Pokemon: show individual cards. */

function Pokedex({ pokemons, isWinner, exp }) {
  let winMessage = null;
  if (isWinner) {
    winMessage = <p className="Pokedex-winner">THIS HAND WINS!</p>;
  }

  return (
    <div className="Pokedex">
      <h2 className="Pokedex-title">Pokedex</h2>
      <div className="Pokedex-cards">
        {pokemons.map((pokemon, index) => (
          <Pokecard
            key={index}
            id={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
            exp={pokemon.base_experience}
          />
        ))}
      </div>
      <h4>Total experience: {exp}</h4>
      {winMessage}
    </div>
  );
}

export default Pokedex;