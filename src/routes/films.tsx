import { useEffect, useState } from "react";
import LargeTile from "../Components/Tiles/tile-lg";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function FilmList() {
  const [movies, setMovies] = useState([]);
  const url =
    "https://662f4eee-9235-4d99-b16d-4793d2be55f2-00-23g076h3woi1b.janeway.replit.dev/api/movies/";
  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data);
      setMovies(res.data);
    });
  }, []);
  return (
    //state variable to hold all the Movies

    //function to send request to backend (with search keyword)

    <div>
      <Container>
        <h1>Movies</h1>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2 Search2"
            aria-label="Search"
          />
          <Button variant="outline-secondary" className="Search">
            Search
          </Button>
        </Form>
        <Row>
        {movies.map((movie, index) => (
          <Col  className="moviecon"> 
          
          <LargeTile key={index} film={movie}  />
          
          </Col>
        ))}
        
              </Row>

      </Container>
    </div>
  );
}
