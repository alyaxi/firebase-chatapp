import React from "react";
import { useAuth } from "../context/useAuth";
import { sendMessage } from "../services/db";

const ChatInput = ({ roomId, setRender }) => {
  const { user } = useAuth();
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(roomId, user, value);
    setRender(true);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="type a message"
        value={value}
        onChange={handleChange}
        required
        minLength={1}
        style={{ color: "black" }}
      />
      <button type="submit" disabled={value < 1}>
        Send
      </button>
    </form>
  );
};
export default ChatInput;
