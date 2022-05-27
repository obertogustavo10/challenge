import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Navb from "../components/Navb";
import Banner from "../img/descarga.jpg";
import Logo from "../img/logo.svg";
import { BsWifi, BsCast, BsCloudSun } from "react-icons/bs";
import "../App.css";

export default function Home() {
  return (
    <div className="app">
      <Navb />
      <Container>

       {/*Banner*/}
        <Row className="banner">
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <img className="banner__img img-fluid" src={Banner} alt="granizo" />
          </Col>
          <Col className="banner__paragraph--container" xs={12} sm={12} md={12} lg={6} xl={6}>
            <p className="banner__paragraph">
            
              Personal Developers trae una propuesta para sus usuarios,
               se trata de la creación de una aplicación meteorológica
                con la mayor precisión del mercado.
              <br />
              Bienvenido a{" "}
              <span className="banner__paragraph--span"> FLOW | WEATHER</span>
            </p>
            <img alt="logo" src={Logo} className="banner__paragraph--flow" />{" "}
          </Col>
        </Row>

        {/*title secundary*/}
        <Row className="title__secundary">
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <h2 className="title__secundary--h2">
              Hay un Flow para vos. Elegí como disfrutarlo.
            </h2>
          </Col>
        </Row>
        
        {/*Personal*/}
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
              <Button className="personal__container--button">Activar gratis</Button>
            </div>
          </Col>
        </Row>

        <Row className="oferta">
          <Col xs={12} sm={12} md={12} lg={4} xl={4}>
            <Card className="oferta__card">
              <Card.Header className="oferta__card--header">
                <Card.Title>
                  <span className="oferta__card--span">Flow</span> App
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted oferta__card--sub">
                  Acceso a la app con TV en Vivo y los mejores contenidos
                </Card.Subtitle>
              </Card.Header>
              <Card.Body className="oferta__card--body">
                <Card.Text>
                  <BsWifi className="oferta__card--icon" />
                  Sin instalación técnica.
                </Card.Text>
                <Card.Text>
                  <BsCloudSun className="oferta__card--icon" />
                  Acceso a Flow | Weather.
                </Card.Text>
                <Card.Text>
                  <BsCast className="oferta__card--icon" />
                  Experiencia digital.
                </Card.Text>
                <div className="oferta__card--div">
                  <Card.Text className="banner-price">$499</Card.Text>
                </div>
                <div className="oferta__card--div">
                  <Button className="banner-button">¡Lo quiero!</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={12} md={12} lg={4} xl={4}>
            <Card className="oferta__card">
              <Card.Header className="oferta__card--header">
                <Card.Title>
                  <span className="oferta__card--span">Flow</span> App
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted oferta__card--sub">
                  Acceso a la app con TV en Vivo y los mejores contenidos
                </Card.Subtitle>
              </Card.Header>
              <Card.Body className="oferta__card--body">
                <Card.Text>
                  <BsWifi className="oferta__card--icon" />
                  Sin instalación técnica.
                </Card.Text>
                <Card.Text>
                  <BsCloudSun className="oferta__card--icon" />
                  Acceso a Flow | Weather.
                </Card.Text>
                <Card.Text>
                  <BsCast className="oferta__card--icon" />
                  Experiencia digital.
                </Card.Text>
                <div className="oferta__card--div">
                  <Card.Text className="banner-price">$499</Card.Text>
                </div>
                <div className="oferta__card--div">
                  <Button className="banner-button">¡Lo quiero!</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={12} md={12} lg={4} xl={4}>
            <Card className="oferta__card">
              <Card.Header className="oferta__card--header">
                <Card.Title>
                  <span className="oferta__card--span">Flow</span> App
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted oferta__card--sub">
                  Acceso a la app con TV en Vivo y los mejores contenidos
                </Card.Subtitle>
              </Card.Header>
              <Card.Body className="oferta__card--body">
                <Card.Text>
                  <BsWifi className="oferta__card--icon" />
                  Sin instalación técnica.
                </Card.Text>
                <Card.Text>
                  <BsCloudSun className="oferta__card--icon" />
                  Acceso a Flow | Weather.
                </Card.Text>
                <Card.Text>
                  <BsCast className="oferta__card--icon" />
                  Experiencia digital.
                </Card.Text>
                <div className="oferta__card--div">
                  <Card.Text className="banner-price">$499</Card.Text>
                </div>
                <div className="oferta__card--div">
                  <Button className="banner-button">¡Lo quiero!</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

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
              <Button className="responsive__app--button">Ver Ahora</Button>
            </div>
          </Col>
        </Row>

      </Container>
    </div>
  );
}
