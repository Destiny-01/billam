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
import axios from "../utils/axios";

export default class Login extends Component {
  state = {
    username: "",
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(this.state));
    axios
      .post("/auth", {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
      })
      .then((res) => {
        localStorage.setItem("google", res.data.user._id);
        window.location.href = "localhost:3000/dashboard";
      })
      .catch((err) => console.log(err));
  };

  render() {
    // http://localhost:8000/api/v1/auth
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
                    Signup/Login to continue
                  </CardTitle>
                  <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                      <Label for="username">Twitter username</Label>
                      <Input
                        id="username"
                        name="username"
                        placeholder="@username"
                        type="text"
                        value={this.state.username}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        placeholder="example@gmail.com"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="password">Password</Label>
                      <Input
                        id="password"
                        name="password"
                        placeholder=""
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                      />
                    </FormGroup>

                    <Button className="btn-small" type="submit" color="primary">
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
