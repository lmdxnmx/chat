import React, { useState,useEffect,useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
  Keyboard,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback,
  KeyboardAvoidingView
} from "react-native";
import { Plus } from "./assets/Plus";
import { Micro } from "./assets/Micro";
import { Smile } from "./assets/Smile";
import { Back } from "./assets/Back";
import { Phone } from "./assets/Phone";
import Message from "./Components/Message";
import moment from "moment";
import Avatar from "./Components/Avatar";
export default function App() {
  const [size,setSize] = useState(0)
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);
  let date = moment().format("HH:mm");

  const addMessage = () => {
    const newMessage = {
      id: Math.random().toString(36).substr(2, 9),
      value: value,
      date: date,
    };
    setMessages([newMessage,...messages]);
    setValue("");
  };
  const onLayout = useCallback(event => {
    const { width, height } = event.nativeEvent.layout;
    setSize({ width, height });
  }, []);
  return (
    <SafeAreaView >
      <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ImageBackground
        source={require("./assets/background.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.top_pannel}>
          <View style={styles.top_pannel__profile}>
            <TouchableOpacity>
            <Back style={styles.top_pannel__arrow_back} />
            </TouchableOpacity>
      
          <View style={styles.top_pannel__user}>
        <Text style={styles.top_pannel__username}>
          Имя пользователя
        </Text>
        <Text style={styles.top_pannel__online}>
          Был(а) в сети вчера в 21:35
        </Text>
        </View>
          </View>
          <TouchableOpacity>
          <Phone style={styles.top_pannel__phone} />
          </TouchableOpacity>
        </View>
        <View style={[styles.chat,{height:'90%',paddingBottom:size.height}]} >
          <FlatList
            inverted={true}
            data={[...messages]}
            renderItem={({ item }) => (
              <Message value={item.value} date={item.date} />
            )}
          />
        </View>
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
                source={require("./assets/send.png")}
              />
            </TouchableOpacity>
          )}
          <TouchableOpacity style={styles.bottom_pannel__smile_container}>
          <Smile style={[styles.bottom_pannel__smile,{top:size.height < 70 ? -18 : -40}]} />
          </TouchableOpacity>
        </View>
        
        </TouchableWithoutFeedback>
      </ImageBackground>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  wrapper: {
    width: 100,
  },

  top_pannel: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FCFDFF",
    height: 50,
  },
  top_pannel__arrow_back: {
    width: 40,
    height: 40,
  },
  top_pannel__phone: {
    width: 40,
    height: 40,
  },
  top_pannel__profile: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  top_pannel__user:{
    paddingLeft:12
  },
  top_pannel__username:{
    fontSize:18,
    color:"#303E5A"
  },
  top_pannel__online:{
    fontSize:10,
    color:"#8C97A4"
  },
  chat: {
    display: "flex",
 
  },
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
});
