import React, { useState, useEffect } from 'react';
import API_BASE_URL from './config';

const EditAddress: React.FC = () => {
  const [address, setAddress] = useState({
    user_id: 0, // This will be set by the backend
    street: '',
    city: '',
    state: '',
    zip_code: '',
    country: '',
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Optionally, fetch current address here using the token
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${API_BASE_URL}/add_user_address/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ ...address, org: 'neutralfit' }),
      });
      if (res.ok) {
        setMessage('Address updated!');
      } else {
        setMessage('Failed to update address.');
      }
    } catch (err) {
      setMessage('Failed to update address.');
    }
  };

  return (
    <div className="nf-form-container">
      <h2 className="nf-form-title">Edit Address</h2>
      <form className="nf-form" onSubmit={handleSubmit}>
        <input className="nf-input" name="street" placeholder="Street" value={address.street} onChange={handleChange} />
        <input className="nf-input" name="city" placeholder="City" value={address.city} onChange={handleChange} />
        <input className="nf-input" name="state" placeholder="State" value={address.state} onChange={handleChange} />
        <input className="nf-input" name="zip_code" placeholder="Zip Code" value={address.zip_code} onChange={handleChange} />
        <input className="nf-input" name="country" placeholder="Country" value={address.country} onChange={handleChange} />
        <button className="nf-btn nf-btn-primary nf-form-btn" type="submit">Save Address</button>
      </form>
      {message && <div className="nf-message">{message}</div>}
      <footer className="nf-footer nf-footer-small">
        &copy; {new Date().getFullYear()} NeutralFit. All rights reserved.
      </footer>
    </div>
  );
};

export default EditAddress;
