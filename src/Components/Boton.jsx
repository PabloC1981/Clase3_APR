import React from 'react';
import "../Styles/Boton.css";

const Boton = ({ texto, onClick }) => {
  return (
    <button onClick={onClick} className="boton">
      {texto}
    </button>
  );
};

export default Boton;
