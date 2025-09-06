import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header'; 
import Footer from './Footer';

const allProducts = [
  { id: 1, name: 'Laptop', price: 1000, category: 'Electronics', description: 'A powerful laptop for work and play.', imageUrl: '/images/laptop.png' },
  { id: 2, name: 'Phone', price: 500, category: 'Electronics', description: 'A smartphone with all the latest features.', imageUrl: '/images/phone.png' },
  { id: 3, name: 'Headphones', price: 150, category: 'Electronics', description: 'Noise-canceling headphones for ultimate sound.', imageUrl: '/images/headphones.png' },
  { id: 4, name: 'T-shirt', price: 25, category: 'Apparel', description: 'Comfortable cotton t-shirt.', imageUrl: '/images/tshirt.png' },
  { id: 5, name: 'Jeans', price: 40, category: 'Apparel', description: 'Stylish blue jeans.', imageUrl: '/images/jeans.png' },
  { id: 6, name: 'Smart Watch', price: 200, category: 'Electronics', description: 'Track your fitness with this smart watch.', imageUrl: '/images/smartwatch.png' },
  { id: 7, name: 'Sneakers', price: 60, category: 'Apparel', description: 'Comfortable running shoes.', imageUrl: '/images/sneakers.png' }
];

function Shop() {
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    let filtered = allProducts;

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    // Sort products
    filtered = filtered.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    setFilteredProducts(filtered);
  }, [selectedCategory, sortOrder, searchQuery]);

  return (
    <div>
      {/* Header (Navbar) */}
      <Header />

      {/* Main Content */}
      <div className="container my-4">
        <h1 className="text-center mb-4">Shop</h1>

        {/* Search, Filter, and Sort Section */}
        <div className="d-flex justify-content-between mb-4">
          <input
            type="text"
            placeholder="Search for products..."
            className="form-control"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ width: '300px' }}
          />
          <div>
            <select
              className="form-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="Electronics">Electronics</option>
              <option value="Apparel">Apparel</option>
            </select>
          </div>
          <div>
            <select
              className="form-select"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="asc">Sort by Price: Low to High</option>
              <option value="desc">Sort by Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product List */}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div className="col" key={product.id}>
                <div className="card h-100">
                  <img src={product.imageUrl} className="card-img-top" alt={product.name} />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">${product.price}</p>
                    <p className="card-text">{product.description}</p>
                    <div className="mt-auto">
                      <button className="btn btn-success w-100">Add to Cart</button>
                      <Link to={`/product/${product.id}`} className="btn btn-info w-100 mt-2">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No products found.</p>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Shop;
