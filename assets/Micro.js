
import React from "react"
import { Image, View } from "react-native"
import Svg, { G, Path, Defs, Pattern, Rect, Polygon, LinearGradient, Stop, SvgXml } from "react-native-svg"

export function Micro(props) {
  const {style} = props
  const iconXml = `
  <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.91549 9.82222V13.1145C1.91549 16.751 4.86348 19.699 8.5 19.699C11.8811 19.699 14.6868 17.1432 15.0448 13.8573L15.0737 13.5025L15.0845 13.1145V9.82222H17L16.9997 13.1403L16.9874 13.58C16.7615 17.7581 13.5297 21.1096 9.44544 21.5624L9.44444 25.1222H13.7889V27.0111H3.21111V25.1222H7.55556L7.55612 21.5627C3.43618 21.1075 0.20357 17.7078 0.00925176 13.5146L0 13.1145V9.82222H1.91549ZM8.5 0C11.108 0 13.2222 2.11421 13.2222 4.72222V13.2222C13.2222 15.8302 11.108 17.9444 8.5 17.9444C5.89199 17.9444 3.77778 15.8302 3.77778 13.2222V4.72222C3.77778 2.11421 5.89199 0 8.5 0Z" fill="#4FA7FF"/>
  </svg>
  `
  return (
    <View style={[style, {alignItems: 'center', justifyContent: 'center'}]}>
      <SvgXml xml={iconXml} />
    </View>
  )
}