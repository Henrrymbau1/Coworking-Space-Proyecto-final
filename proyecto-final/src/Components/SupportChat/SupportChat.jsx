import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css';
import "./SupportChat.scss"
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';

function SupportChat() {
  const [show, setShow] = useState(true)

  const showChat = () => {
    setShow((show) => !show)

  }

  return (
    <div>
      <button onClick={showChat}>Show</button>
      <div className="chatbot" style={{ display: show ? "flex" : "none" }}>
        <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
      </div>
    </div >
  );
}
export default SupportChat;
