import { Menu, X } from "lucide-react";
import "./Sidebar.css";

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      {/* Header */}
      <div className="sidebar-header">
        {isOpen && <h1 className="logo-text">T.I.V.A.</h1>}

        {/* SINGLE toggle button */}
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Content only visible when open */}
      {isOpen && (
        <>
          <button className="new-chat">+ New chat</button>

          <nav className="sidebar-nav">
            <span>Images</span>
            <span>Apps</span>
            <span>Projects</span>
          </nav>

          <div className="recent">
            <p className="recent-title">Recent</p>
            <p>Self tuning PFC unit</p>
            <p>React UI with CSS</p>
            <p>ChatGPT clone design</p>
            <p>Final year project ideas</p>
          </div>
        </>
      )}
    </aside>
  );
}
