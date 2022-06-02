import React, { useState } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = React.useState(0);

  return (
    <View>
      <View>
        <Button
          title="Increment"
          onPress={() => {
            setCounter(counter + 1);
          }}
        />
        <Button
          title="Decrement"
          onPress={() => {
            setCounter(counter - 1);
          }}
        />
        <Button
          title="Reset"
          onPress={() => {
            setCounter(0);
          }}
        />
      </View>
      <Text style={styles.textStyle}>Current Count: {counter}</Text>
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
