import React from 'react'
import { Image, View,StyleSheet } from 'react-native'

const Avatar = () => {
  return (
    <View style={styles.avatar}>
        <Image style={styles.avatar__image} source={require('./../assets/person.jpg')}/>
    </View>
  )
}
const styles = StyleSheet.create({
 avatar:{

    width:42,
    height:42
 },
 avatar__image:{
    width:"100%",
    height:"100%",
    borderRadius:"50%",
 }
})
export default Avatar