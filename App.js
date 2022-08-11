import React, { useState,useEffect,useCallback } from "react";
import { StatusBar } from "expo-status-bar";
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

  KeyboardAvoidingView
} from "react-native";
import { Plus } from "./assets/Plus";
import { Micro } from "./assets/Micro";
import { Smile } from "./assets/Smile";
import Message from "./Components/Message";
import moment from "moment";
import Avatar from "./Components/Avatar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
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
        <Header/>
        <View style={[styles.chat,{height:'90%',paddingBottom:size.height}]} >
          <FlatList
            inverted={true}
            data={[...messages]}
            renderItem={({ item }) => (
              <Message value={item.value} date={item.date} />
            )}
          />
        </View>
    <Footer onLayout={onLayout} value={value} setValue={setValue} size={size} />
      </ImageBackground>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({


  chat: {
    display: "flex",
 
  },
});
