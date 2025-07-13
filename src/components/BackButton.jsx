import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from '../assets/icons'
import { colors } from '../theme'


const BackButton = ({size=26, router}) => {
  return (
    <Pressable onPress={()=>router.goBack()} style={styles.button}>
      <Icon name="arrowLeft" strokeWidth={2.5} size={size} color={colors.text}/>
    </Pressable>
  )
}

export default BackButton

const styles = StyleSheet.create({
    button:{
        alignSelf:"flex-start",
        padding:5,
        borderRadius:10,
        backgroundColor:'rgba(255,255,255,0.7)'
        
    }
})