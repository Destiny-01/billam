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

export default class Admin extends Component {
  render() {
    return (
      <div>
        <NavbarWrapper />
        <Container className="mt-5">
          <Row>
            <Col md="4"></Col>
            <Col md="4">
              <Card>
                <CardBody>
                  <CardTitle tag="h6" className="title-text text-center mb-2">
                    Strativnc
                  </CardTitle>
                  <Form>
                    <FormGroup>
                      <Label for="exampleEmail">Secret code</Label>
                      <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="Enter the death code"
                        type="text"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleEmail">Twitter username</Label>
                      <Input id="exampleEmail" name="email" type="text" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleEmail">Twitter post link</Label>
                      <Input id="exampleEmail" name="email" type="text" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleEmail">Title</Label>
                      <Input id="exampleEmail" name="email" type="text" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleEmail">Amount</Label>
                      <Input id="exampleEmail" name="email" type="email" />
                    </FormGroup>

                    <Button className="btn-small" color="primary">
                      Submit
                    </Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
            <Col md="4"></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
