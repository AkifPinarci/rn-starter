import React, { useReducer } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";

const CHANGE = 12;

const reducer = (state, action) => {
  // state = {count: number}
  // action = {type: 'increment' || 'decrement', payload: 1}
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
};
const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <View>
      <View>
        <Button
          title="Increment"
          onPress={() => {
            dispatch({ type: "increment", payload: CHANGE });
          }}
        />
        <Button
          title="Decrement"
          onPress={() => {
            dispatch({ type: "decrement", payload: CHANGE });
          }}
        />
        <Button
          title="Reset"
          onPress={() => {
            dispatch({ type: "reset" });
          }}
        />
      </View>
      <Text style={styles.textStyle}>Current Count: {state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    textAlign: "center",
    color: "blue",
  },
});

export default CounterScreen;
