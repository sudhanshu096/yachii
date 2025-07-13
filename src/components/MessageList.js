import { View, Text,StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import MessageItem from './MessageItem'
import { dummyMessages } from '../utils/data'
import { colors } from '../theme'

const MessageList = ({messages, currentUser, scrollViewRef}) => {
    const isEmpty = !messages || messages.length === 0;
  return (
    <ScrollView ref={scrollViewRef}
     showsVerticalScrollIndicator={false}
    contentContainerStyle={isEmpty ? styles.emptyContainer : styles.messageContainer}>
      {
        isEmpty &&(
          <View style={styles.emptyContent}>
            <Text style={{color:colors.textLight}}>Let's conversate for this....👋</Text>
          </View>
        )
      }
    {
     messages && messages.map((message, index)=>{
          return <MessageItem message={message} key={index} currentUser={currentUser}/>
      })
    }
  </ScrollView>
  )
}

export default MessageList

const styles = StyleSheet.create({
   messageContainer: {
    paddingTop: 10,
  },
  emptyContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyContent: {
    alignItems: 'center',
  },
})