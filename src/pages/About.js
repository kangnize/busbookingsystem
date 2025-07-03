import React from 'react';
import PageWithBackground from '../components/PageWithBackground';
import './About.css'; // We'll add some custom styling

export default function About() {
  return (
    <PageWithBackground>
      <div className="about-hero text-white text-center py-5">
        <h1 className="display-4 fw-bold">About NaizaCoach</h1>
        <p className="lead">Your journey, simplified. Coastal travel made fast, reliable, and affordable.</p>
      </div>

      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="/images/bus.jpg"
              alt="NaizaCoach Bus"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <h3 className="mb-3">Who We Are</h3>
            <p>
              <strong>NaizaCoach</strong> is a digital-first bus booking platform helping coastal Kenya travelers find and reserve seats with ease. Our goal is to eliminate queues and last-minute rushes by offering a convenient, online alternative.
            </p>
            <ul className="list-unstyled">
              <li>🚌 Smart bus selection</li>
              <li>💺 Visual seat layout</li>
              <li>📱 Mobile-first design</li>
              <li>🔒 Secure booking process</li>
            </ul>
            <p>
              Proudly built with 💻 by <strong>Victor Kazungu</strong> for local commuters and long-distance travelers.
            </p>
          </div>
        </div>
      </div>
    </PageWithBackground>
  );
}
