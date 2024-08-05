
import { BiSolidDonateBlood, BiUserCircle } from "react-icons/bi";
import "../styles/Home.css"; // Import custom CSS for additional styles
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="main">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand h1" href="#home">
            <BiSolidDonateBlood color="red" size="1.5em" /> Blood Bridge
          </a>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <h5><li className="nav-item badge ">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              </h5>
              <h5>
              <li className="nav-item badge">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              </h5>
              <h5>
              <li className="nav-item badge">
                <Link className="nav-link" to="/service">
                  Services
                </Link>
              </li>
              </h5>
              <h5>
              <li className="nav-item badge">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
              </h5>
              <li className="nav-item badge">
                <Link className="nav-link" to="/login">
                  <BiUserCircle size="1.5em" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-danger" to="/register">
                  New Account
                </Link>
              </li>
              <li className="nav-item ms-3">
                <Link className="btn btn-primary" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        id="carouselExampleAutoplaying"
        className="carousel slide car-box"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active text-center py-5 ">
            <h1>Help Save a Life</h1>
            <h2>Give the Gift of Blood</h2>
           
          </div>
          <div className="carousel-item text-center py-5">
            <h1>Serve Humanity</h1>
            <h2>Give the Gift of Blood</h2>
          </div>
          <div className="carousel-item text-center py-5">
            <h1>Be a Volunteer</h1>
            <h2>Give the Gift of Blood</h2>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Articles Section */}
      <div className="container my-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img
                src="./src/assets/images/car5.png" 
                className="card-img-top"
                alt="Disease Protection"
              />
              <div className="card-body">
                <h5 className="card-title">Disease Protection</h5>
                <p className="card-text">
                  Donating blood beneficial and protects from various kinds of
                  diseases as it reduces the risk of cancer for the liver,
                  lungs, colon, stomach, etc.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src="./src/assets/images/car2.jpg" 
                className="card-img-top"
                alt="How To Donate?"
              />
              <div className="card-body">
                <h5 className="card-title">How To Donate?</h5>
                <p className="card-text">
                  Any person can walk in voluntarily any time round the clock or
                  after an appointment to donate blood in a licensed blood bank.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src="./src/assets/images/car4.jpg" 
                className="card-img-top"
                alt="Blood Types"
              />
              <div className="card-body">
                <h5 className="card-title">Blood Types</h5>
                <p className="card-text">
                  Blood types are inherited and represent contributions from
                  both parents. The four main blood types are A, B, AB, and O.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-light text-center py-5">
        <div className="container">
          <a className="btn btn-success" href="https://wa.me/9609010045">
            <i className="bi bi-whatsapp"></i> +91 9877015146
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <div className="container">
          <div className="row">
            <div className="col">
              <h5>BLOOD BRIDGE</h5>
              <p>
                Bloodana Chettiy, Developed in association with Sikkhatri
                Infotech Pvt.Ltd.
              </p>
              <p>
                <i className="bi bi-telephone-fill"></i> +8944880309,+91 9877015146 <br />
                <i className="bi bi-envelope-fill"></i> bloodbank@org <br />
                <i className="bi bi-geo-alt-fill"></i> Hoshiarpur, Punjab 146111
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
