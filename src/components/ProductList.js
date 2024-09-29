import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product-item" key={product.id}>
          <h4>{product.title}</h4>
          <img src={product.thumbnail} alt={product.title} style={{ width: '100px' }} />
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Rating:</strong> {product.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
