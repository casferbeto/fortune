import React from 'react';

function Button(props) {
  return (
    <button onClick={props.onClick}>{props.texto}</button>
  );
}

export default Button;