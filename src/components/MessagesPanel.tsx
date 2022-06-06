import React, { useState } from "react";
import Message from "./Message";

interface MessagesPanelProps {
  channel?: {
    id: number | string;
    messages: any[];
  };

  onSendMessage: (channel_id: number | string, input: string) => void;
}

const MessagesPanel: React.FC<MessagesPanelProps> = ({
  channel,
  onSendMessage,
}) => {
  const [input, setInput] = useState("");

  const send = () => {
    if (input && input != "" && channel) {
      onSendMessage(channel.id, input);
      setInput("");
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  let list: any = (
    <div className="no-content-message">There is no messages to show</div>
  );
  if (channel && channel?.messages) {
    list = channel.messages.map((m) => (
      <Message
        key={m.id}
        id={m.id}
        senderName={m.senderName}
        text={m.text}
      ></Message>
    ));
  }
  return (
    <div className="messages-panel">
      <div className="meesages-list">{list}</div>
      {channel && (
        <div className="messages-input">
          <input onChange={handleInput} type="text"></input>
          <button>Send</button>
        </div>
      )}
    </div>
  );
};

export default MessagesPanel;
