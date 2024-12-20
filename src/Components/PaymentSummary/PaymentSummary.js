import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./PaymentSummary.css"; 

const PaymentSummary = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Use useLocation to access the state

  // Example data for rendering
  const paymentData = {
    artisanName: "Michael Smith",
    serviceType: "Plumbing Services",
    clientName: "Umar Yahaya",
    location: "13, God is Good Street, Isolo, Lagos State",
    taxes: "NGN 20.96",
    discount: "NGN 0.00",
    totalPayment: "NGN 10,000",
    totalCost: "NGN 10,020.96",
  };

    // Access data from the location state
    const { data } = location.state || {}; // If no state, fallback to empty object

  return (
    <div className="app-container payment-container">
      {/* Back Button */}
      <button
        className="back-button"
        onClick={() => navigate(-1)} // Go to the previous page
      >
        <img src="/images/back-button.png" alt="Back" />
      </button>

      {/* Payment Page Content */}
      <h2 className="title">Payment</h2>

        {/* Order Summary */}
        <div className="order-summary">
            <div class="change">
                <h4>Booking Summary </h4>
                <div className="change-button">
                    Change
                </div>
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

      {/* Payment Summary */}
      <div className="order-summary payment-summary">
        <p>
          <strong>Taxes</strong> <span>{paymentData.taxes}</span>
        </p>
        <p>
          <strong>Discount</strong> <span>{paymentData.discount}</span>
        </p>
        <p>
          <strong>Total Payment</strong> <span>{paymentData.totalPayment}</span>
        </p>
      </div>

      {/* Payment Options */}
      <div className="payment-options">
        <div>
          <input type="radio" name="payment" id="wallet" defaultChecked />
          <label htmlFor="wallet">IFX Wallet</label>
        </div>
        <div>
          <input type="radio" name="payment" id="card" />
          <label htmlFor="card">Card Option</label>
        </div>
        <p className="service-cost">Service cost</p>
      </div>

      {/* Total Amount */}
      <h3 className="total-cost">{paymentData.totalCost} ▼</h3>

      {/* Place Order Button */}
      <button className="place-order-btn" onClick={() => navigate("/SuccessfulBooking")}>
        Place Order
      </button>
    </div>
  );
};

export default PaymentSummary;
