import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import Navb from "../components/Navb";
import Cards from "../components/Cards";
import ImageWeather from "../components/ImageWeather";
import { BsWind,BsThermometerSun,BsThermometerSnow } from "react-icons/bs";
import { WiBarometer, WiHumidity } from "react-icons/wi";
import "../App.css";

export default function Weather() {

  //states
  const [city, setCity] = useState("Buenos aires");
  const [weather, setWeather] = useState([]);
  const [weatherDaily, setWeatherDaily] = useState([]);

  const getLocation = async (city) => {
    try {
      //get current weather
      const result = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      );
      console.log(result.data);
      setWeather(result.data);

      // get  daily weather
      const resultDaily = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${result.data.coord.lat}&lon=${result.data.coord.lon}&exclude=hourly,minutely&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      );
      console.log(resultDaily.data);
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

  function dateBuild(d) {
    let date = String(new window.Date());
    date = date.slice(3, 15);
    return date;
  }

  return (
    <div className="app">
      <Navb />
      <Container>

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
            </div>
          </Col>
        </Row>

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

        <Row className="pronostico__title">
          <Col xs={12} sm={4} md={4} lg={4} xl={4}>
            <h3 className="pronostico__title--h3">Pronostico actual </h3>
          </Col>
        </Row>
        
        <Row className="weather__current">
          {weather ? (
            <>
              <Col xs={12} sm={12} md={5} lg={5} xl={5}>
                <div className="weather__current--container">
                  <Row>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                      <div className="weather__current--temp">
                        <h1 className="weather__current--title">
                          {weather.weather ? Math.round(weather.main.temp) : ""}
                          °C
                        </h1>
                        <h3>{weather.name}</h3>
                        <p className="text-secondary">
                          Hoy・ {dateBuild(new Date())}
                        </p>
                        <p className="text-secondary">
                          {weather.weather
                            ? weather.weather[0].description
                            : ""}
                        </p>
                      </div>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                      <div className="weather__current--img">
                      {weather.weather ? (
                        <ImageWeather
                          className="App-logo-spin"
                          status={weather.weather[0].main}
                        />
                      ) : (
                        ""
                      )}
                      </div>
                      
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col xs={12} sm={12} md={7} lg={7} xl={7}>
                <div className="weather__current--container">
                  <Row className="justify-content-center alig-items-center">
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Row >
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <p><BsThermometerSun className="weather__current--icon"/>Temperatura maxima: {weather.weather ? Math.round(weather.main.temp_max) : ""}°C</p>
                        <p><BsThermometerSun className="weather__current--icon"/>Temperatura maxima: {weather.weather ? Math.round(weather.main.temp_max) : ""}°C</p>
                        <p><BsThermometerSun className="weather__current--icon"/>Temperatura maxima: {weather.weather ? Math.round(weather.main.temp_max) : ""}°C</p>

                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <p><BsThermometerSun className="weather__current--icon"/>Temperatura maxima: {weather.weather ? Math.round(weather.main.temp_max) : ""}°C</p>
                        <p><BsThermometerSun className="weather__current--icon"/>Temperatura maxima: {weather.weather ? Math.round(weather.main.temp_max) : ""}°C</p>
                        <p><BsThermometerSun className="weather__current--icon"/>Temperatura maxima: {weather.weather ? Math.round(weather.main.temp_max) : ""}°C</p>
                        
                    </Col></Row>
                      {/* <ul className="weather__current--list">
                        <li className="weather__current--lista"><BsThermometerSun className="weather__current--icon"/>Temperatura maxima: {weather.weather ? Math.round(weather.main.temp_max) : ""}°C</li>
                        <li className="weather__current--lista"><BsThermometerSnow className="weather__current--icon"/>Temperatura minima: {weather.weather ? Math.round(weather.main.temp_min) : ""}°C</li>
                        <li className="weather__current--lista"><WiBarometer className="weather__current--icon"/>Sensacion termica: {weather.weather ? Math.round(weather.main.feels_like) : ""}°C</li>
                        <li className="weather__current--lista"><BsWind className="weather__current--icon"/>Velocidad del viento: {weather.weather ? Math.round(weather.wind.speed) : ""}m/s</li>
                        <li className="weather__current--lista"><WiHumidity className="weather__current--icon"/>Porcentaje de humedad: {weather.weather ? Math.round(weather.main.humidity) : ""}%</li>
                      </ul> */}
                    </Col>
                  </Row>
                </div>
              </Col>
            </>
          ) : (
            ""
          )}
        </Row>

        <Row>
          <Col xs={12} sm={4} md={4} lg={4} xl={4}>
            <h3 style={{marginTop: "50px"}}>Pronostico a 5 dias </h3>
          </Col>
        </Row>

        <Row className="">
          {weatherDaily ? (
                <>
                  {weatherDaily.slice(1, 6).map((day, index) => (
                    <Col key={index}xs={6} sm={6} md={2} lg={2} xl={2}>
                      <Cards key={index} day={day} />
                    </Col>
                  ))}
                </>
              ) : (
                ""
              )}
          
        </Row>
      </Container>
    </div>
  );
}
