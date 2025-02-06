// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Navbar from '../components/Navbar';
// import Sidebar from '../components/Sidebar';
// import ProductCard from '../components/ProductCard';

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Fetch all products
//     axios.get('https://fakestoreapi.com/products')
//       .then(response => {
//         setProducts(response.data);
//         setFilteredProducts(response.data);
//       });

//     // Fetch all categories
//     axios.get('https://fakestoreapi.com/products/categories')
//       .then(response => setCategories(response.data));
//   }, []);

//   const handleCategoryFilter = (category) => {
//     const filtered = products.filter(product => product.category === category);
//     setFilteredProducts(filtered);
//   };

//   const handleSearch = (query) => {
//     const filtered = products.filter(product =>
//       product.title.toLowerCase().includes(query.toLowerCase())
//     );
//     setFilteredProducts(filtered);
//   };

//   return (
//     <div>
//       <Navbar user={user} onLogin={setUser} onLogout={() => setUser(null)} />
//       <Sidebar categories={categories} onCategoryClick={handleCategoryFilter} />
    
//         <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
//   <i className="bi bi-search" style={{ position: 'absolute', left: 16 }}></i>
//   <input
//     type="text"
//     className="m-2"
//     placeholder="Search products..."
//     onChange={(e) => handleSearch(e.target.value)}
//     style={{ paddingLeft: 30 }}
//   />
// </div>

//       <div style={{ display: 'flex', flexWrap: 'wrap', marginTop:'5px' }}>
//         {filteredProducts.map(product => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;




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
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6); // Number of products per page

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
    setCurrentPage(1); // Reset to first page when filtering
  };

  const handleSearch = (query) => {
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to first page when searching
  };

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Navbar user={user} onLogin={setUser} onLogout={() => setUser(null)} />
      <Sidebar categories={categories} onCategoryClick={handleCategoryFilter} />

      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <i className="bi bi-search" style={{ position: 'absolute', left: 16 }}></i>
        <input
          type="text"
          className="m-2"
          placeholder="Search products..."
          onChange={(e) => handleSearch(e.target.value)}
          style={{ paddingLeft: 30 }}
        />
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '5px' }}>
        {currentProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination d-flex justify-content-center">
        {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }, (_, i) => (
   <button className='btn btn-primary m-2' key={i + 1} onClick={() => paginate(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;