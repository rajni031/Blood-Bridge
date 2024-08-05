import { BiSolidDonateBlood, BiUserCircle } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  //logout handler
  const handleLogout = () => {
    localStorage.clear();
    alert("Logout Successfully");
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-brand h1">
            <BiSolidDonateBlood color="red" />
            Blood Bridge
          </div>
          <ul className="navbar-nav flex-row">
            <li className="nav-item">
              <p className="nav-link">
                {" "}
                <BiUserCircle />
                Welcome {user?.name} &nbsp;
               <span className="badge text-bg-secondary">{user?.role}</span>
              </p>
            </li>
            <li className="nav-item ms-3">
              <button className="btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
