import React, {useEffect, useState} from 'react';
import { Navigation } from './components/Navigation';
import { PokemonCard } from './components/PokemonCard';
import Row from 'react-bootstrap/Row';


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
      <Row xs={1} md={4} className="g-4">
        {data.map(d => 
          <PokemonCard key={d.name} url={d.url} name={d.name}/>
        )}
      </Row>
    </div>
  );
}

export { App };
