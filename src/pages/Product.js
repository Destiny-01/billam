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
// import Avatar from "../assets/Avatar.png";

export default class Product extends Component {
  render() {
    return (
      <div>
        <NavbarWrapper />
        <Container className="mt-5">
          <p className="mb-5">Back to dashboard</p>
          <h1>Fendi black anchor heels</h1>
          <Row>
            <Col md="8">
              <img src={Placeholder1} alt="d" width="100%" />
            </Col>
            <Col md="4">
              <Card className="">
                <CardBody>
                  <div className="mb-2">
                    <p className="mb-1">
                      <span className="h2">N5000 </span>
                      <span className="caption">raised out of N15000</span>
                    </p>
                    <Progress value={25} className="mb-2" />
                    <p className="caption body-text">4/5 donations</p>
                  </div>
                  <Button block color="primary" className="btn-small mb-3">
                    Share
                  </Button>
                  <div className="">
                    <div className="mb-1 d-flex">
                      <img
                        src={Placeholder1}
                        alt="vvv"
                        width="40px"
                        height="40px"
                        className="img-luid rounded-circle me-2"
                      />
                      <div className="">
                        <p className="body-text mb-0">Marvellous Aigbe</p>
                        <p className="caption">
                          <span className="title-text">
                            <b>N2000</b>
                          </span>
                          <span className="mx-2">&bull;</span>
                          <span className="body-text">2 days ago</span>
                        </p>
                      </div>
                    </div>
                    <div className="mb-1 d-flex">
                      <img
                        src={Placeholder1}
                        alt="vvv"
                        width="40px"
                        height="40px"
                        className="img-luid rounded-circle me-2"
                      />
                      <div className="">
                        <p className="body-text mb-0">Marvellous Aigbe</p>
                        <p className="caption">
                          <span className="title-text">
                            <b>N2000</b>
                          </span>
                          <span className="mx-2">&bull;</span>
                          <span className="body-text">2 days ago</span>
                        </p>
                      </div>
                    </div>
                    <div className="mb-1 d-flex">
                      <img
                        src={Placeholder1}
                        alt="vvv"
                        width="40px"
                        height="40px"
                        className="img-luid rounded-circle me-2"
                      />
                      <div className="">
                        <p className="body-text mb-0">Marvellous Aigbe</p>
                        <p className="caption">
                          <span className="title-text">
                            <b>N2000</b>
                          </span>
                          <span className="mx-2">&bull;</span>
                          <span className="body-text">2 days ago</span>
                        </p>
                      </div>
                    </div>
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
