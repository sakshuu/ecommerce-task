import React from 'react';

const ProductCard = ({ product }) => {
  return (<>
  

    

    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '200px' }}>
      <img src={product.image} alt={product.title} style={{ width: '100%', height: '150px', objectFit: 'contain' }} />
      <h4 className='mt-4'>{product.title}</h4>
      <h6><i class="bi bi-currency-rupee"></i>{product.price}</h6>
      <p>{product.category}</p>
    </div>
  </>
  );
};

export default ProductCard;