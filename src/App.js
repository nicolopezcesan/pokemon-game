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

  const styles = {
    'display': 'grid',
    'grid-template-columns': 'repeat(5, 1fr)',
    'grid-template-rows': 'repeat(4, 1fr)',
    'grid-gap': ' 0.5rem'
  }

  return (
    <div className="container">
      <h1>Pókemon App!</h1>
      <GameBoard items={pokemons} style={styles} />
    </div>
  );
}

export default App;
