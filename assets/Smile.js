import React from "react"
import { Image, View } from "react-native"
import Svg, { G, Path, Defs, Pattern, Rect, Polygon, LinearGradient, Stop, SvgXml } from "react-native-svg"

export function Smile(props) {
  const {style} = props
  const iconXml = `
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 0.0323486C4.4798 0.0387939 0.00644531 4.51215 0 10.0323C0.5 23.2823 19.5 23.2765 20 10.0323C19.994 4.51196 15.5204 0.0383252 10 0.0323486ZM6.09 7.46817H8.59C9.05023 7.46817 9.42332 7.84126 9.42332 8.30149C9.42332 8.76172 9.05023 9.13481 8.59 9.13481H6.09C5.62977 9.13481 5.25668 8.76172 5.25668 8.30149C5.25668 7.84129 5.62977 7.46817 6.09 7.46817ZM15.125 12.9198C14.1287 14.6763 12.2759 15.7731 10.2567 15.8015C8.23609 15.7733 6.38172 14.6768 5.38336 12.9198C5.13508 12.5323 5.24797 12.0169 5.63551 11.7686C5.81961 11.6507 6.04273 11.6098 6.25668 11.6548C7.53809 12.1376 8.88848 12.4122 10.2567 12.4682C11.6226 12.4115 12.9707 12.1369 14.25 11.6548C14.7002 11.559 15.1428 11.8462 15.2386 12.2963C15.2843 12.511 15.2435 12.7351 15.125 12.9198ZM13.59 9.13485C12.6692 9.13485 11.9233 9.13485 11.9233 8.30153C11.9233 7.38106 12.6695 6.63485 13.59 6.63485C14.5105 6.63485 15.2567 7.38106 15.2567 8.30153C15.2567 9.13485 14.5108 9.13485 13.59 9.13485Z" fill="#4FA7FF"/>
  </svg>
  `
  return (
    <View style={[style, {alignItems: 'center', justifyContent: 'center'}]}>
      <SvgXml xml={iconXml} />
    </View>
  )
}