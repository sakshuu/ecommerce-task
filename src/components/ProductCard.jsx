import React from 'react';

const ProductCard = ({ product }) => {
  return (<>
  

    

    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '200px' }}>
      <img src={product.image} alt={product.title} style={{ width: '100%', height: '150px', objectFit: 'contain' }} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <p>{product.category}</p>
    </div>
  </>
  );
};

export default ProductCard;