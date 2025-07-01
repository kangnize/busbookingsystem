import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Booking.css';
import PageWithBackground from '../components/PageWithBackground';

export default function Booking() {
  const { busId } = useParams();
  const navigate = useNavigate();

  const tripDetails = {
    origin: 'KILIFI',
    destination: 'KALOLENI',
    date: '2025-07-01',
    time: '9:00 AM',
    busId: busId,
  };

  const seatPrice = 300;
  const bookedSeats = [5, 8, 14, 22, 27];

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleSeatClick = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const handleBooking = (e) => {
    e.preventDefault();
    if (selectedSeats.length === 0) return alert("Please select at least one seat.");
    if (!paymentMethod) return alert("Please select a payment method.");

    const totalAmount = selectedSeats.length * seatPrice;

    const message = `
Booking Details:
Name: ${name}
Phone: ${phone}
Email: ${email || 'N/A'}
From: ${tripDetails.origin}
To: ${tripDetails.destination}
Date: ${tripDetails.date}
Time: ${tripDetails.time}
Bus ID: ${tripDetails.busId}
Selected Seats: ${selectedSeats.join(', ')}
Total Price: Ksh ${totalAmount}
Payment Method: ${paymentMethod}

✅ Thank you for booking with NaizaCoach!
    `;

    alert(message);
    setBookingConfirmed(true);

    setTimeout(() => {
      navigate('/');
    }, 3000); // redirect after 3 seconds
  };

  const renderSeats = () => {
    const seatRows = [];
    const totalSeats = 32;
    let seatNumber = 1;

    for (let row = 0; row < totalSeats / 4; row++) {
      const rowSeats = [];

      for (let col = 0; col < 4; col++) {
        if (col === 2) {
          rowSeats.push(<div key={`gap-${row}-${col}`} className="seat-gap"></div>);
        }

        const isBooked = bookedSeats.includes(seatNumber);
        const isSelected = selectedSeats.includes(seatNumber);

        rowSeats.push(
          <button
            key={seatNumber}
            className={`seat ${isBooked ? 'booked' : isSelected ? 'selected' : 'available'}`}
            disabled={isBooked}
            onClick={() => handleSeatClick(seatNumber)}
          >
            {isSelected ? '🧍' : seatNumber}
          </button>
        );
        seatNumber++;
      }

      seatRows.push(
        <div key={row} className="seat-row d-flex justify-content-center mb-2">
          {rowSeats}
        </div>
      );
    }

    seatRows.push(
      <div key="last-row" className="seat-row d-flex justify-content-center mb-2">
        {[33, 34].map(num => {
          const isBooked = bookedSeats.includes(num);
          const isSelected = selectedSeats.includes(num);
          return (
            <button
              key={num}
              className={`seat ${isBooked ? 'booked' : isSelected ? 'selected' : 'available'}`}
              disabled={isBooked}
              onClick={() => handleSeatClick(num)}
            >
              {isSelected ? '🧍' : num}
            </button>
          );
        })}
      </div>
    );

    return (
      <>
        <div className="seat-row d-flex justify-content-center align-items-center mb-3">
          <div className="driver-seat">🧑‍✈️ Driver</div>
        </div>
        {seatRows}
      </>
    );
  };

  const totalAmount = selectedSeats.length * seatPrice;

  return (
    <PageWithBackground>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-lg p-4">
              <h3 className="text-center mb-4">🚌 Book Your Seat</h3>

              <div className="mb-4 border p-3 rounded bg-light">
                <h5 className="mb-3">Trip Information</h5>
                <p><strong>From:</strong> {tripDetails.origin}</p>
                <p><strong>To:</strong> {tripDetails.destination}</p>
                <p><strong>Date:</strong> {tripDetails.date}</p>
                <p><strong>Departure Time:</strong> {tripDetails.time}</p>
                <p><strong>Bus ID:</strong> {tripDetails.busId}</p>
              </div>

              <div className="bus-layout mb-4">{renderSeats()}</div>

              <div className="mb-4 text-center">
                <span className="seat booked me-2"></span> Booked
                <span className="seat selected ms-3 me-2"></span> Selected
                <span className="seat available ms-3"></span> Available
                <div className="mt-3">
                  <h5>Total Price: <span className="text-success">Ksh {totalAmount}</span></h5>
                </div>
              </div>

              <form onSubmit={handleBooking}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Phone Number</label>
                    <input
                      className="form-control"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <label className="form-label">Email (optional)</label>
                    <input
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <label className="form-label">Payment Method</label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="payment"
                        id="mpesa"
                        value="M-PESA"
                        checked={paymentMethod === 'M-PESA'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      <label className="form-check-label" htmlFor="mpesa">M-PESA</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="payment"
                        id="cash"
                        value="Cash"
                        checked={paymentMethod === 'Cash'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      <label className="form-check-label" htmlFor="cash">Cash</label>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-success w-100">
                  Confirm Booking
                </button>
              </form>

              {bookingConfirmed && (
                <div className="alert alert-success mt-4 text-center">
                  ✅ Booking confirmed! Redirecting to homepage...
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageWithBackground>
  );
}
