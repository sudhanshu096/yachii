import { View, Text } from 'react-native'
import React from 'react'
import AppNavigation from './src/appNavigation'
import { SocketProvider } from './src/screens/context/socketContext'
import { ChatProvider } from './src/screens/context/chatContext'

export default function App() {
  return (
  <SocketProvider>
    <ChatProvider>
       <AppNavigation/>
    </ChatProvider>
     
  </SocketProvider>
  )
}