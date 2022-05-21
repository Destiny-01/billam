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
import axios from "../utils/axios";
import { CopyToClipboard } from "react-copy-to-clipboard";
import NavbarWrapper from "../components/NavbarWrapper";

export default class Admin extends Component {
  state = {
    code: "",
    username: "",
    link: "",
    title: "",
    amount: "",
    copied: false,
    url: "",
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(this.state));
    axios
      .post("/products/new", {
        username: this.state.username,
        code: this.state.code,
        twitterLink: "https://ipfs.io/ipfs/" + this.state.link,
        title: this.state.title,
        totalAmount: this.state.amount,
      })
      .then((res) => {
        console.log(res);
        this.setState({ url: res.data.url });
      })
      .catch((err) => console.log(err));
  };
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
                  <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                      <Label for="code">Secret code</Label>
                      <Input
                        id="code"
                        name="code"
                        placeholder="Enter the death code"
                        type="text"
                        onChange={this.onChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="username">Twitter username</Label>
                      <Input
                        id="username"
                        name="username"
                        type="text"
                        onChange={this.onChange}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label for="exampleEmail">Twitter post link</Label>
                      <Input
                        id="exampleEmail"
                        name="link"
                        type="text"
                        onChange={this.onChange}
                      />
                      <a
                        href="http://twimage.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Generate image
                      </a>
                      <a
                        href="https://app.pinata.cloud/pinmanager"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Upload to url
                      </a>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleEmail">Title</Label>
                      <Input
                        id="exampleEmail"
                        name="title"
                        type="text"
                        onChange={this.onChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleEmail">Amount</Label>
                      <Input
                        id="exampleEmail"
                        name="amount"
                        type="text"
                        onChange={this.onChange}
                      />
                    </FormGroup>

                    <Button className="btn-small" type="submit" color="primary">
                      Submit
                    </Button>
                  </Form>
                  <div className="mt-3">
                    <CopyToClipboard
                      text={this.state.url}
                      onCopy={() => this.setState({ copied: true })}
                    >
                      <Button block className="btn-small">
                        {this.state.url}
                      </Button>
                    </CopyToClipboard>

                    {this.state.copied ? (
                      <span style={{ color: "red" }}>Copied.</span>
                    ) : null}
                  </div>
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
