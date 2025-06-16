import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Home: React.FC = () => (
  <div className="nf-home">
    <nav className="nf-navbar">
      <div className="nf-logo">
        <span className="nf-logo-neutral">Neutral</span><span className="nf-logo-fit">Fit</span>
      </div>
      <div className="nf-nav-links">
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
    <section className="nf-hero">
      <div className="nf-hero-content">
        <h1>Precision Golf Fitting & Beyond</h1>
        <p>
          NeutralFit delivers expert golf club fitting and personalized recommendations to help you play your best. Our platform is designed to provide athletes with data-driven insights and tailored equipment solutions for peak performance.
        </p>
        <div className="nf-hero-buttons">
          <Link to="/signup" className="nf-btn nf-btn-primary">Get Fitted</Link>
          <Link to="/login" className="nf-btn nf-btn-secondary">Member Login</Link>
        </div>
      </div>
    </section>
    <footer className="nf-footer">
      &copy; {new Date().getFullYear()} NeutralFit. All rights reserved.
    </footer>
  </div>
);

export default Home;
