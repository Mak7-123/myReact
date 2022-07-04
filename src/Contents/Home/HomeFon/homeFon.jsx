// import React from 'react';
import React, { Component } from 'react';
import audio from "./../../../audio/bestia_2.mp3";
import './homeFon.css';
import w from "./../../../img/home/home_fon.jpg";
import w1 from "./../../../img/home/home_1.png";
import w2 from "./../../../img/home/home_2.png";
import w3 from "./../../../img/home/home_3.png";








class HomeFon extends Component {


  playAudio = () => {
    new Audio(audio).play();
  }

  render() {
    setTimeout(() => {

      document.querySelectorAll(".parallax").forEach(parallaxWrap => {
        parallaxWrap.addEventListener('mousemove', ({ clientX, clientY }) => {
          parallaxWrap.style.setProperty("--x", clientX);
          parallaxWrap.style.setProperty("--y", clientY)
        })
      });
    }, 10);




    return (

      <div className='parallax' >

        <img src={w1} alt="alt" />
        <img src={w2} alt="alt" onClick={this.playAudio} />
        <img src={w3} alt="alt" />
        <img src={w} alt="alt" />

      </div>

    );
  }
}

export default HomeFon;











