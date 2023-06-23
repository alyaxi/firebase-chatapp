import React, { useEffect, useRef, useState } from "react";
import { getMsgs } from "../services/db";
import { useAuth } from "../context/useAuth";

const MessageList = ({ roomId, render, setRender }) => {
  const [msg, setMsg] = useState([]);
  const { user } = useAuth();
  const containerRef = useRef(null);

  useEffect(() => {
    const data = getMsgs(roomId)
      .then((x) => {
        // const msgs = x.map(x => x)
        console.log(x, "ererexxxx");
        setMsg(x);
      })
      .catch((error) => console.log(error, "error"));
    console.log(data, "datatatat");
  }, [roomId, render]);
  console.log(msg, "msggsgsgsg");

  React.useLayoutEffect(() => {
    setRender(false);
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  });
  return (
    <div ref={containerRef}>
      <ul className="message-list">
        {msg?.map((x) => (
          <Message user={x} key={x.id} isOwnMessage={x.userId === user.uid} />
        ))}
      </ul>
    </div>
  );
};

function Message({ user, isOwnMessage }) {
  console.log(user, "messsagegegeg");
  const { username, message, timestamp, email } = user;
  return (
    <li className={["msg", isOwnMessage && "own-message"].join(" ")}>
      <h4 className="sender" style={isOwnMessage ? {color:"brown"}: {color:"yellow", display:"flex", marginRight: "auto"}}>{isOwnMessage ? "You:" : username}</h4>
      <h5>message: {message}</h5>
    </li>
  );
}

export default MessageList;
