import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./BookingService.css";

const BookingService = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const services = [
    "Plumbing service",
    "Cleaning service",
    "Carpentry service",
    "Electrical Repairer",
    "Painter",
    "Tailors",
  ];

  const [selectedService, setSelectedService] = useState("Plumbing service");

  const handleNext = () => {
    // Example data you want to pass
    const bookingData = {
      orderId: "987654321",
      artisanName: "John Doe",
      serviceType: selectedService,
      clientName: "Jane Smith",
      location: "24 Engineering Drive, Yaba, Lagos",
    };
  
    // Navigate to the SuccessfulBooking page and pass the data as state
    navigate("/PaymentSummary", { state: { data: bookingData } });
  };
  
  return (
    <div className="service-selector container">
      <button className="back-button">
        <img src="/images/back-button.png" alt="Back" />
      </button>
      <h2 className="title">Book Services</h2>

      <div className="services-list">
        {services.map((service, index) => (
          <button
            key={index}
            className={`service-button ${
              selectedService === service ? "active" : ""
            }`}
            onClick={() => setSelectedService(service)}
          >
            {service}
            <span
              className={`radio-dot ${
                selectedService === service ? "selected" : ""
              }`}
            ></span>
          </button>
        ))}
      </div>

      <div className="navigation-buttons">
        <button className="next button" onClick={handleNext}>
          Next
        </button>
        <button className="continue button" onClick={handleNext}>Continue</button>
      </div>
    </div>
  );
};

export default BookingService;
