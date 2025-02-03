import React from 'react';

const Sidebar = ({ categories, onCategoryClick }) => {
  return (
    <div style={{ width: '200px', float: 'left' }}>
      <h3>Categories</h3>
      <ul>
        {categories.map(category => (
          <li key={category} onClick={() => onCategoryClick(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;