import React from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>This is Box Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 15,
    borderColor: "red",
    borderWidth: 5,
    paddingLeft: 10,
  },
  viewStyle: {
    borderWidth: 2,
    borderColor: "black",
  },
});

export default BoxScreen;
