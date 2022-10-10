import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';

function PokemonCard({ url, name }) {
  const [data, setData] = useState(null);

  async function fetchApi() {
    // let res = await fetch(url)
    // res = await res.json()
    // setData(res)
    // currently rendering more than 150
    console.log("response")
  }

  fetchApi()

  return (
    data &&
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.sprites.front_default} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {data.abilities.map(i => <li>{i.ability.name}</li>)}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export { PokemonCard };
