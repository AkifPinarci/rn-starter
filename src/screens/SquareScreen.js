import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ColorDetails from "../components/ColorDetails";

const COLOR_INCREMENT = 10;

const SquareScreen = () => {
  const [red, setRed] = React.useState(0);
  const [green, setGreen] = React.useState(0);
  const [blue, setBlue] = React.useState(0);
  const [color, setColor] = React.useState("rgb(0,0,0)");

  console.log(red);

  function changeColor(red, green, blue) {
    if (red > 255) {
      setRed(255);
    } else if (red < 0) {
      setRed(0);
    } else {
      setRed(red);
    }
    if (green > 255) {
      setGreen(255);
    } else if (green < 0) {
      setGreen(0);
    } else {
      setGreen(green);
    }
    if (blue > 255) {
      setBlue(255);
    } else if (blue < 0) {
      setBlue(0);
    } else {
      setBlue(blue);
    }
    return `rgb(${red},${green},${blue})`;
  }
  return (
    <View>
      <ColorDetails
        onIncrease={() => {
          setColor(changeColor(red + COLOR_INCREMENT, green, blue));
        }}
        onDecrease={() => {
          setColor(changeColor(red - COLOR_INCREMENT, green, blue));
        }}
        color="Red"
      />
      <ColorDetails
        onIncrease={() => {
          setColor(changeColor(red, green + COLOR_INCREMENT, blue));
        }}
        onDecrease={() => {
          setColor(changeColor(red, green - COLOR_INCREMENT, blue));
        }}
        color="Green"
      />
      <ColorDetails
        onIncrease={() => {
          setColor(changeColor(red, green, blue + COLOR_INCREMENT));
        }}
        onDecrease={() => {
          setColor(changeColor(red, green, blue - COLOR_INCREMENT));
        }}
        color="Blue"
      />
      <View
        style={{
          backgroundColor: color,
          height: 100,
          width: 100,
          marginLeft: 150,
          marginTop: 50,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
