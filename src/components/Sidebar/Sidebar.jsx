import ChatHistory from "./ChatHistory";
import "./Sidebar.css";
import { RiChatNewLine } from "react-icons/ri";
import { IoImage, IoApps } from "react-icons/io5";
import { GoProjectTemplate } from "react-icons/go";
import { FaTimes } from "react-icons/fa";

export default function Sidebar({ open, closeSidebar, toggleSidebar }) {
  const chats = [
    "Self tuning PFC unit",
    "React UI with CSS",
    "ChatGPT clone design",
    "Final year project ideas"
  ];

  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      <div className="sidebar-header">
        <h2 className="logo">T.I.V.A.</h2>
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>

      <button className="new-chat"><RiChatNewLine /> New chat</button>

      <nav className="menu">
        <div className="menu-item"><IoImage /> Images</div>
        <div className="menu-item"><IoApps /> Apps</div>
        <div className="menu-item"><GoProjectTemplate /> Projects</div>
        
      </nav>

      <ChatHistory chats={chats} />
    </aside>
  );
}
