import { View, Image, Text, StyleSheet } from 'react-native';
import React from 'react';

import { colors } from '../theme';
import { hp, wp } from '../helper';


export default function MessageItem({ message, currentUser }) {
  const isMyMessage = currentUser?.userId === message?.userId;
  const containerStyle = isMyMessage ? styles.myMessage : styles.otherMessageContainer;
  const bubbleStyle = isMyMessage ? styles.myBubble : styles.otherBubble;
  const textColor = isMyMessage ? colors.white : colors.white;

  return (
    <View style={containerStyle}>
      <View style={bubbleStyle}>
       
        {message?.text && (
          <Text style={[styles.messageText, { color: textColor }]}>
            {message.text}
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  myMessage: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: hp(1.2),
    marginRight: wp(2),
  },
  otherMessageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: hp(1.2),
    marginLeft: wp(2),
  },
  myBubble: {
    backgroundColor: colors.rose,
    borderRadius: 10,
    borderWidth: 0.7,
    borderColor: colors.rose,
    padding: 8,
    paddingHorizontal: wp(4),
    maxWidth: wp(80),
  },
  otherBubble: {
    backgroundColor: colors.rose,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.roseLight,
    padding: 8,
    paddingHorizontal: wp(4),
    maxWidth: wp(80),
  },
  messageText: {
    fontSize: hp(1.9),
    marginTop: 4,
  },
  messageImage: {
    width: wp(60),
    height: hp(25),
    borderRadius: 10,
    marginBottom: 4,
  }
});
