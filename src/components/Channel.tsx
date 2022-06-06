import React from "react";

const Channel: React.FC<Channel> = ({ id, name, participants, onClick }) => {
  const click = () => {
    onClick && onClick(id);
  };

  return (
    <div className="channel-item" onClick={click}>
      <div>{name}</div>
      <span>{participants}</span>
    </div>
  );
};

export default Channel;
