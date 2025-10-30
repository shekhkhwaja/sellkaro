import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Create Account',
      description: 'Sign up in 30 seconds with email or phone',
      icon: '👤'
    },
    {
      number: '02',
      title: 'List or Bid',
      description: 'Upload your product or start bidding on auctions',
      icon: '📦'
    },
    {
      number: '03',
      title: 'Live Auction',
      description: 'Participate in real-time bidding wars',
      icon: '⚡'
    },
    {
      number: '04',
      title: 'Win & Complete',
      description: 'Highest bid wins! Secure payment & delivery',
      icon: '🏆'
    }
  ];

  return (
    <section className="how-it-works section">
      <div className="container">
        <h2 className="section-title">How SellKaro Works</h2>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;