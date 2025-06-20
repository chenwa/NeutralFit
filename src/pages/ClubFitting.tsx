import React from 'react';
import './ClubFitting.css';

const ClubFitting = () => {
  const clubs = [
    'Driver', '3-Wood', '5-Wood',
    '4-Iron', '5-Iron', '6-Iron', '7-Iron', '8-Iron', '9-Iron',
    'Pitching Wedge', 'Gap Wedge', 'Sand Wedge', 'Lob Wedge',
    'Putter'
  ];

  return (
    <div className="club-fitting-container">
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
