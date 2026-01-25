import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Navbar.css';

const KitchenCraft: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', padding: '100px 80px' }}>
      <Link to="/" style={{ 
        textDecoration: 'none', 
        color: '#b86273', 
        fontSize: '16px',
        fontWeight: 500,
        marginBottom: '40px',
        display: 'inline-block'
      }}>
        ← Back to Home
      </Link>
      <h1 style={{ fontSize: '48px', color: '#1a1a1a', marginTop: '40px' }}>KitchenCraft</h1>
      <p style={{ fontSize: '18px', color: '#666', marginTop: '20px' }}>
        Case study coming soon...
      </p>
    </div>
  );
};

export default KitchenCraft;
