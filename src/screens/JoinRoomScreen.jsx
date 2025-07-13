import { Alert, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import ScreenWrapper from '../components/screenWrapper'
import { hp, wp } from '../helper'
import { colors } from '../theme'
import Input from '../components/Input'
import Button from '../components/Button'
import { socketContext } from './context/socketContext'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { createRoom } from '../api/apiCall'

const JoinRoomScreen = () => {
    const router = useNavigation()
    const [name, setName] = useState('')
    const {socket} = useContext(socketContext)

    const createAndjoinRoom = async()=>{
       if(!name){
        Alert.alert('Sorry', 'Please enter a name')
        return;
       }
       if(!name.trim()) return;
         const roomId = await createRoom();
         socket.emit('join-room', roomId)
          router.navigate('Catalog', { roomId, name });
          setName('')

        
    }
  return (
    <ScreenWrapper bg={'white'}>
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'}/>
        <View style={styles.container}>

             <View style={styles.center}>
                <Text style={styles.title}>Enter Your Name:</Text>
                <Input
                  placeholder="Name"
                  value={name}
                  onChangeText={(val)=>setName(val)}
                />
               <View style={{width:"100%"}}>
               <Button
                 title='Join Room'
                 onPress={()=>createAndjoinRoom()}
                />
               </View>
             </View>
      
    </View>
    </ScreenWrapper>
  )
}

export default JoinRoomScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:wp(3)
    },
    center:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        gap:20
    },
    title:{
        fontSize:hp(3),
        color:colors.text,
        fontWeight:'bold'
    }
})