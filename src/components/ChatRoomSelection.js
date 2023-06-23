import React, { useEffect, useState } from "react";
// import { chatRooms } from "../data/chatRooms";
import { Link } from "react-router-dom";
import { fetchChatRooms } from "../services/db";
import CreatenewRoom from "./CreatenewRoom";

function ChatRoomSelection() {
  const [chatrooms, setChatrooms] = useState([]);
  useEffect(() => {
    const data = fetchChatRooms()
      .then((x) => setChatrooms(x))
      .catch((err) => console.log(err));
  }, []);

  console.log({ chatrooms });
  return (
    <div>
      <div>
        <CreatenewRoom />
      </div>
      <h2>ChatRoom</h2>
      <div>
        {chatrooms?.map((x) => {
          return (
            <li key={x.id}>
              <Link
                to={`/chatroom/${x.id}`}
                style={{ color: "white", cursor: "pointer" }}
              >
                {x.title}
              </Link>
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default ChatRoomSelection;
