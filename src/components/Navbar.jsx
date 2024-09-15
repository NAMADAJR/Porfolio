import "../App.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li>
            <NavLink to="/scenery">Scenery</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
