// import { useEffect,useState } from "react";
// import Layout from "../../components/shared/Layout/Layout";
// import API from "../../services/API";

// const UserDashboard = () => {
//   const [data, setData] = useState([]);
//   const getDonars = async () => {
//     try {
//       const { data } = await API.get('/inventory/get-donars')
//         console.log(data);
//       if (data?.success) {
//         setData(data?.donars);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getDonars();
//   }, []);
  
//   return (
//     <Layout>
//       <h4>User only </h4>
//     </Layout>
//   )
// }

// export default UserDashboard
// client/src/pages/Dashboard/UserDashboard.jsx

import React, { useEffect, useState } from 'react';
import Layout from '../../components/shared/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../../redux/features/auth/authAction';
import BloodRequestForm from '../../components/shared/BloodRequestForm';
import API from '../../services/API';
import '../../styles/UserDashboard.css';  // Importing the CSS file

const UserDashboard = () => {
  const [data, setData] = useState([]);

  const getDonors = async () => {
    try {
      const response = await API.get('/inventory/get-donors');
      if (response.data?.success) {
        ;setData(response.data?.donors);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDonors();
  }, [])
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      dispatch(getCurrentUser());
    }
  }, [dispatch, user]);

  return (
    <Layout>
      <div className="dashboard">
        <h2>User Dashboard</h2>
        <div className="form-section">
          <h3>Request for Blood</h3>
          <BloodRequestForm />
        </div>
        <div className="donors-section">
          <h3>Available Donors</h3>
          {data.length > 0 ? (
            <ul>
              {data.map((donor) => (
                <li key={donor._id}>{donor.name} - {donor.bloodType}</li>
              ))}
            </ul>
          ) : (
            <p>No donors available</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default UserDashboard;
