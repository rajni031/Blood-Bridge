import { useSelector } from "react-redux";
// import Spinner from "../../components/shared/spinner";
import Layout from "../../components/shared/Layout/Layout";
import Modal from "../../components/shared/modal/Modal";
import {useEffect,useState} from 'react'
import API from "../../services/API";
// import { useNavigate } from "react-router-dom";
import moment from 'moment'


const AdminDashboard = () => {
  const {  error } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
//   const navigate = useNavigate();

  //get function
  // const getBloodRecords = async () => {
  //   try {
  //     const { data } = await API.get("/inventory/get-inventory");
  //     if (data?.success) {
  //       setData(data?.inventory);
  //       // console.log(data);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getBloodRecords();
  // }, []);
  
  return (
    <Layout>
      {error && <span>{alert(error)}</span>}
      
        <div className="main">
          <h4
            className="'ms-4"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            style={{cursor:'pointer'}}
          >
            <i className="fa-solid fa-plus text-success py-4" /> Add Inventory
          </h4>
          <table className="table ">
              <thead>
                <tr>
                  <th scope="col">Blood Group</th>
                  <th scope="col">Inventory Type</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Donar Email</th>
                  <th scope="col">TIme & Date</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((record) => (
                  <tr key={record._id}>
                    <td>{record.bloodGroup}</td>
                    <td>{record.inventoryType}</td>
                    <td>{record.quantity} (ML)</td>
                    <td>{record.email}</td>
                    <td>
                      {moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          <Modal/>
        </div>
      
    </Layout>
  );
};

export default AdminDashboard;


// import { useDispatch, useSelector,useEffect} from 'react-redux';
// // import { fetchAdminData } from '../../redux/features/admin/adminActions'; // create this actio
// import Sidebar from '../../components/shared/Layout/Sidebar';
// // import '../../../styles/AdminDashboard.css';

// const AdminDashboard = () => {
//   const dispatch = useDispatch();
//   // const { totalDonors, totalRequests } = useSelector((state) => state.admin);

//   useEffect(() => {
//     // dispatch(fetchAdminData());
//   }, [dispatch]);

//   return (
//     <div className="admin-dashboard">
//       <Sidebar />
//       <div className="dashboard-content">
//         <h1>Blood Bridge Admin Dashboard</h1>
//         <div className="stats">
//           <div className="stat-item">
//             <h2>Total Donors</h2>
//             {/* <p>{totalDonors}</p> */}
//           </div>
//           <div className="stat-item">
//             <h2>Total Requests</h2>
//             {/* <p>{totalRequests}</p> */}
//           </div>
//         </div>
//         <div className="blood-types">
//           <div className="blood-type">A+ <span className="blood-drop">🩸</span></div>
//           <div className="blood-type">B+ <span className="blood-drop">🩸</span></div>
//           <div className="blood-type">O+ <span className="blood-drop">🩸</span></div>
//           <div className="blood-type">AB+ <span className="blood-drop">🩸</span></div>
//           <div className="blood-type">A- <span className="blood-drop">🩸</span></div>
//           <div className="blood-type">B- <span className="blood-drop">🩸</span></div>
//           <div className="blood-type">O- <span className="blood-drop">🩸</span></div>
//           <div className="blood-type">AB- <span className="blood-drop">🩸</span></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

