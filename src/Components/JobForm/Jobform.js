import React from 'react';
import './Jobform.css';

const JobForm = () => {
  return (
    <div className="job-form-container">
      <h1>Post A Job</h1>
      <form className="job-form">
        <div className="form-group">
          <label>Job Role/Position:</label>
          <input type="text"/>
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input type="text"/>
        </div>
        <div className="form-group">
          <label>Pay Range:</label>
          <input type="text"/>
        </div>
        <div className="form-group">
          <label>Job Description:</label>
          <textarea></textarea>
        </div>
        <button className="button btn-primary">Post without Promoting</button>
        <button className="button btn-secondary">Promote for a Fee</button>
      </form>
    </div>
  );
};

export default JobForm;
