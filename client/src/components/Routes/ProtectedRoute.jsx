/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../redux/features/auth/authAction";
import API from "../../services/API";
import { Navigate } from "react-router-dom";
import Spinner from "../shared/spinner";
import DonarDashboard from "../../pages/Dashboard/DonarDashboard.jsx";
import AdminDashboard from "../../pages/Dashboard/AdminDashboard.jsx";
import UserDashboard from "../../pages/Dashboard/UserDashboard.jsx";

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { user } = useSelector((state) => state.auth);
  // console.log(user.role)
  const getUser = async () => {
    try {
      const { data } = await API.get("/auth/current-user");
      if (data?.success) {
        dispatch(getCurrentUser(data));
      }
    } catch (error) {
      localStorage.clear();
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  },[]);

  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" />;
  }
  if (loading) {
    return <Spinner />;
  }

  if (user?.role === "donar") {
    return <DonarDashboard />;
  }
  if (user?.role === "admin") {
    return <AdminDashboard/>;
  }
  if (user?.role === "user") {
    return <UserDashboard/>;
  }
  return children;
};

export default ProtectedRoute;
