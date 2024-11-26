import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const allProducts = [
  { id: 1, name: 'Laptop', price: 1000, category: 'Electronics', description: 'A powerful laptop for work and play.', imageUrl: '/images/laptop.png' },
  { id: 2, name: 'Phone', price: 500, category: 'Electronics', description: 'A smartphone with all the latest features.', imageUrl: '/images/phone.png' },
  { id: 3, name: 'Headphones', price: 150, category: 'Electronics', description: 'Noise-canceling headphones for ultimate sound.', imageUrl: '/images/headphones.png' },
  { id: 4, name: 'T-shirt', price: 25, category: 'Apparel', description: 'Comfortable cotton t-shirt.', imageUrl: '/images/tshirt.png' },
  { id: 5, name: 'Jeans', price: 40, category: 'Apparel', description: 'Stylish blue jeans.', imageUrl: '/images/jeans.png' },
  { id: 6, name: 'Smart Watch', price: 200, category: 'Electronics', description: 'Track your fitness with this smart watch.', imageUrl: '/images/smartwatch.png' },
  { id: 7, name: 'Sneakers', price: 60, category: 'Apparel', description: 'Comfortable running shoes.', imageUrl: '/images/sneakers.png' }
];

function ProductDetails() {
  const { id } = useParams();
  const product = allProducts.find((prod) => prod.id === parseInt(id));
  const navigate = useNavigate();

  if (!product) {
    return <div>Product not found</div>;
  }

  const addToCart = (product) => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    savedCart.push(product);
    localStorage.setItem('cart', JSON.stringify(savedCart));
    navigate('/cart');
  };

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-6">
          <img src={product.imageUrl} alt={product.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h3>${product.price}</h3>
          <button className="btn btn-success" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
