import React, { Suspense } from "react";
import { Row, Col} from "react-bootstrap";
import ImageWeather from "../components/ImageWeather";
import { BsWind, BsThermometerSun, BsThermometerSnow } from "react-icons/bs";
import { WiBarometer, WiHumidity } from "react-icons/wi";
import "../App.css";
const Cards = React.lazy(() => import("../components/Cards"));
export default function SectionWeather({ weather, weatherDaily }) {

  function dateBuild(d) {
    let date = String(new window.Date());
    date = date.slice(3, 15);
    return date;
  }

  return (
    <>
      <Row className="pronostico__title">
        <Col xs={12} sm={4} md={4} lg={4} xl={4}>
          <h3 className="pronostico__title--h3">Pronostico actual </h3>
        </Col>
      </Row>

      <Row className="weather__current">
        {weather ? (
          <>
            <Col xs={12} sm={12} md={12} lg={5} xl={5}>
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
                    </div>
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                    <div className="weather__current--img">
                      {weather.weather ? (
                        <>
                          <ImageWeather
                            className="App-logo-spin"
                            status={weather.weather[0].main}
                          />
                          <p className="text-secondary weather__current--img--description">
                            {weather.weather
                              ? weather.weather[0].description
                              : ""}
                          </p>
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={7} xl={7}>
              <div className="weather__current--container weather__current--container-mobile">
                <Row className="justify-content-center alig-items-center">
                  <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Row className="weather__current--content ">
                      <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <p>
                          <BsThermometerSun className="weather__current--icon" />
                          Temperatura maxima:{" "}
                          {weather.weather
                            ? Math.round(weather.main.temp_max)
                            : ""}
                          °C
                        </p>
                        <p>
                          <BsThermometerSnow className="weather__current--icon" />
                          Temperatura minima:{" "}
                          {weather.weather
                            ? Math.round(weather.main.temp_min)
                            : ""}
                          °C
                        </p>
                        <p>
                          <WiBarometer className="weather__current--icon" />
                          Sensacion termica:{" "}
                          {weather.weather
                            ? Math.round(weather.main.feels_like)
                            : ""}
                          °C
                        </p>
                      </Col>
                      <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <p>
                          <WiHumidity className="weather__current--icon" />
                          Porcentaje de humedad:{" "}
                          {weather.weather
                            ? Math.round(weather.main.humidity)
                            : ""}
                          %
                        </p>
                        <p>
                          <BsWind className="weather__current--icon" />
                          Velocidad del viento:{" "}
                          {weather.weather
                            ? Math.round(weather.wind.speed)
                            : ""}
                          m/s
                        </p>
                        <p>
                          <WiBarometer className="weather__current--icon" />
                          Presion ambiental:{" "}
                          {weather.weather
                            ? Math.round(weather.main.pressure)
                            : ""}{" "}
                          Pcal
                        </p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </Col>
          </>
        ) : (
          ""
        )}
      </Row>

      <Row className="pronostico__future">
        <Col xs={12} sm={4} md={6} lg={4} xl={4}>
          <h3 className="pronostico__future--title">Pronostico a 5 dias</h3>
        </Col>
      </Row>

      <Row className="card__future">
        {weatherDaily ? (
          <>
            {weatherDaily.slice(1, 6).map((day, index) => (
              <Col
                className="card__future--container"
                key={index}
                xs={6}
                sm={6}
                md={4}
                lg={2}
                xl={2}
              >
                <Suspense fallback={<p>Carganfo......</p>}>
                  <Cards id={index} day={day} />
                </Suspense>
              </Col>
            ))}
          </>
        ) : (
          ""
        )}
      </Row>
    </>
  );
}
