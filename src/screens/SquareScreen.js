import React, { useReducer } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ColorDetails from "../components/ColorDetails";

const COLOR_INCREMENT = 10;

const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number }
  // action === { payload: 15 || -15, type: 'change_red' || 'change_green' || 'change_blue' }
  switch (action.type) {
    case "change_red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case "change_green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "change_blue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  console.log(state.red);
  return (
    <View>
      <ColorDetails
        onIncrease={() => {
          dispatch({ type: "change_red", payload: COLOR_INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ type: "change_red", payload: COLOR_INCREMENT * -1 });
        }}
        color="Red"
      />
      <ColorDetails
        onIncrease={() => {
          dispatch({ type: "change_green", payload: COLOR_INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ type: "change_green", payload: COLOR_INCREMENT * -1 });
        }}
        color="Green"
      />
      <ColorDetails
        onIncrease={() => {
          dispatch({ type: "change_blue", payload: COLOR_INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ type: "change_blue", payload: COLOR_INCREMENT * -1 });
        }}
        color="Blue"
      />
      <View
        style={{
          backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
          height: 100,
          width: 100,
          marginLeft: 160,
          marginTop: 50,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
