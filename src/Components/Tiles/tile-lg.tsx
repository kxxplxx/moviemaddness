import { Button, Card, Container } from "react-bootstrap";
import Link from "react-router-dom";




const LargeTile = ({ film }) => {
  return (
    <Card style={{ width: "12rem",  }}>
          <Card.Img className="cardimg" variant="top" src={film.image} />
          <Card.Body className="cardbod">
            <Card.Title>{film.title}</Card.Title>
            <Card.Text>
              {film.length} | {film.year}
            </Card.Text>
            <Card.Text>{film.description}</Card.Text>
            <Button variant="outline-light" className="More">
          ...
          </Button>
          </Card.Body>
        </Card>

  );
};

export default LargeTile;
