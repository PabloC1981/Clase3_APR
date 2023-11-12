import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../Styles/ProductCard.css";
import Boton from './Boton'; 
import "../Styles/Boton.css";

const ProductCard = ({ product }) => {
  const { nombre, descripcion, precio, sku, cantidadDisponible, imagen } = product;

  const [botonHabilitado, setBotonHabilitado] = useState(true);

  const handleClick = () => {
    if (botonHabilitado) {
      setBotonHabilitado(false);

      if (cantidadDisponible > 0) {
        toast.success('¡Avanzamos con tu compra!', {
          icon: '🛒',
        });
      } else {
        toast.error('Sin stock, lo lamentamos.', {
          icon: '❌',
        });
      }
    }
  };

  useEffect(() => {
    let timeoutId;

    if (!botonHabilitado) {
      
      timeoutId = setTimeout(() => {
        setBotonHabilitado(true);
      }, 3000);
    }

   
    return () => clearTimeout(timeoutId);
  }, [botonHabilitado]);

  return (
    <div className="product-card">
      <img src={imagen} alt={nombre} className="product-image" />
      <div className="product-details">
        <h2>{nombre}</h2>
        <p>{descripcion}</p>
        <p>Precio: ${precio}</p>
        <p>SKU: {sku}</p>
        <p>Cantidad Disponible: {cantidadDisponible}</p>
        <Boton texto="Comprar" onClick={handleClick} disabled={!botonHabilitado} />
      </div>
    </div>
  );
};

export default ProductCard;
