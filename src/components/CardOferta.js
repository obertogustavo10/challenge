import React from "react";
import { Card, Button } from "react-bootstrap";
import { BsWifi, BsCast, BsCloudSun } from "react-icons/bs";
import '../App.css';

export default function CardOferta({
  subTitle,
  textWifi,
  textWeather,
  textCast,
  precio,
}) {
  console.log(subTitle);
  return (
    <Card className="oferta__card">
      <Card.Header className="oferta__card--header">
        <Card.Title>
          <span className="oferta__card--span">Flow</span> App
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted oferta__card--sub">
          {subTitle}
        </Card.Subtitle>
      </Card.Header>
      <Card.Body className="oferta__card--body">
        <Card.Text>
          <BsWifi className="oferta__card--icon" />
          {textWifi}
        </Card.Text>
        <Card.Text>
          <BsCloudSun className="oferta__card--icon" />
          {textWeather}
        </Card.Text>
        <Card.Text>
          <BsCast className="oferta__card--icon" />
          {textCast}
        </Card.Text>
        <div className="oferta__card--div">
          <Card.Text className="oferta__card--price">{precio}</Card.Text>
        </div>
        <div className="oferta__card--div">
          <Button className="oferta__card--button">¡Lo quiero!</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
