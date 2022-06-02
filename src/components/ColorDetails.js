import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorDetails = (props) => {
  return (
    <View style={styles.addMargin}>
      <Text style={styles.textStyle}>{props.color}</Text>
      <Button
        onPress={() => {
          props.onIncrease();
        }}
        title={`Increase ${props.color}`}
      ></Button>
      <Button
        onPress={() => {
          props.onDecrease();
        }}
        title={`Decrease ${props.color}`}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    textAlign: "center",
  },
  addMargin: {
    marginVertical: 20,
  },
});

export default ColorDetails;
