import React from "react";
import Channel from "./Channel";

interface ChannelListProps {
  channels: Channel[];
  onSelectChannel: (id: string | number) => void;
}

const ChannelList: React.FC<ChannelListProps> = ({
  channels,
  onSelectChannel,
}) => {
  const handleClick = (id: number | string) => {
    onSelectChannel(id);
  };

  return (
    <div className="channel-list">
      {channels &&
        channels.map((c) => {
          return (
            <Channel
              key={c.id}
              id={c.id}
              name={c.name}
              participants={c.participants}
              messages={c.messages}
              onClick={handleClick}
            />
          );
        })}
      {!channels && <p>There are no channels to display</p>}
    </div>
  );
};

export default ChannelList;
