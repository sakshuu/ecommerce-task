import React from 'react';

const Sidebar = ({ categories, onCategoryClick }) => {
  return (
    <div style={{ width: '200px', height:'100vh', float: 'left',  backgroundColor:'lightgray' }}>
      <h3 className='text-center mt-5 mb-5'>Categories</h3>
      <ul>
        {categories.map(category => (
          <li key={category} className='p-3' style={{cursor:'pointer'}} onClick={() => onCategoryClick(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;