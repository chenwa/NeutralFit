import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API_BASE_URL from './config';
import './App.css';

const Signup: React.FC = () => {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    street: '',
    city: '',
    state: '',
    zip_code: '',
    country: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.first_name || !form.last_name || !form.email || !form.password) {
      setError('First name, last name, email, and password are required.');
      return;
    }
    try {
      const user = {
        first_name: form.first_name,
        last_name: form.last_name,
        email: form.email,
        password: form.password,
      };
      const address = form.street || form.city || form.state || form.zip_code || form.country
        ? {
            user_id: 0, // backend will link by email
            street: form.street,
            city: form.city,
            state: form.state,
            zip_code: form.zip_code,
            country: form.country,
          }
        : null;
      const res = await fetch(`${API_BASE_URL}/users_create/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user, address }),
      });
      if (res.ok) {
        navigate('/login');
      } else {
        setError('Sign up failed.');
      }
    } catch (err) {
      setError('Sign up failed.');
    }
  };

  return (
    <div className="nf-form-container">
      <button className="nf-home-btn" type="button" onClick={() => navigate('/')} aria-label="Close">&#10005;</button>
      <h2 className="nf-form-title">Sign Up</h2>
      <form className="nf-form nf-form-small" onSubmit={handleSubmit}>
        <div className="nf-form-row">
          <input className="nf-input" name="first_name" placeholder="First Name*" value={form.first_name} onChange={handleChange} required />
          <input className="nf-input" name="last_name" placeholder="Last Name*" value={form.last_name} onChange={handleChange} required />
        </div>
        <input className="nf-input" name="email" type="email" placeholder="Email*" value={form.email} onChange={handleChange} required />
        <input className="nf-input" name="password" type="password" placeholder="Password*" value={form.password} onChange={handleChange} required />
        <hr className="nf-divider" />
        <div className="nf-form-row">
          <input className="nf-input" name="street" placeholder="Street" value={form.street} onChange={handleChange} />
          <input className="nf-input" name="city" placeholder="City" value={form.city} onChange={handleChange} />
        </div>
        <div className="nf-form-row">
          <input className="nf-input" name="state" placeholder="State" value={form.state} onChange={handleChange} />
          <input className="nf-input" name="zip_code" placeholder="Zip Code" value={form.zip_code} onChange={handleChange} />
        </div>
        <input className="nf-input" name="country" placeholder="Country" value={form.country} onChange={handleChange} />
        <div className="nf-optional-note">Address fields are optional and can be filled in later.</div>
        <button className="nf-btn nf-btn-primary nf-form-btn" type="submit">Sign Up</button>
      </form>
      {error && <div className="nf-error">{error}</div>}
      <div className="nf-info-section">
        <strong>Privacy Notice:</strong> NeutralFit does <u>not</u> collect, sell, or share your data. We will never send you marketing emails or share your information with third parties.
      </div>
      <div className="nf-info-section">
        <h3>Why do we need this info?</h3>
        <p>
          We ask for your information to make sure you're a real person and not an internet bot trying to misuse our platform. This helps us keep NeutralFit safe and secure for everyone. Rest assured, your data is protected and will only be used to provide you with the best experience possible.
        </p>
      </div>
      <footer className="nf-footer nf-footer-small">
        &copy; {new Date().getFullYear()} NeutralFit. All rights reserved.
      </footer>
    </div>
  );
};

export default Signup;
