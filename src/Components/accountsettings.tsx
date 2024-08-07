import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function Accountsettings() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>Account Settings</h1>
            <Form>
              <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                Username
              </Form.Label>
              <InputGroup className="mb-2">
                <InputGroup.Text>@</InputGroup.Text>
                <Form.Control
                  id="inlineFormInputGroup"
                  placeholder="Username"
                />
              </InputGroup>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword" className="passedit">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicCheckbox"
              ></Form.Group>

              <InputGroup className="mb-3">
                <InputGroup.Text>First and last name</InputGroup.Text>
                <Form.Control aria-label="First name" />
                <Form.Control aria-label="Last name" />
              </InputGroup>

              <Form.Group className="mb-3" controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Label column lg={2}  >
                Bio
              </Form.Label>

              <Form.Control type="text" placeholder="Bio" className="bio" />
            </Form>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
