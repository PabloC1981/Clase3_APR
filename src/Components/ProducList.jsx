import React from 'react';
import ProductCard from './ProductCard';
import "../Styles/ProductList.css";

const products = [
  {
    nombre: 'Samsung Z Flip 4',
    descripcion: <p><a href="/ruta-de-otra-pagina">{"descripcion Samsung Z Flip 4"}</a></p>,//llevara en un futuro a la descripcion del producto
    precio: '395.000' ,
    sku: '423',
    cantidadDisponible: 10,
    imagen: 'https://bringerihogarar.vtexassets.com/arquivos/ids/167224-800-auto?v=638308199369430000&width=800&height=auto&aspect=true',
  },
  {
    nombre: 'Motorola Moto G32',
    descripcion: <p><a href="/ruta-de-otra-pagina">{"descripcion Motorola Moto G32"}</a></p>,//llevara en un futuro a la descripcion del producto
    precio: '173.999' ,
    sku: '423',
    cantidadDisponible: 10,
    imagen: 'https://medias.musimundo.com/medias/size515-149439-01.jpg?context=bWFzdGVyfGltYWdlc3wzMzc2MXxpbWFnZS9qcGVnfGhkMS9oOTQvMTA1MDU4NDQ5NDkwMjIvc2l6ZTUxNV8xNDk0MzlfMDEuanBnfGM1YzNiYWVjMzEzNmI0MDIzYjg3YmQxYWI3MzQ0ZGQzZmVkZDY0ZmYxOWIxZTdjMTA5ZTI2N2YyMjI3NjNiMWU',
  },
  {
    nombre: 'Samsung Galaxy A30',
    descripcion: <p><a href="/ruta-de-otra-pagina">{"descripcion Samsung Galaxy A30S"}</a></p>,//llevara en un futuro a la descripcion del producto,
    precio: '513.900',
    sku: '513',
    cantidadDisponible: 0,
    imagen: "https://argentina.solutekla.com/photo/1/samsung/celulares/celular_galaxy_a30s_64gb_negro/celular_galaxy_a30s_64gb_negro_0001",
  },
  {
    nombre: 'iPhone 14 Pro',
    descripcion: <p><a href="/ruta-de-otra-pagina">{"descripcion iPhone 14 Pro"}</a></p>,//llevara en un futuro a la descripcion del producto,
    precio: '1.628.571',
    sku: '673',
    cantidadDisponible: 10,
    imagen: "https://d28hi93gr697ol.cloudfront.net/9ef84dda-32dd-4016-7da3-1c0a824fffb4/img/Producto/3eab131d-b1a0-6cab-1350-e538fd9b2419/iphone14promax-637e89105ddd4.jpg",
  },
  {
    nombre: 'Samsung Galaxy A54',
    descripcion: <p><a href="/ruta-de-otra-pagina">{"descripcion Samsung Galaxy A54"}</a></p>,//llevara en un futuro a la descripcion del producto,
    precio: 289.999,
    sku: '896',
    cantidadDisponible: 5,
    imagen: 'https://medias.musimundo.com/medias/size515-148858-01.jpg?context=bWFzdGVyfGltYWdlc3wyODU4NXxpbWFnZS9qcGVnfGg4NS9oZmYvMTA0NzkwNTA3ODQ3OTgvc2l6ZTUxNV8xNDg4NThfMDEuanBnfGMyZjU5NDViYjkzNGZhNjlmYjljOGY1M2E3MDhiMjk1ZWMxZDZkODc3ZjExOTIyMWI5OTc1N2FjYjE0ZjQwNDM',
  },

];

const ProductList = () => {
 
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div key={index}>
          <ProductCard product={product} />
   
        </div>
      ))}
    </div>
  );
};

export default ProductList;
