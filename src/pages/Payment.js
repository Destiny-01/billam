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
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import Placeholder2 from "../assets/Placeholder2.png";
import axios from "../utils/axios";

export default function Payment() {
  const [product, setProduct] = useState({});
  // const history=useHis
  let { productId } = useParams();
  const [searchParams] = useSearchParams();
  const [state, setState] = React.useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
  });
  let navigate = useNavigate();
  useEffect(() => {
    const ref = searchParams.get("ref");
    axios.get(`/products/${productId}`).then((res) => {
      console.log("rer", res);
      setProduct(res.data.product);
    });

    ref &&
      axios.get(`/pay/done?ref=${ref}`).then((res) => {
        console.log("rer", res);
      });
  }, [productId]);

  function onChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/pay", {
        name: state.name,
        email: state.email,
        phone: state.phone,
        amount: state.amount,
        uid: productId,
      })
      .then((res) => {
        console.log(res);
        window.location.replace(res.data.paymentLink);
        // this.setState({ url: res.data.url });
      })
      .catch((err) => console.log(err));
  };

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
                <Col md="5" className="ps-3 pt-3">
                  <div class="twitter-tweet">
                    <img src={product.image} alt="d" width="100%" />
                  </div>
                </Col>
                <Col md="7">
                  <div className="p-4 text-start">
                    <Form onSubmit={onSubmit}>
                      <FormGroup>
                        <Label for="code">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          onChange={onChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="code">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          onChange={onChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="code">Phone number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="number"
                          onChange={onChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="code">Amount</Label>
                        <Input
                          id="amount"
                          name="amount"
                          type="number"
                          onChange={onChange}
                        />
                      </FormGroup>

                      <Button
                        className="btn-small"
                        type="submit"
                        color="primary"
                      >
                        Submit
                      </Button>
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
