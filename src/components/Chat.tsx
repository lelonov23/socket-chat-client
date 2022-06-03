import React, { useState } from "react";
import ChannelList from "./ChannelList";
import "./chat.scss";

const Chat: React.FC = () => {
  const [channels, setChannels] = useState<Channel[]>([
    { id: 1, name: "first", participants: 10 },
  ]);

  return (
    <div className="chat-app">
      <ChannelList channels={channels}></ChannelList>
    </div>
  );
};

export default Chat;
