import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header'; 

function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div>
     
      <Header />

    
      <div className="container my-4">
        <h2 className="text-center mb-4">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-center">Your cart is empty!</p>
        ) : (
          <div>
            {cart.map((product) => (
              <div key={product.id} className="row mb-3">
                <div className="col-2">
                  <img src={product.imageUrl} alt={product.name} className="img-fluid" />
                </div>
                <div className="col-6">
                  <h5>{product.name}</h5>
                  <p>${product.price}</p>
                </div>
                <div className="col-4 text-end">
                  <button className="btn btn-danger" onClick={() => removeFromCart(product.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="text-center">
              <h3>Total: ${calculateTotal()}</h3>
              <button className="btn btn-success" onClick={() => navigate('/shop')}>
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
