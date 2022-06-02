import React, { useState, useEffect, Suspense } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import axios from "axios";
import Navb from "../components/Navb";
import Flowe from "../img/flow.png";
import "../App.css";
import Image from "../components/Image";
import Spinner from "../components/Spinner";
import FlowResponsive from "../components/FlowResponsive";
const SectionWeather = React.lazy(() => import("../components/SectionWeather"));
export default function Weather() {
  //states
  const [city, setCity] = useState("Buenos aires");
  const [weather, setWeather] = useState([]);
  const [weatherDaily, setWeatherDaily] = useState([]);

  const getLocation = async (city) => {
    try {
      //get current weather
      const result = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=154fb5c721636e39e67e30a66cc6b114`
      );
      setWeather(result.data);
      // get  daily weather
      const resultDaily = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${result.data.coord.lat}&lon=${result.data.coord.lon}&exclude=hourly,minutely&units=metric&appid=154fb5c721636e39e67e30a66cc6b114`
      );
      setWeatherDaily(resultDaily.data.daily);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getLocation(city);
  }, [city]);

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="app">
      <Navb />
      {weatherDaily.length === 8 ? (
      <Container>
        <FlowResponsive className={"hidden"}/>
        <Row className="justify-content-center alig-items-center select">
          <Col xs={12} sm={4} md={4} lg={4} xl={4}>
            <div>
              <Form.Select
                onChange={handleChange}
                className="select__weather"
                aria-label="Default select example"
              >
                <option className="select__weather--option">
                  Seleccione un Pais
                </option>
                <option value="buenos aires">Buenos Aires</option>
                <option value="caracas">Caracas</option>
                <option value="lima">Lima</option>
                <option value="santiago">Santiago de Chile</option>
                <option value="montevideo">Montevideo</option>
              </Form.Select>
            </div>
          </Col>
        </Row>
        <Suspense fallback={<Spinner />}>
            <SectionWeather weather={weather} weatherDaily={weatherDaily} />
        </Suspense>
        <Row className="card__flow">
          <Col
            className="card__flow--container"
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
          >
            <Image src={Flowe} alt={"flow"} className={"img-responsive"} />
          </Col>
        </Row>
      </Container>) 
      : (
            <Spinner />
          )}
    </div>
  );
}
