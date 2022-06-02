import React from 'react';
import Loading from '../img/loader.gif';
import '../App.css';

export default function Spinner() {
  return (
    <div className="spinner">
        <img className="spinner__gif" src={Loading} alt="Loading"/>
    </div>
  )
}
