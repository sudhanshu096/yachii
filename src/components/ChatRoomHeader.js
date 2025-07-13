import { View, Text, Pressable, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

import BackButton from './BackButton'

import Icon from '../assets/icons'
import { hp, wp } from '../helper'
import { colors } from '../theme'



export default function ChatRoomHeader({router, name, image}) {
  
  
    
  return (
    <View style={styles.container}>
        <View style={styles.leftView}>
          <BackButton router={router}/>
          <View style={styles.leftcontent}>
                <Image
                 source={image}
                 style={{height:hp(6), width:hp(6),borderRadius:100}}
                />

               <View>
               <Text style={{fontSize:hp(2.5), color:colors.textLight, fontWeight:"500"}}>{name}</Text>
               
               </View>
                

            </View>
            
        </View>

        



    </View>
  )
}    
const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
         paddingHorizontal:wp(4),
         paddingTop:wp(5),
    },
    leftView:{
        flexDirection:"row",
        alignItems:"center",
        gap:5
    },
    leftcontent:{
        flexDirection:"row",
        alignItems:"center",
        gap:4
    },
    rightView:{
        flexDirection:"row",
        alignItems:"center",
        gap:8
    }
})