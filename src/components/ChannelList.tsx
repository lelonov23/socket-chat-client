import React from "react";
import Channel from "./Channel";

interface ChannelListProps {
  channels: Channel[];
}

const ChannelList: React.FC<ChannelListProps> = ({ channels }) => {
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
            />
          );
        })}
      {!channels && <p>There are no channels to display</p>}
    </div>
  );
};

export default ChannelList;
