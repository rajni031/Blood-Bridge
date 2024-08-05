// src/components/shared/BloodRequestForm.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitBloodRequest } from '../../redux/features/bloodRequest/bloodRequestSlice';
import API from '../../services/API';

const BloodRequestForm = () => {
  const [bloodType, setBloodType] = useState('');
  const [location, setLocation] = useState('');
  const [donorsNeeded, setDonorsNeeded] = useState(1);
  const [cause, setCause] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.bloodRequest);

  const handleSubmit = async(e) => {
    e.preventDefault();
    dispatch(submitBloodRequest({ bloodType, location, donorsNeeded, cause }));
    try {
      const response = await API.post('/api/blood-requests', requestData);
      if (response.data.success) {
        console.log('Request submitted successfully');
        // Clear form or give feedback to user
      } else {
        console.log('Request submission failed');
      }
    } catch (error) {
      console.error('Error submitting request', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Blood Type:</label>
        <input 
          type="text" 
          value={bloodType} 
          onChange={(e) => setBloodType(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Location:</label>
        <input 
          type="text" 
          value={location} 
          onChange={(e) => setLocation(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Donors Needed:</label>
        <input 
          type="number" 
          value={donorsNeeded} 
          onChange={(e) => setDonorsNeeded(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Cause:</label>
        <input 
          type="text" 
          value={cause} 
          onChange={(e) => setCause(e.target.value)} 
          required 
        />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? 'Submitting...' : 'Submit Request'}
      </button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default BloodRequestForm;
