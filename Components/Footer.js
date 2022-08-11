import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    Image
  } from "react-native";
import {Plus} from './../assets/Plus';
import {Micro} from './../assets/Micro';
import {Smile} from './../assets/Smile';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
const Footer = ({onLayout,value,setValue,size,addMessage}) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} >
    <View style={[styles.bottom_pannel,{alignItems:"center"}]} onLayout={onLayout}>
    <TouchableOpacity>
      <Plus style={styles.bottom_pannel__plus} />
      </TouchableOpacity>
      <AutoGrowingTextInput
        value={value}
        onChangeText={setValue}
        style={styles.bottom_pannel__input}
      />
      
      {value === "" ? (
        <TouchableOpacity>
        <Micro style={styles.bottom_pannel__micro} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.bottom_pannel__send}
          onPress={addMessage}
        >
          <Image
            style={styles.bottom_pannel__send}
            source={require("./../assets/send.png")}
          />
        </TouchableOpacity>
      )}
      <TouchableOpacity style={styles.bottom_pannel__smile_container}>
      <Smile style={[styles.bottom_pannel__smile,{top:size.height < 70 ? -18 : -40}]} />
      </TouchableOpacity>
    </View>
    
    </TouchableWithoutFeedback>
  )
}
const styles = StyleSheet.create({
    bottom_pannel: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#F6F6F6",
        width:"100%", 
        position:"absolute",
        justifyContent:"space-between",
        bottom:0,
      },
    
      bottom_pannel__plus: {
        width: 40,
        height: 40,
      },
      bottom_pannel__micro: {
        width: 40,
        height: 40,
      },
      bottom_pannel__send: {
        width: 40,
        height: 40,
      },
      bottom_pannel__smile: {
        width: 35,
        height: 35,
       
      
      },
      bottom_pannel__smile_container:{
        position:'absolute',
        right:"20%",
        top:"60%",
      },
      bottom_pannel__input: {
        margin: 12,
        borderColor: "#8E8E93",
        borderWidth: 0.5,
        borderRadius: 16,
        width: "70%",
        backgroundColor: "#FCFDFF", 
        maxHeight:200,
        padding:20,
        fontSize:16,
        paddingRight:40
      },
})
export default Footer;