import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Progress,
  Row,
} from "reactstrap";
import NavbarWrapper from "../components/NavbarWrapper";
import Placeholder1 from "../assets/Placeholder1.png";
import axios from "../utils/axios";
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
  state = {
    products: [],
  };
  componentDidMount() {
    const id = localStorage.getItem("google");
    axios.get(`/products?id=${id}`).then((res) => {
      console.log("rr", res.data.user.requests);
      this.setState({ products: res.data.user.requests });
      //  setProduct(res.data.product);
    });
  }
  render() {
    return (
      <div>
        <NavbarWrapper />
        <Container className="mt-5">
          <Row>
            {this.state.products &&
              this.state.products.map((product) => {
                return (
                  <Col md="4">
                    <Link to={`/product/${product.uid}`} state={{
                      product
                    }} >
                      <Card className="fluid">
                        <CardImg alt="Card image cap" src={product.image} top />
                        <CardBody>
                          <div className="mb-3">
                            <CardTitle tag="h6" className="title-text mb-1">
                              {product.title}
                            </CardTitle>
                          </div>
                          <div className="mb-2">
                            <p className="mb-1">
                              <span className="h6">
                                {product.amountRaised}{" "}
                              </span>
                              <span className="caption">
                                raised out of {product.totalAmount}
                              </span>
                            </p>
                            <Progress
                              value={product.amountRaised}
                              max={product.totalAmount}
                              className="mb-2"
                            />
                            <p className="caption body-text">
                              {product.donators.length} donators
                            </p>
                          </div>
                        </CardBody>
                      </Card>
                    </Link>
                  </Col>
                );
              })}
          </Row>
        </Container>
      </div>
    );
  }
}
