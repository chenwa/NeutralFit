import React from 'react';
import './ClubFitting.css';
import { useNavigate } from 'react-router-dom';

const ClubFitting = () => {
  const navigate = useNavigate();
  const clubs = [
    'Driver', '3-Wood', '5-Wood',
    '4-Iron', '5-Iron', '6-Iron', '7-Iron', '8-Iron', '9-Iron',
    'Pitching Wedge', 'Gap Wedge', 'Sand Wedge', 'Lob Wedge',
    'Putter'
  ];

  const handleSignOff = () => {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    // If you use a different key for your token, update it here
    navigate('/');
  };

  return (
    <div className="club-fitting-container">
      <nav className="nf-navbar">
        <div className="nf-logo">
          <span className="nf-logo-neutral">Neutral</span><span className="nf-logo-fit">Fit</span>
        </div>
        <div className="nf-nav-links">
          <button className="nf-signoff-btn" onClick={handleSignOff}>Sign Off</button>
        </div>
      </nav>
      <aside className="sidebar">
        <h2>My Clubs</h2>
        <ul className="club-list">
          {clubs.map(club => <li key={club}>{club}</li>)}
        </ul>
      </aside>
      <main className="main-content">
        <div className="chat-interaction-box">
          <div className="prompt-display">
            <p><strong>AI Prompt:</strong> Tell me about your ball flight and typical miss.</p>
          </div>
          <textarea className="prompt-input" placeholder="Enter your response here..."></textarea>
        </div>
        <div className="results-display-box">
          <h3>Club Fitting Results</h3>
          <p>Your results will be displayed here.</p>
        </div>
      </main>
    </div>
  );
};

export default ClubFitting;
