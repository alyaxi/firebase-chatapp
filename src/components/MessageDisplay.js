import React from "react";

const MessageDisplay = ({ user, isOwnMessage }) => {
  console.log(user, "messsagegegeg");
  const { username, message, timestamp, email } = user;
  return (
    <li className={["msg", isOwnMessage && "own-message"].join(" ")}>
      <h4
        className="sender"
        style={
          isOwnMessage
            ? { color: "brown" }
            : { color: "yellow", display: "flex", marginRight: "auto" }
        }
      >
        {isOwnMessage ? "You:" : username}
      </h4>
      <h5>message: {message}</h5>
    </li>
  );
};

export default MessageDisplay;
