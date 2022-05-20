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

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <NavbarWrapper />
        <Container className="mt-5">
          <Row>
            <Col md="4">
              <Card className="fluid">
                <CardImg alt="Card image cap" src={Placeholder1} top />
                <CardBody>
                  <div className="mb-3">
                    <CardTitle tag="h6" className="title-text mb-1">
                      Fendi black anchor heels
                    </CardTitle>
                    <CardText className="body-text caption">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Impedit itaque numquam ipsam illum...
                    </CardText>
                  </div>
                  <div className="mb-2">
                    <p className="mb-1">
                      <span className="h6">N5000 </span>
                      <span className="caption">raised out of N15000</span>
                    </p>
                    <Progress value={25} className="mb-2" />
                    <p className="caption body-text">4/5 donations</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
