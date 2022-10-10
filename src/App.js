import React, {useEffect, useState} from 'react';
import { Navigation } from './components/Navigation';
import { PokemonCard } from './components/PokemonCard';

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchApi() {
      let res = await fetch(pokeApi)
      res = await res.json()
      setData(res.results)
    }
    fetchApi()
  }, [])

  return (
    <div data-testid="app">
      <Navigation />
        {data.map(d => 
          <PokemonCard key={d.name} url={d.url} name={d.name}/>
        )}
    </div>
  );
}

export { App };
