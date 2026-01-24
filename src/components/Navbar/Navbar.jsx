import "./Navbar.css";
import { FaBars } from "react-icons/fa";

export default function Navbar({ toggleSidebar }) {
  return (
    <header className="navbar">
      <button className="menu-btn" onClick={toggleSidebar} aria-label="Toggle sidebar">
        <FaBars />
      </button>
      
      <button className="offer">Free offer</button>
    </header>
  );
}
