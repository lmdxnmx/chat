import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
  } from "react-native";
import {Back} from './../assets/Back';
import {Phone} from './../assets/Phone'
const Header = () => {
  return (
    <View style={styles.header}>
    <View style={styles.header__profile}>
      <TouchableOpacity>
      <Back style={styles.header__arrow_back} />
      </TouchableOpacity>

    <View style={styles.header__user}>
  <Text style={styles.header__username}>
    Имя пользователя
  </Text>
  <Text style={styles.header__online}>
    Был(а) в сети вчера в 21:35
  </Text>
  </View>
    </View>
    <TouchableOpacity>
    <Phone style={styles.header__phone} />
    </TouchableOpacity>
  </View>
  )
}
const styles = StyleSheet.create({
    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#FCFDFF",
        height: 50,
      },
      header__arrow_back: {
        width: 40,
        height: 40,
      },
      header__phone: {
        width: 40,
        height: 40,
      },
      header__profile: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      },
      header__user:{
        paddingLeft:12
      },
      header__username:{
        fontSize:18,
        color:"#303E5A"
      },
      header__online:{
        fontSize:10,
        color:"#8C97A4"
      },
})
export default Header