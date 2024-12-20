import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./SuccessfulBooking.css";

const SuccessfulBooking = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Use useLocation to access the state

  // Access data from the location state
  const { data } = location.state || {}; // If no state, fallback to empty object

  return (
    <div className="container">
      <button className="back-button" onClick={() => navigate(-1)}>
        <img src="/images/back-button.png" alt="Back" />
      </button> 
      
      {/* Checkmark Icon */}
      <div className="icon-container">
        <div className="checkmark">✔</div>
      </div>

      {/* Confirmation Message */}
      <h1 className="title">Your Booking is Made!</h1>
      <p className="subtitle">Congratulations! Your Booking is successful</p>

      {/* Order Summary */}
      <div className="order-summary">
        <h4>Order Summary </h4>
        <div className="order-id">
          ORDER ID <span>#{data?.orderId}</span>
        </div>

        <div className="details">
          <div class="names">
              <div className="artisan">
                <p>Artisan's Name</p>
                <span>{data?.artisanName} <br /> ({data?.serviceType})</span>
              </div>
              <div className="client">
                <p>Client's Name</p>
                <span>{data?.clientName}</span>
              </div>
          </div>
          <div className="location">
            <p>Location of service</p>
            <span>{data?.location}</span>
          </div>
        </div>
        
      </div>

      {/* Buttons */}
      <div className="navigation-buttons">
        <button className="track button">Track your Booking</button>
        <button className="home button" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default SuccessfulBooking;
