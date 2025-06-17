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
      <div className="nf-hero-content-bg">
        <h1>Precision Golf Fitting & Beyond</h1>
        <p>
          NeutralFit delivers expert golf club fitting and personalized recommendations to help you play your best. Our platform is designed to provide athletes with data-driven insights and tailored equipment solutions for peak performance.
        </p>
        <div className="nf-hero-buttons">
          <Link to="/signup" className="nf-btn nf-btn-primary">Get Fitted</Link>
          <Link to="/login" className="nf-btn nf-btn-secondary">Member Login</Link>
        </div>
        <div className="nf-scroll-indicator" onClick={() => {
          const aboutSection = document.getElementById('nf-about');
          if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
        }}>
          <span className="nf-double-v-static" aria-label="Scroll to About Us" role="button">
            <svg width="32" height="48" viewBox="0 0 32 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polyline points="8,16 16,24 24,16" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" filter="url(#shadow)"/>
              <polyline points="8,32 16,40 24,32" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" filter="url(#shadow)"/>
              <defs>
                <filter id="shadow" x="-2" y="-2" width="36" height="52">
                  <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.35"/>
                </filter>
              </defs>
            </svg>
          </span>
        </div>
      </div>
    </section>
    <section id="nf-about" className="nf-about">
      <div className="nf-about-content">
        <h2>About Us</h2>
        <div className="nf-about-block">
          <p>
            NeutralFit is the most complete online fitting tool available today. Unlike other fitting services, 
            we don't try and push sponsored equipment. We stay truly neutral in our recommendations, 
            which is reflected in our name.
          </p>
          <p>
            We leverage AI data analytics to provide completely unbiased fittings, ensuring you get 
            equipment recommendations that truly match your body and performance needs, not our profit margins.
          </p>
        </div>
      </div>
    </section>

    {/* Testimonials Section */}
    <section className="nf-testimonials">
      <div className="container">
        <h2>What Our Users Say</h2>
        <div className="nf-testimonial-block">
          <blockquote>
            "NeutralFit helped me find the perfect golf clubs for my game. The AI recommendations were spot on!"
          </blockquote>
          <cite>- Alex, Amateur Golfer</cite>
        </div>
        <div className="nf-testimonial-block">
          <blockquote>
            "I love how NeutralFit stays unbiased and doesn't push sponsored equipment. Truly revolutionary!"
          </blockquote>
          <cite>- Jamie, Professional Golfer</cite>
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section className="nf-features">
      <div className="container">
        <h2>Why Choose NeutralFit?</h2>
        <ul>
          <li>AI-powered unbiased equipment recommendations</li>
          <li>Comprehensive fitting tools for all skill levels</li>
          <li>Easy-to-use interface with personalized insights</li>
          <li>Trusted by golfers worldwide</li>
        </ul>
      </div>
    </section>

    {/* Call-to-Action Section */}
    <section className="nf-cta">
      <div className="container">
        <h2>Ready to Improve Your Game?</h2>
        <p>Join thousands of golfers who trust NeutralFit to optimize their performance.</p>
        <div className="nf-cta-buttons">
          <Link to="/signup" className="nf-btn nf-btn-primary">Sign Up Now</Link>
          <Link to="/learn-more" className="nf-btn nf-btn-secondary">Learn More</Link>
        </div>
      </div>
    </section>

    {/* Carousel Section */}
    <section className="nf-carousel">
      <div className="container">
        <h2>See NeutralFit in Action</h2>
        <div className="nf-carousel-container">
          <img src="/images/demo1.jpg" alt="NeutralFit Demo 1" />
          <img src="/images/demo2.jpg" alt="NeutralFit Demo 2" />
          <img src="/images/demo3.jpg" alt="NeutralFit Demo 3" />
        </div>
      </div>
    </section>

    {/* Statistics Section */}
    <section className="nf-stats">
      <div className="container">
        <h2>Our Impact</h2>
        <div className="nf-stats-grid">
          <div>
            <h3>10,000+</h3>
            <p>Golfers Fitted</p>
          </div>
          <div>
            <h3>95%</h3>
            <p>Customer Satisfaction</p>
          </div>
          <div>
            <h3>50+</h3>
            <p>Countries Served</p>
          </div>
        </div>
      </div>
    </section>
    <footer className="nf-footer">
      &copy; {new Date().getFullYear()} NeutralFit. All rights reserved.
    </footer>
  </div>
);

export default Home;
