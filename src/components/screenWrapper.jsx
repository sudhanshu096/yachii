import { View, Text } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const ScreenWrapper = ({children, bg, inChat=false}) => {

    const {top} = useSafeAreaInsets();
      const paddingTop = inChat ? 0 : (top > 0 ? top + 5 : 20);
  return (
    <View style={{flex:1, paddingTop: paddingTop, backgroundColor:bg }}>
      
     {
        children
     }
    </View>
  )
}

export default ScreenWrapper