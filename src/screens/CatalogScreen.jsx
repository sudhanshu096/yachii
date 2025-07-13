import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import ScreenWrapper from '../components/screenWrapper'
import { hp, wp } from '../helper'
import products from '../utils/data'
import { socketContext } from './context/socketContext'
import { colors } from '../theme'

const CatalogScreen = ({route, navigation}) => {
    const {roomID} = route.params;
    const {socket} = useContext(socketContext)
    const [scrollY, setScrollY] = useState(0)
    const scrollViewRef = useRef()
    useEffect(() => {
    socket.on('scroll', y => {
      scrollViewRef?.current?.scrollTo({ y, animated: false });
    });

    return () => socket.off('scroll');
  }, []);

    const handleScroll = e => {
    const y = e.nativeEvent.contentOffset.y;
    setScrollY(y);
    socket.emit('scroll', { roomID, y });
  };

  const handlePress = (name,image)=>{
    navigation.navigate('Chat', {roomID, name, image})
  }
  return (
  <ScreenWrapper bg="white">
      <View style={styles.container}>
        <ScrollView
        ref={scrollViewRef}
        onScroll={handleScroll}
         scrollEventThrottle={16}
        >
            {
                products.map((product)=>{
                   return(
                     <Pressable
                     onPress={()=>handlePress(product?.name, product?.image)}
                     key={product.id}
                     style={styles.card}
                    >

                        <Image
                         source={product?.image}
                         style={styles.productImage}
                        />
                        <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>{product.price}</Text>
          <Text style={styles.description}>{product.desc}</Text>

                    </Pressable>
                   )
                })
            }

        </ScrollView>
    </View>
  </ScreenWrapper>
  )
}

export default CatalogScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:wp(3)
    },
     card: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
  },
  productImage: { width: 100, height: 100, marginBottom: 10 },
  title: { fontSize: hp(2.4),color:colors.text, fontWeight: 'bold' },
  price:{
    fontSize:hp(2.2),
    color:colors.text
  },description:{
    color:colors.textLight,
    fontSize:hp(1.7)
  }
})