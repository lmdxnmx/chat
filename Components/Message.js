import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
const Message = ({value,date}) => {
  return (
   <View style={styles.message}>
   <Text style={styles.message__value}>{value}</Text>
   <Text style={styles.message__date}>{date}</Text>
   </View>
  )
}
const styles = StyleSheet.create({
message:{
  flexDirection: 'row',
  borderRadius: 20,
  backgroundColor: '#A9E0FF',
  alignItems: 'flex-end',
  paddingVertical: 6,
  paddingHorizontal: 10,
  alignSelf: 'flex-end',
  marginBottom: 20,
  maxWidth:"80%",
},
message__value:{
  fontSize:16,
  color:"#303E5A",
  padding:8,
  maxWidth:"90%",
},
message__date:{
  fontSize:11,
  color:"#6695C0",
  textAlignVertical: 'bottom'

}
})
export default Message;