import React, { Component } from 'react';











const Button = (props) => {
  return (

    <button>{props.title}</button>

  )
}
Button.defaultProps = {
  text: "кнопка"
}

export default Button;
