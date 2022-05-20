import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import NavbarWrapper from "../components/NavbarWrapper";
import Logo from "../assets/Logo.svg";
import Placeholder2 from "../assets/Placeholder2.png";

export default class Payment extends Component {
  render() {
    return (
      <div>
        <Container className="mt-5 pt-4">
          <Row>
            <Col md="2"></Col>
            <Col md="8" className="text-center">
              <img src={Logo} alt="Billam Logo" className="mb-4" />
              <h2 className="mb-0">Help Joan get these shoes</h2>
              <p className="caption text-primary">by @jack</p>
              <Card className="fluid">
                <Row noGutters>
                  <Col md="5">
                    <img
                      src={Placeholder2}
                      alt="Billam Logo"
                      className="img-fluid"
                    />
                  </Col>
                  <Col md="7">
                    <div className="p-4 text-start">
                      <Form>
                        <FormGroup>
                          <Label for="exampleEmail">Fullname</Label>
                          <Input id="exampleEmail" name="email" type="text" />
                        </FormGroup>
                        <FormGroup>
                          <Label for="exampleEmail">Email</Label>
                          <Input id="exampleEmail" name="email" type="email" />
                        </FormGroup>
                        <FormGroup>
                          <Label for="exampleEmail">Phone number</Label>
                          <Input id="exampleEmail" name="email" type="text" />
                        </FormGroup>
                        <FormGroup>
                          <Label for="exampleEmail">Amount</Label>
                          <Input id="exampleEmail" name="email" type="text" />
                        </FormGroup>
                        <div className="text-center">
                          <Button className="btn-small" color="primary">
                            Submit
                          </Button>
                        </div>
                      </Form>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col md="2"></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
