import React from 'react';
import {Card, Row, Col} from 'react-bootstrap';
import ImageWeather from './ImageWeather';
import '../App.css';

export default function Cards({day, key}) {

  function dayWeek(timestamp) {
    return new Date(timestamp * 1000).toLocaleDateString("en-US", {
      weekday: "long",
    });
  }
  return (
    <Card key={key} className="card-current">
      <Card.Title style={{fontSize: '12px'}}>{dayWeek(day.dt)}</Card.Title>
    <Card.Body>
      <Row>
        <Col lg={4}>
        <ImageWeather className="image-card" status={day.weather[0].main}/>
        </Col>
        <Col lg={8}>
        <Card.Text>
          {Math.round(day.temp.min)} °C
      </Card.Text>
      <Card.Text>
      {Math.round(day.temp.max)} °C
      </Card.Text>
        </Col>
      </Row>
      
      
    </Card.Body>
  </Card>
  )
}
