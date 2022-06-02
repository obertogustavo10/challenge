import React from "react";
import clearIcon from "../img/Clear.png";
import heavyCloudIcon from "../img/HeavyCloud.png";
import lightRainIcon from "../img/LightRain.png";
import thunderstormIcon from "../img/Thunderstorm.png";
import snowIcon from "../img/Snow.png";
import FogIcon from "../img/niebla.png";
import HumedifyIcon from "../img/humedad.png";
import WindIcon from "../img/wind.png";

export default function ImageWeather({ status, className }) {
  let icon;

  if (status === "Clear") {
    icon = clearIcon;
  }

  if (status === "Clouds") {
    icon = heavyCloudIcon;
  }

  if (status === "Rain") {
    icon = lightRainIcon;
  }

  if (status === "Thunderstorm") {
    icon = thunderstormIcon;
  }

  if (status === "Humedity") {
    icon = HumedifyIcon;
  }

  if (status === "Wind") {
    icon = WindIcon;
  }

  if (status === "Fog" || status === "Haze" || status === "Mist") {
    icon = FogIcon;
  }

  if (status === "Snow") {
    icon = snowIcon;
  }

  return (
    <img className={className} src={icon} alt="icone weather of the day" />
  );
}
