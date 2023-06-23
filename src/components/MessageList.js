import React, { useEffect, useRef, useState } from "react";
import { getMsgs } from "../services/db";
import { useAuth } from "../context/useAuth";
import MessageDisplay from "./MessageDisplay";

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
          <MessageDisplay user={x} key={x.id} isOwnMessage={x.userId === user.uid} />
        ))}
      </ul>
    </div>
  );
};



export default MessageList;
