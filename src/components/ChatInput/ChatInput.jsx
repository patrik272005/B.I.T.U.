import "./ChatInput.css";
import { LuSendHorizontal } from "react-icons/lu";
import { FaMicrophone } from "react-icons/fa";

export default function ChatInput() {
  return (
    <div className="input-wrapper">
      <div className="input-box">
        <button className="icon-btn left">＋</button>

        <input
          type="text"
          placeholder="Ask B.I.T.U. anything..."
        />

        <button className="icon-btn right"><FaMicrophone /></button>
        <button className="icon-btn right"><LuSendHorizontal /></button>
      </div>
    </div>
  );
}
