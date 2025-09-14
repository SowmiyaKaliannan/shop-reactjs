import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import Footer from './Footer';

const allProducts = [
  {
    id: 1,
    name: 'Laptop',
    price: 1000,
    category: 'Electronics',
    description: 'A powerful laptop for work and play.',
    imageUrl: process.env.PUBLIC_URL + '/images/laptop.png',
  },
  {
    id: 2,
    name: 'Phone',
    price: 500,
    category: 'Electronics',
    description: 'A smartphone with all the latest features.',
    imageUrl: process.env.PUBLIC_URL + '/images/phone.png',
  },
  {
    id: 3,
    name: 'Headphones',
    price: 150,
    category: 'Electronics',
    description: 'Noise-canceling headphones for ultimate sound.',
    imageUrl: process.env.PUBLIC_URL + '/images/headphones.png',
  },
  {
    id: 4,
    name: 'T-shirt',
    price: 25,
    category: 'Apparel',
    description: 'Comfortable cotton t-shirt.',
    imageUrl: process.env.PUBLIC_URL + '/images/tshirt.png',
  },
  {
    id: 5,
    name: 'Jeans',
    price: 40,
    category: 'Apparel',
    description: 'Stylish blue jeans.',
    imageUrl: process.env.PUBLIC_URL + '/images/jeans.png',
  },
  {
    id: 6,
    name: 'Smart Watch',
    price: 200,
    category: 'Electronics',
    description: 'Track your fitness with this smart watch.',
    imageUrl: process.env.PUBLIC_URL + '/images/smartwatch.png',
  },
  {
    id: 7,
    name: 'Sneakers',
    price: 60,
    category: 'Apparel',
    description: 'Comfortable running shoes.',
    imageUrl: process.env.PUBLIC_URL + '/images/sneakers.png',
  },
];

function Home() {
  const [cart, setCart] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    const filtered = allProducts.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">🛒 Shop</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">Shop</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">🛒 Cart ({cart.length})</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container my-4">
        <h1 className="text-center mb-4">Product List</h1>

        {/* Search Box */}
        <div className="mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>

        {/* Product List */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {filteredProducts.map((product) => (
            <div className="col" key={product.id}>
              <div className="card h-100">
                <img
                  src={product.imageUrl}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">${product.price}</p>
                  <p className="card-text">{product.description}</p>
                  <div className="mt-auto">
                    <button
                      className="btn btn-success w-100"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                    <button
                      className="btn btn-info w-100 mt-2"
                      onClick={() => navigate(`/product/${product.id}`)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
