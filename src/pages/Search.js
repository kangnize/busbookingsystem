import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageWithBackground from '../components/PageWithBackground';

export default function Search() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const locations = [
    'KILIFI', 'CHONYI', 'KAOYENI', 'MWARAKAYA', 'ZIANI',
    'CHENGONI', 'KADZINUNI', 'MAKATA', 'BUNDACHO', 'CHILULU', 'KALOLENI'
  ];

  const handleSearch = (e) => {
  e.preventDefault();

  // For now, navigate to a dummy busId, e.g., 12345
  // Later, you can get a real busId from a database
  navigate(`/booking/12345?origin=${origin}&destination=${destination}&date=${date}`);
};


  return (
    <PageWithBackground>
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
        <div className="card shadow p-4" style={{ width: '100%', maxWidth: '500px' }}>
          <h3 className="text-center mb-4">Search for Buses</h3>
          <form onSubmit={handleSearch}>
            <div className="mb-3">
              <label className="form-label">Origin</label>
              <select
                className="form-select"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                required
              >
                <option value="">Select Origin</option>
                {locations.map((loc, index) => (
                  <option key={index} value={loc}>{loc}</option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Destination</label>
              <select
                className="form-select"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                required
              >
                <option value="">Select Destination</option>
                {locations.map((loc, index) => (
                  <option key={index} value={loc}>{loc}</option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Travel Date</label>
              <input
                type="date"
                className="form-control"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">Search Buses</button>
          </form>
        </div>
      </div>
    </PageWithBackground>
  );
}
