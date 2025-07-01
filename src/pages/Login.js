import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageWithBackground from '../components/PageWithBackground';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Login attempted with email: ${email}`);
    navigate('/search');
  };

  const handleGuestLogin = () => {
    alert('Continuing as Guest...');
    navigate('/search');
  };

  return (
    <PageWithBackground>
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
        <div className="card shadow p-4" style={{ width: '100%', maxWidth: '400px' }}>
          <h3 className="text-center mb-4">Login</h3>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-2">Login</button>
          </form>

          <button onClick={handleGuestLogin} className="btn btn-outline-secondary w-100 mb-3">
            Continue as Guest
          </button>

          <p className="text-center">
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </div>
      </div>
    </PageWithBackground>
  );
}
