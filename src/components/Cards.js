import React from "react";
import { Card} from "react-bootstrap";
import ImageWeather from "./ImageWeather";
import "../App.css";

export default function Cards({ day, key }) {
  function dayWeek(timestamp) {
    return new Date(timestamp * 1000).toLocaleDateString("es-AR", {
      weekday: "long",
    });
  }
  return (
    <Card key={key} className="card__forecast">
      <Card.Body className="card__forecast--body">
        <Card.Title className="card__forecast--title">
          {dayWeek(day.dt)}
        </Card.Title>
        <ImageWeather
          className="card__forecast--img"
          status={day.weather[0].main}
        />
        <p className="card__forecast--tempmax">{Math.round(day.temp.max)} °C</p>
        <p className="text-secondary">{Math.round(day.temp.min)} °C</p>
        <p className="text-secondary">{day.weather[0].description}</p>
      </Card.Body>
    </Card>
  );
}
