import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch all products
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      });

    // Fetch all categories
    axios.get('https://fakestoreapi.com/products/categories')
      .then(response => setCategories(response.data));
  }, []);

  const handleCategoryFilter = (category) => {
    const filtered = products.filter(product => product.category === category);
    setFilteredProducts(filtered);
  };

  const handleSearch = (query) => {
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <Navbar user={user} onLogin={setUser} onLogout={() => setUser(null)} />
      <Sidebar categories={categories} onCategoryClick={handleCategoryFilter} />
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => handleSearch(e.target.value)}
      />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;