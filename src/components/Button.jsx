import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../theme'
import { hp } from '../helper'


const Button = ({
    buttonStyle,
    textStyle,
    title='',
    onPress=()=>{},
 
}) => {

  

    

  return (
    <Pressable onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
    button:{
      backgroundColor:colors.rose,
      height:hp(6.6),
      justifyContent:"center",
      alignItems:"center",
      borderCurve:'continuous',
      borderRadius:20,
    },
    text:{
        fontSize:hp(2.5),
        color:'white',
        fontWeight:'bold',
    }
})