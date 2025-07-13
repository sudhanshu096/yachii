import { StyleSheet, View } from 'react-native'
import React, { useContext, useRef } from 'react'
import ChatRoomHeader from '../components/ChatRoomHeader'
import { socketContext } from './context/socketContext';
import ScreenWrapper from '../components/screenWrapper';
import Input from '../components/Input';
import Icon from '../assets/icons';
import { wp } from '../helper';
import MessageList from '../components/MessageList';
import { ChatContext } from './context/chatContext';

const ChatScreen = ({ route, navigation }) => {
  const { addMessage, chatMessages } = useContext(ChatContext);
  const { roomID, name, image } = route.params;
  const { socket } = useContext(socketContext);
  const messages = chatMessages[roomID] || [];

  const textRef = useRef('');
  const inputRef = useRef(null);
  const scrollViewRef = useRef(null);

  React.useEffect(() => {
    if (!socket) return;

    socket.emit('joinRoom', roomID);

    socket.on('message', (msg) => {
      addMessage(roomID, msg);
    });

    return () => {
      socket.emit('leaveRoom', roomID);
      socket.off('message');
    };
  }, [socket, roomID]);

  const handleMessageSend = () => {
    const text = textRef.current?.trim();
    if (!text) return;

    const msgData = {
      roomID,
      text,
      userId: socket?.id,
      time: new Date().toLocaleTimeString(),
    };

    socket.emit('message', msgData);
    addMessage(roomID, msgData);

    inputRef.current?.clear();
    textRef.current = '';
  };

  return (
    <ScreenWrapper bg={'white'}>
      <ChatRoomHeader name={name} image={image} router={navigation} />
      <View style={{ flex: 1 }}>
        <MessageList
          scrollViewRef={scrollViewRef}
          messages={messages}
          currentUser={socket?.id}
        />
      </View>
      <View style={styles.inputContainer}>
        <Input
          inputRef={inputRef}
          addIcon={<Icon name="send" size={26} strokeWidth={1.6} />}
          addIcon2={<Icon name="image" size={26} strokeWidth={1.6} />}
          onPress={handleMessageSend}
          placeholder="Type message..."
          onChangeText={value => {
            textRef.current = value;
          }}
        />
      </View>
    </ScreenWrapper>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  inputContainer: {
    width: wp(90),
    alignSelf: 'center',
    paddingHorizontal: wp(2),
    paddingBottom: wp(1.7),
  },
});
