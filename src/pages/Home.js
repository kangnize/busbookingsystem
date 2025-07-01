import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Create this file for custom styling

export default function Home() {
  return (
    <div className="home-page">
      <div className="hero-section text-white text-center d-flex align-items-center justify-content-center">
        <div className="container">
          <h1 className="display-4 fw-bold">NaizaCoach Booking</h1>
          <p className="lead">Fast. Reliable. Affordable travel across the coast.</p>
          <div className="mt-4">
            <Link to="/search" className="btn btn-primary btn-lg me-3">Search Buses</Link>
            <Link to="/login" className="btn btn-outline-light btn-lg">Login</Link>
          </div>
          <p className="mt-3">
            New here? <Link to="/register" className="text-warning text-decoration-underline">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
