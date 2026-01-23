import "./Navbar.css";
import { FaBars } from "react-icons/fa";

export default function Navbar({ toggleSidebar }) {
  return (
    <header className="navbar">
      <button className="menu-btn" onClick={toggleSidebar}>
        <FaBars />
      </button>
      
      <button className="offer">Free offer</button>
    </header>
  );
}
