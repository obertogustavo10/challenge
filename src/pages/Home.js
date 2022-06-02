import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import Navb from "../components/Navb";
import Banner from "../img/descarga.jpg";
import Logo from "../img/logo.svg";
import "../App.css";
import FlowResponsive from "../components/FlowResponsive";
import Info from "../card.json";
import CardOferta from "../components/CardOferta";
import Image from "../components/Image";

export default function Home() {
  const data = Info.card;

  return (
    <div className="app">
      <Navb />
      <Container>
        <Row className="banner">
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <Image
              src={Banner}
              alt={"granizo"}
              className={"banner__img img-fluid"}
            />
          </Col>
          <Col
            className="banner__paragraph--container"
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
          >
            <p className="banner__paragraph">
              Personal Developers trae una propuesta para sus usuarios, se trata
              de la creación de una aplicación meteorológica con la mayor
              precisión del mercado.
              <br />
              Bienvenido a{" "}
              <span className="banner__paragraph--span"> FLOW | WEATHER</span>
            </p>
            <img alt="logo" src={Logo} className="banner__paragraph--flow" />{" "}
          </Col>
        </Row>

        <Row className="title__secundary">
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <h2 className="title__secundary--h2">
              Hay un Flow para vos. Elegí como disfrutarlo.
            </h2>
          </Col>
        </Row>

        <Row className="personal">
          <Col xs={12} sm={12} md={12} lg={8} xl={6}>
            <div className="personal__container">
              <h3 className="personal__container--title">
                Si sos cliente Personal, tenes
                <strong> Flow Weather</strong> gratis
              </h3>
              <p className="personal__container--paragraph">
                Podés activar Flow Flex gratis y pagar sólo por lo que querés
                ver. Encontrá todo lo que te gusta y elegí por cuánto tiempo
                contratarlo
              </p>
              <Link to='/clima' ><Button className="personal__container--button" >
                Abrir AppWeather
              </Button></Link>
            </div>
          </Col>
        </Row>

        <Row className="oferta">
          {data.map((tar, index) => (
            <Col xs={12} sm={12} md={12} lg={4} xl={4}>
              <CardOferta
                key={index}
                subTitle={tar.subtitle}
                textWifi={tar.textWifi}
                textWeather={tar.textWeather}
                textCast={tar.textCast}
                precio={tar.precio}
              />
            </Col>
          ))}
        </Row>

        <FlowResponsive className={"responsive__app--button"} />

      </Container>
    </div>
  );
}
