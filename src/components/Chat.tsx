import React, { useEffect, useState } from "react";
import socketClient, { Socket } from "socket.io-client";
import ChannelList from "./ChannelList";
import "./chat.scss";
import MessagesPanel from "./MessagesPanel";

const Chat: React.FC = () => {
  const [channels, setChannels] = useState<Channel[]>([]);
  const [channel, setChannel] = useState<Channel>();
  const [socket, setSocket] = useState<Socket>();

  const loadChannels = async () => {
    const res = await fetch("http://localhost:8080/getChannels");
    const data = await res.json();
    setChannels(data.channels);
  };

  useEffect(() => {
    loadChannels();
    configureSocket();
  }, []);

  const handleChannelSelect = (id: string | number) => {
    let channel = channels.find((c) => {
      return c.id === id;
    });
    if (channel) setChannel(channel);
    socket?.emit("channel-join", id, (ack: any) => {});
  };

  const handleSendMessage = (channel_id: string | number, text: string) => {
    socket?.emit("send-message", {
      channel_id,
      text,
      senderName: socket.id,
      id: Date.now(),
    });
  };

  function configureSocket() {
    const SERVER = "http://127.0.0.1:8080";
    const socket = socketClient(SERVER);

    socket.on("connection", () => {
      if (channel) handleChannelSelect(channel.id);
    });

    socket.on("channel", (channel) => {
      let stateChannels = channels;
      stateChannels.forEach((c) => {
        if (c.id === channel.id) {
          c.participants = channel.participants;
        }
      });
      setChannels(stateChannels);
    });

    socket.on("message", (message) => {
      let stateChannels = channels;
      stateChannels.forEach((c) => {
        if (c.id === message.channel_id) {
          if (!c.messages) {
            c.messages = [message];
          } else {
            c.messages.push(message);
          }
        }
      });
      setChannels(stateChannels);
    });

    setSocket(socket);
  }

  return (
    <div className="chat-app">
      <ChannelList
        channels={channels}
        onSelectChannel={handleChannelSelect}
      ></ChannelList>
      <MessagesPanel
        onSendMessage={handleSendMessage}
        channel={channel}
      ></MessagesPanel>
    </div>
  );
};

export default Chat;
