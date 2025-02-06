// import React from 'react';

// const ProductCard = ({ product }) => {
//   return (
//     <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '200px' }}>
//       <img src={product.image} alt={product.title} style={{ width: '100%', height: '150px', objectFit: 'contain' }} />
//       <h3>{product.title}</h3>
//       <p>${product.price}</p>
//       <p>{product.category}</p>
//     </div>
//   );
// };

// export default ProductCard;

import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
// import { CartContext } from '../context/CartContext';


const ProductCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart } = useContext(CartContext);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div
        style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '200px', cursor: 'pointer' }}
        onClick={openModal}
      >
        <img src={product.image} alt={product.title} style={{ width: '100%', height: '150px', objectFit: 'contain' }} />
        <h4 className='mt-4'>{product.title}</h4>
        <h6><i className="bi bi-currency-rupee"></i>{product.price}</h6>
        <p>{product.category}</p>
        <button onClick={(e) => { e.stopPropagation(); addToCart(product); }} className='btn btn-primary'>Add to Cart</button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            width: '400px',
          }}>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} style={{ width: '100%', height: '200px', objectFit: 'contain' }} />
            <p>{product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;