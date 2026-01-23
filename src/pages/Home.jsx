import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import Container from "../components/Container/Container";
import ChatInput from "../components/ChatInput/ChatInput";
import "./Home.css";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [chats, setChats] = useState([
    { title: "New chat", messages: [] }
  ]);

  const [activeChat, setActiveChat] = useState(0);

  const sendMessage = (text) => {
    const updatedChats = [...chats];

    updatedChats[activeChat].messages.push(
      { role: "user", text },
      { role: "ai", text: "This is a sample AI response." }
    );

    setChats(updatedChats);
  };

  return (
    <div className="app">
      <Sidebar
        open={sidebarOpen}
        chats={chats}
        setChats={setChats}
        setActiveChat={setActiveChat}
        closeSidebar={() => setSidebarOpen(false)}
      />

      <div className="main">
        <Navbar toggleSidebar={() => setSidebarOpen((prev) => !prev)} />
        <Container messages={chats[activeChat].messages} />
        <ChatInput onSend={sendMessage} />
      </div>
    </div>
  );
}
