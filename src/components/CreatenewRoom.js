import React, { useState } from "react";
const axios = require("axios");

const CreatenewRoom = () => {
  const [newChatRoom, setNewChatRoom] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post("https://function-url/createChatRoom", {
        chatRoomName: newChatRoom,
      });
      console.log(response.data.message);
    } catch (error) {
      console.error("Error creating chat room:", error.response.data.error);
    }
  };

  const handleChange = (e) => {
    setNewChatRoom(e.target.value);
  };
  console.log({ newChatRoom });

  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="Enter Chat Room Name"
          onChange={handleChange}
          style={{ color: "black" }}
        ></input>
        <button onClick={handleSubmit} style={{ color: "black" }}>
          Create New room
        </button>
      </form>
    </div>
  );
};

export default CreatenewRoom;
