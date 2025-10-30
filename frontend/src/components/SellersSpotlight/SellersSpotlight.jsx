import React from 'react';
import './SellersSpotlight.css';

const SellersSpotlight = () => {
  const soldItems = [
    {
      id: 1,
      item: 'iPhone 14 Pro Max',
      finalPrice: '₹85,000',
      seller: 'TechGuru',
      rating: 4.9,
      image: '/api/placeholder/100/100'
    },
    {
      id: 2,
      item: 'Samsung Galaxy S23',
      finalPrice: '₹62,500',
      seller: 'MobileExpert',
      rating: 4.8,
      image: '/api/placeholder/100/100'
    },
    {
      id: 3,
      item: 'MacBook Air M2',
      finalPrice: '₹95,000',
      seller: 'AppleLover',
      rating: 5.0,
      image: '/api/placeholder/100/100'
    },
    {
      id: 4,
      item: 'Sony WH-1000XM4',
      finalPrice: '₹18,200',
      seller: 'AudioKing',
      rating: 4.7,
      image: '/api/placeholder/100/100'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Rahul Sharma',
      role: 'Power Seller',
      message: 'Sold 50+ items on SellKaro. The platform is super easy to use and payments are always on time!',
      sales: '₹12,45,000+'
    },
    {
      id: 2,
      name: 'Priya Patel',
      role: 'Collector',
      message: 'Found amazing collectibles at great prices. The bidding process is transparent and fair.',
      purchases: '45 Items'
    }
  ];

  return (
    <section className="sellers-spotlight section">
      <div className="container">
        <h2 className="section-title">🌟 Success Stories</h2>
        
        <div className="spotlight-content">
          <div className="sold-items-section">
            <h3>Recently Sold</h3>
            <div className="sold-items-grid">
              {soldItems.map(item => (
                <div key={item.id} className="sold-item-card">
                  <img src={item.image} alt={item.item} className="sold-item-image" />
                  <div className="sold-item-info">
                    <h4>{item.item}</h4>
                    <p className="final-price">{item.finalPrice}</p>
                    <div className="seller-info">
                      <span>by {item.seller}</span>
                      <span className="rating">⭐ {item.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="testimonials-section">
            <h3>What Our Users Say</h3>
            <div className="testimonials-grid">
              {testimonials.map(testimonial => (
                <div key={testimonial.id} className="testimonial-card">
                  <div className="testimonial-content">
                    <p>"{testimonial.message}"</p>
                  </div>
                  <div className="testimonial-author">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                    <div className="stats">
                      {testimonial.sales || testimonial.purchases}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellersSpotlight;