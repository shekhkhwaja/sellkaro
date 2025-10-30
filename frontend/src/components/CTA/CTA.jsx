import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">
            Ready to Start Your Auction Journey?
          </h2>
          <p className="cta-description">
            Join thousands of successful buyers and sellers on India's fastest growing auction marketplace. 
            List your first item in under 5 minutes!
          </p>
          <div className="cta-buttons">
            <a href="/register" className="btn btn-primary btn-large">
              Start Selling Today
            </a>
            <a href="/discover" className="btn btn-secondary btn-large">
              Explore Auctions
            </a>
          </div>
          <div className="cta-stats">
            <div className="stat">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Active Users</div>
            </div>
            <div className="stat">
              <div className="stat-number">₹10Cr+</div>
              <div className="stat-label">Total Sales</div>
            </div>
            <div className="stat">
              <div className="stat-number">98%</div>
              <div className="stat-label">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;