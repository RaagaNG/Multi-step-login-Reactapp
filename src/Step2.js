import React, { useState } from 'react';

function Step2({ formData, setFormData, onNext }) {
  const [reviewed, setReviewed] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleReview = () => {
    setReviewed(true);
  };

  const handleSubmit = () => {
    onNext(); // This will move to the next step
  };

  return (
    <div>
      <h2>Step 2: Password</h2>
      <div>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
      </div>
      {reviewed ? (
        <div>
          <h3>Review:</h3>
          <p>First Name: {formData.firstName}</p>
          <p>Last Name: {formData.lastName}</p>
          <p>Date of Birth: {formData.dob}</p>
          <p>Password: {formData.password}</p>
          <button onClick={handleSubmit}>Submit</button> {/* This is the Submit button */}
        </div>
      ) : (
        <button onClick={handleReview}>Review</button>
      )}
    </div>
  );
}

export default Step2;
