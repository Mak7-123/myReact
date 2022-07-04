import React, { Component } from 'react';
import s from "./baraholka.module.css";
import Button from './Nau/button';
import Nau from './Nau/nau';



class Baraholka extends Component {

  render() {
    return (
      <div className={s.box}>
        <Nau />
      </div>
    );
  }
}

export default Baraholka;

