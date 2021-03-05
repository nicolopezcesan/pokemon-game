import React, { useState, useEffect } from 'react';
import { getPokemons } from './services/pokemon';
import GameBoard from './components/GameBoard';
import './styles.css';

const App = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemonList()
  }, []);

  const getPokemonList = async () => {
    const pokes = await getPokemons()
    setPokemons(pokes)
  }

  return (
    <div className="container">
      <h1>Pókemon App!</h1>
      <GameBoard items={pokemons} className="gameboard" />
    </div>
  );
}

export default App;
