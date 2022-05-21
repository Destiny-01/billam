import React, { Component, useEffect, useState } from "react";
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
import { useParams } from "react-router-dom";
import Placeholder2 from "../assets/Placeholder2.png";
import axios from "../utils/axios";

export default function Payment() {
  const [product, setProduct] = useState({});
  let { productId } = useParams();
  useEffect(() => {
    axios.get(`/products/${productId}`).then((res) => {
      console.log("rer", res);
      setProduct(res.data.product);
    });
  }, [productId]);

  return (
    <div>
      <Container className="mt-5 pt-4">
        <Row>
          <Col md="2"></Col>
          <Col md="8" className="text-center">
            <img src={Logo} alt="Billam Logo" className="mb-4" />
            <h2 className="mb-0">{product.title}</h2>
            <p className="caption text-primary">by @{product.username}</p>
            <Card className="fluid">
              <Row noGutters>
                <Col md="5" className="ps-3">
                  {/* <img
                    src={product.image}
                    alt="Billam Logo"
                    className="img-fluid"
                  /> */}
                  <blockquote class="twitter-tweet">
                    <a href="https://twitter.com/AdoraNwodo/status/1443961582577455106"></a>
                  </blockquote>
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
