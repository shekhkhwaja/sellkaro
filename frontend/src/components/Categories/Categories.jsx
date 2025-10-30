import React from 'react';
import './Categories.css';

const Categories = () => {
  const categories = [
    { name: 'Electronics', icon: '📱', count: '1.2K+' },
    { name: 'Fashion', icon: '👕', count: '800+' },
    { name: 'Vehicles', icon: '🚗', count: '350+' },
    { name: 'Furniture', icon: '🛋️', count: '600+' },
    { name: 'Collectibles', icon: '🏺', count: '450+' },
    { name: 'Real Estate', icon: '🏠', count: '120+' }
  ];

  return (
    <section className="categories section">
      <div className="container">
        <div className="search-section">
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search items to bid..." 
              className="search-input"
            />
            <button className="search-btn">Search</button>
          </div>
        </div>
        
        <h2 className="section-title">Popular Categories</h2>
        
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <div className="category-icon">{category.icon}</div>
              <h3 className="category-name">{category.name}</h3>
              <p className="category-count">{category.count} items</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;