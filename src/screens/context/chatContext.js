// context/chatContext.js
import React, { createContext, useState } from 'react';

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [chatMessages, setChatMessages] = useState({}); // key = roomID

  const addMessage = (roomID, message) => {
    setChatMessages(prev => ({
      ...prev,
      [roomID]: [...(prev[roomID] || []), message],
    }));
  };

  const getMessages = (roomID) => {
    return chatMessages[roomID] || [];
  };

  return (
    <ChatContext.Provider value={{ chatMessages, addMessage, getMessages }}>
      {children}
    </ChatContext.Provider>
  );
};
