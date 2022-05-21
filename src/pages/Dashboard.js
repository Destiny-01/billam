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
import axios from "axios";

export default class Dashboard extends Component {
  state = {
    products: [],
  };
  componentDidMount() {
    const id = localStorage.getItem("google");
    axios.get(`/products?id=${id}`).then((res) => {
      console.log("rr", res.data);
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
            {this.state.products.map((product) => {
              <Col md="4">
                <Card className="fluid">
                  <CardImg alt="Card image cap" src={product.iamge} top />
                  <CardBody>
                    <div className="mb-3">
                      <CardTitle tag="h6" className="title-text mb-1">
                        {product.title}
                      </CardTitle>
                      {/* <CardText className="body-text caption">
             {product.desc}
           </CardText> */}
                    </div>
                    <div className="mb-2">
                      <p className="mb-1">
                        <span className="h6">{product.amountRaised} </span>
                        <span className="caption">
                          raised out of {product.amount}
                        </span>
                      </p>
                      <Progress value={25} className="mb-2" />
                      <p className="caption body-text">
                        {product.donations.length} donations
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Col>;
            })}
          </Row>
        </Container>
      </div>
    );
  }
}
