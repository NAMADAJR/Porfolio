import "../App.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/home">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contacts</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
