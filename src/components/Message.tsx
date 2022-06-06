import React from "react";

interface MessageProps {
  id: number;
  text: string;
  senderName: string;
}

const Message: React.FC<MessageProps> = ({ text, senderName }) => {
  return (
    <div className="message-item">
      <p className="sender-name">{senderName}</p>
      <span>{text}</span>
    </div>
  );
};

export default Message;
