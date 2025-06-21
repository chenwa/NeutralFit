import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import ClubFitting from './pages/ClubFitting';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/club-fitting" 
          element={
            <ProtectedRoute>
              <ClubFitting />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
