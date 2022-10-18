import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function PokemonCard({ url, name }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchApi() {
      let res = await fetch(url)
      res = await res.json()
      setData(res)
      console.log("response")
    }
    fetchApi()
  }, [])


  return (
    <Col>
{    data &&
    <Card style={{ margin: '1em' }}>
      <Card.Img variant="top" src={data.sprites.front_default} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {data.abilities.map(i => <li>{i.ability.name}</li>)}
        </Card.Text>
      </Card.Body>
    </Card>}
    </Col>
  );
}

export { PokemonCard };
