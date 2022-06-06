interface Channel {
  id: number | string;
  name: string;
  participants: number;
  messages: Message[];
  onClick?: (id: number | string) => void;
}

interface Message {
  id: string | number;
  senderName: string;
  text: string;
  channel_id: string | number;
}
