import React from "react";
import "./App.css";
import socketClient from "socket.io-client";
import Chat from "./components/Chat";

function App() {
  const SERVER = "http://127.0.0.1:8080";
  const socket = socketClient(SERVER);

  socket.on("connection", () => {
    console.log("Connected to backend!");
  });

  return (
    <div className="App">
      <Chat />
    </div>
  );
}

export default App;
