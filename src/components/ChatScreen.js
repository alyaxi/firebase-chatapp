// src/components/ChatScreen.js

import React, { useEffect, useState } from "react";
import { db as firestore } from "../services/firebaseConfig";
import { Link, useParams } from "react-router-dom";
// import { chatRooms } from "../data/chatRooms";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";
import { fetchChatRooms } from "../services/db";

const ChatScreen = () => {
  const [chatrooms, setChatrooms] = useState([]);
  const params = useParams();
  console.log(params, "paramss");
  // console.log(chatRoom, "chatrooom");
  const [render, setRender] = useState(false);

  useEffect(() => {
    const data = fetchChatRooms()
      .then((x) => setChatrooms(x))
      .catch((err) => console.log(err));
  }, []);

  const chatRoom = chatrooms?.find((x) => x.id === params.id);
  console.log({ chatrooms });

  return (
    <div>
      <div>
        <Link to={"/"}>back to chat rooms</Link>
        <h2>{chatRoom?.title}</h2>
      </div>
      <div>
        <MessageList
          roomId={chatRoom?.id}
          render={render}
          setRender={setRender}
        />
        <ChatInput roomId={chatRoom?.id} setRender={setRender} />
      </div>
    </div>
  );
};

export default ChatScreen;
