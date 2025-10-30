import React from 'react';
import './TrendingAuctions.css';

const TrendingAuctions = () => {
  const trendingItems = [
    {
      id: 1,
      title: 'MacBook Pro 2023',
      image: 'https://imgs.search.brave.com/lNPQG4wgrtERE-BRAhBtYZL5phYv5JcxckvFdQMjXWA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbGF0/Zm9ybS50aGV2ZXJn/ZS5jb20vd3AtY29u/dGVudC91cGxvYWRz/L3NpdGVzLzIvY2hv/cnVzL2hlcm1hbm8v/dmVyZ2UvcHJvZHVj/dC9pbWFnZS8xMDA1/Mi8yMzY0OTJfTWFj/Qm9va19Qcm9fMTZf/XzIwMjNfX0FLcmFs/ZXNfMDE0MS5qcGc_/cXVhbGl0eT05MCZz/dHJpcD1hbGwmY3Jv/cD0wLDAsMTAwLDEw/MCZ3PTI0MDA',
      currentBid: '₹89,500',
      bids: 24,
      timeLeft: '04:32:15',
      isLive: true
    },
    {
      id: 2,
      title: 'Sony PlayStation 5',
      image: 'https://imgs.search.brave.com/cv6ZbAjX7nIaanLhgAK0juSd32f0HzRH4eXCWflMMl4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1pay5jcm9tYS5j/b20vcHJvZC9odHRw/czovL21lZGlhLnRh/dGFjcm9tYS5jb20v/Q3JvbWElMjBBc3Nl/dHMvR2FtaW5nL0dh/bWluZyUyMENvbnNv/bGVzL0ltYWdlcy8z/MDU5ODdfdGxmdnpo/LnBuZw',
      currentBid: '₹45,200',
      bids: 18,
      timeLeft: '12:15:30',
      isLive: true
    },
    {
      id: 3,
      title: 'Canon EOS R5',
      image: 'https://imgs.search.brave.com/eqQMHB_OcRrMH_CnRxfKyanyWPgdNEqhefei9EO-chQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/a2Vucm9ja3dlbGwu/Y29tL2Nhbm9uL2Vv/cy1yL2ltYWdlcy9y/NS9EM1NfNzA3NS1j/b25uZWN0b3JzLmpw/Zw',
      currentBid: '₹1,25,000',
      bids: 12,
      timeLeft: '01:45:20',
      isLive: true
    },
    {
      id: 4,
      title: 'Vintage Rolex Watch',
      image: 'https://imgs.search.brave.com/vDZawnkxVgtP9anzqngr2C54zJLeOLbLCpa0Qvq-SQU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly92aW50/YWdld2F0Y2hzcGVj/aWFsaXN0LmNvbS9j/ZG4vc2hvcC9maWxl/cy9yb2xleC1veXN0/ZXItcGVycGV0dWFs/LWRhdGUtYS0xNGst/Z29sZC1yZWZlcmVu/Y2UtMTUwMDctc2ls/dmVyLXN1bmJ1cnN0/LWRpYWwtYy0xOTgz/LXJvbGV4LWRhdGUt/Z29sZC1kcmVzcy13/YXRjaC13YXRjaGVz/LXZpbnRhZ2Utc3Bl/Y2lhbGlzdC00NTJf/MTAyNHguanBnP3Y9/MTc1Nzk1MjY3OA',
      currentBid: '₹2,75,000',
      bids: 8,
      timeLeft: '06:20:45',
      isLive: true
    }
  ];

  return (
    <section className="trending-auctions section">
      <div className="container">
        <h2 className="section-title">🔥 Trending Auctions</h2>
        <div className="auctions-grid">
          {trendingItems.map(item => (
            <div key={item.id} className="auction-card">
              <div className="auction-image">
                <img src={item.image} alt={item.title} />
                {item.isLive && <div className="live-indicator">LIVE</div>}
                <div className="timer-badge">{item.timeLeft}</div>
              </div>
              <div className="auction-details">
                <h3 className="auction-title">{item.title}</h3>
                <div className="bid-info">
                  <div className="current-bid">
                    <span className="label">Current Bid:</span>
                    <span className="amount">{item.currentBid}</span>
                  </div>
                  <div className="bid-count">
                    <span className="label">Bids:</span>
                    <span className="count">{item.bids}</span>
                  </div>
                </div>
                <button className="bid-now-btn">Bid Now</button>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all-container">
          <a href="/auctions" className="btn btn-secondary">View All Auctions</a>
        </div>
      </div>
    </section>
  );
};

export default TrendingAuctions;