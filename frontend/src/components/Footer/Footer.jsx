import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="logo">SellKaro</h3>
            <p className="brand-description">
              India's trusted auction marketplace. Buy smart, sell fast, and get the best value for your items.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="LinkedIn">💼</a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h4>Buyers</h4>
              <ul>
                <li><a href="/auctions">Browse Auctions</a></li>
                <li><a href="/categories">Categories</a></li>
                <li><a href="/how-to-bid">How to Bid</a></li>
                <li><a href="/buyer-protection">Buyer Protection</a></li>
              </ul>
            </div>
            
            <div className="link-group">
              <h4>Sellers</h4>
              <ul>
                <li><a href="/sell">Start Selling</a></li>
                <li><a href="/seller-guide">Seller Guide</a></li>
                <li><a href="/fees">Fee Structure</a></li>
                <li><a href="/success-stories">Success Stories</a></li>
              </ul>
            </div>
            
            <div className="link-group">
              <h4>Company</h4>
              <ul>
                <li><a href="/about">About Us</a></li>
                <li><a href="/careers">Careers</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/press">Press</a></li>
              </ul>
            </div>
            
            <div className="link-group">
              <h4>Support</h4>
              <ul>
                <li><a href="/help">Help Center</a></li>
                <li><a href="/disputes">Dispute Resolution</a></li>
                <li><a href="/terms">Terms of Service</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="auth-buttons">
            <a href="/login" className="auth-btn">Login</a>
            <a href="/register" className="auth-btn primary">Register</a>
          </div>
          <div className="copyright">
            <p>&copy; 2024 SellKaro. All rights reserved. Made with ❤️ in India</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;