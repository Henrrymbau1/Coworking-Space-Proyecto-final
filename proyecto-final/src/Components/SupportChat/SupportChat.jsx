import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit'
import "./SupportChat.scss"
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';
import { BsFillChatLeftDotsFill } from 'react-icons/bs';

function SupportChat() {
  const [number, setNumber] = useState(0);
  const style = { size: '100px' }




  return (
    <div className='chatbot'>
    {number !== 1 ? ( <>
    <BsFillChatLeftDotsFill style={style}  onClick={() => setNumber(1)} />
    <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser}></Chatbot>
    </>
    ): number === 1 && 
     <BsFillChatLeftDotsFill style={{size:"100px"}} onClick={() => setNumber(0)}/ >
          }
    </div>
  );
}
export default SupportChat;
