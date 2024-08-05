import { Routes, Route } from "react-router-dom";
import Register from "./pages/auth/Register";
import Sign from "./pages/auth/Sign";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import PublicRoute from "./components/Routes/PublicRoute";
// import Donar from "./pages/Dashboard/Donar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Home />
            </PublicRoute>
          }
        />
        <Route
          path="/about"
          element={
            <PublicRoute>
              <About />
            </PublicRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <PublicRoute>
              <Contact />
            </PublicRoute>
          }
        />
        <Route
          path="/service"
          element={
            <PublicRoute>
              <Service />
            </PublicRoute>
          }
        />
        {/* <Route
          path="/donar"
          element={
             <ProtectedRoute>
              <Donar />
             </ProtectedRoute>
          }
        /> */}

        <Route path="/dashboard" element={<ProtectedRoute />} />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Sign />
            </PublicRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
