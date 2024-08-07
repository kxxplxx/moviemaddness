import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import pfp from "../assets/image.png";
import { Link } from "react-router-dom";
import accountsettings from "accountsettings";
import watchlist from "watchlist";
import { useState, useEffect } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import supabase from "../client";

function Profile() {
  const [Profile, setProfile] = useState([]);
  const [session, setSession] = useOutletContext();



  return (
    <div>
      <Form>
        <Container>
          <Row>
            <Col xs={9}>
              <Image
                src={pfp}
                className="pfp"
                width={80}
                height={80}
                roundedCircle
              />
              <h1 className="user1">Mark otto</h1>
            </Col>

            <Col xs={3} style={{ display: "flex", alignItems: "center" }}>
              <Link to={"/settings"}>
                <Button variant="outline-secondary" className="edit">
                  Edit Profile
                </Button>
              </Link>
              {""}
            </Col>
          </Row>
          <Button variant="outline-secondary">Movies</Button>{" "}
          <Button variant="outline-secondary">Reveiws</Button>{" "}
          <Link to={"/watchlist"}>
            <Button variant="outline-secondary" className="watchlist">
              Watchlist
            </Button>
          </Link>{" "}
        </Container>
      </Form>
      <h3 className="pfpmovies">Favorite Movies:</h3>
    </div>
  );
}

export default Profile;
