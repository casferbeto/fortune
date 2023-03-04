import React from 'react';

function Fortuna(props) {
  return (
    <div className='fortune-card'>
      <p>{props.texto}</p>
      <p>{props.autor}</p>
    </div>
  );
}

export default Fortuna;