import React, { useState, useEffect } from 'react';
import Fortuna from './components/Fortuna';
import Button from './components/Button';
import './App.css';
import fortunasData from './data/fortunasData.json'


function App() {
  const [fortuna, setFortuna] = useState({});
  const [background, setBackground] = useState("");

  useEffect(() => {
    const obtenerFortunaInicial = () => {
      const indice = Math.floor(Math.random() * fortunasData.length);
      setFortuna(fortunasData[indice]);
    };
    obtenerFortunaInicial();
  }, []);

  const cambiarFortuna = () => {
    const indice = Math.floor(Math.random() * fortunasData.length);
    setFortuna(fortunasData[indice]);
    cambiarFondo();
  };

  const cambiarFondo = () => {
    const numeroImagenes = 4; 
    const indice = Math.floor(Math.random() * numeroImagenes) + 1;
    const imagenURL = `/imagenes/fondo-${indice}.jpg`;
    setBackground(`url(${imagenURL})`);
  }

  return (
    <div className="App" style={{ backgroundImage: background }}>
      <div>
        <h1 className='tittle'>GALLETAS DE LA FORTUNA</h1>
      </div>
      <div className='card'>
      <Fortuna texto={fortuna.phrase} autor={fortuna.author} />
      </div>
      <Button onClick={cambiarFortuna} texto="Cambiar Fortuna y Fondo" />
   
    </div>
  );
}

export default App;
