import React from "react";

const Channel: React.FC<Channel> = ({ name, participants }) => {
  return (
    <div className="channel-item">
      <div>{name}</div>
      <span>{participants}</span>
    </div>
  );
};

export default Channel;
