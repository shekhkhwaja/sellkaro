import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Auction Your Items.<br />
            <span className="highlight">Get Best Price.</span>
          </h1>
          <p className="hero-subtitle">
            Sell faster. Buy smarter. Join live bidding on India's most trusted auction marketplace.
          </p>
          <div className="hero-buttons">
            <a href="/register" className="btn btn-primary">Start Selling</a>
            <a href="/auctions" className="btn btn-secondary">Browse Auctions</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="auction-card-preview">
            <img src="https://imgs.search.brave.com/XWQJ5o15mT8VkZAj8R8KPhr_t7w92pGHb12fp4S8pRI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0LzRx/elpqMzg4WG8yUUU1/Tlk1Z3lnWWsuanBn" alt="Auction Preview" />
            <div className="live-badge">LIVE</div>
            <div className="bid-info">
              <h4>iPhone 15 Pro</h4>
              <p>Current Bid: ₹45,000</p>
              <div className="timer">02:15:30</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;