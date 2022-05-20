import React from "react";
import { Container, Row, Button, Col } from "reactstrap";
import NavbarWrapper from "../components/NavbarWrapper";
import Placeholder1 from "../assets/Placeholder1.png";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <NavbarWrapper />
      <Container className="mt-5">
        <Row>
          <Col className="align-self-center" md="5">
            <h1 className="mb-2 title-text">
              Get the support <br />
              you need to buy anything
            </h1>
            <h6 className="mb-4 body-text">
              Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget
              consectetur sed, convallis at tellus. Vestibulum ac diam sit amet
              quam vehicula elementum sed sit amet dui. Donec
            </h6>
            <div>
              <Link to="/get-started">
                <Button color="primary">Get started for free</Button>{" "}
              </Link>{" "}
              <Button color="primary" outline>
                Learn more
              </Button>
            </div>
          </Col>

          <Col md="6" className="text-align-end offset-md-1">
            <img
              src={Placeholder1}
              alt="Landing page placeholder"
              className="img-fluid"
              // width="70%"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
