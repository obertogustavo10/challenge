import React from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import "../App.css";

export default function FlowResponsive({className}) {
  return (
    <Row className="responsive__app">
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className="responsive__app--container">
              <h3 className="responsive__app--title">
                Disfruta{" "}
                <span className="responsive__app--span"> FLOW | WEATHER</span>{" "}
                desde tu TV, PC, Tablet y Smartphone
              </h3>
              <div className="responsive__app--logos">
                <span>
                  <i className="responsive__app--logo--tv"></i>
                  <i className="responsive__app--logo--pc"></i>
                  <i className="responsive__app--logo--tb"></i>
                  <i className="responsive__app--logo--tf"></i>
                </span>
              </div>
              <Link to='/clima' ><Button className={className}>Ver Ahora</Button></Link>
            </div>
          </Col>
        </Row>
  )
}
