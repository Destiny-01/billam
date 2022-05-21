import React, { Component, useEffect, useState } from "react";
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
import { useParams } from "react-router-dom";
import axios from "axios";
// import Avatar from "../assets/Avatar.png";

export default function Product() {
  const [product, setProduct] = useState({});
  // const history=useHis
  let { id } = useParams();

  useEffect(() => {
    axios.get(`/products/${id}`).then((res) => {
      setProduct(res.data.product);
    });
  }, [id]);

  return (
    <div>
      <NavbarWrapper />
      <Container className="mt-5">
        <p className="mb-5">Back to dashboard</p>
        <h1>{product.title}</h1>
        <Row>
          <Col md="8">
            <img src={product.image} alt="d" width="100%" />
          </Col>
          <Col md="4">
            <Card className="">
              <CardBody>
                <div className="mb-2">
                  <p className="mb-1">
                    <span className="h2">{product.amountRaised} </span>
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
                    {product.donations.length} donations
                  </p>
                </div>
                <Button block color="primary" className="btn-small mb-3">
                  Share
                </Button>
                <div className="">
                  {product.donations.map((donor) => {
                    return (
                      <div className="mb-1 d-flex">
                        <img
                          src={Placeholder1}
                          alt="vvv"
                          width="40px"
                          height="40px"
                          className="img-luid rounded-circle me-2"
                        />
                        <div className="">
                          <p className="body-text mb-0">{donor.name}</p>
                          <p className="caption">
                            <span className="title-text">
                              <b>{donor.amount}</b>
                            </span>
                            <span className="mx-2">&bull;</span>
                            <span className="body-text">4 mins ago</span>
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
