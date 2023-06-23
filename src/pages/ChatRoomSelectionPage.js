import React from "react";
import { Route, Routes } from "react-router-dom";
import ChatRoomSelection from "../components/ChatRoomSelection";
// import ChatScreen from '../components/ChatScreen'
import ChatRoomPage from "./ChatRoomPage";

const ChatRoomSelectionPage = () => {
  return (
    <div>
      <Routes>
        <Route index path="/" element={<ChatRoomSelection />} />
        <Route path="/chatroom/:id" element={<ChatRoomPage />} />
      </Routes>
    </div>
  );
};

export default ChatRoomSelectionPage;
