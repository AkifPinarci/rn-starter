import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
  var greeting = ["Hello", "sdsf"];
  var name = "Akif";
  return (
    <View>
      <Text style={styles.textStyle}>This is the components screen</Text>
      <Text style={styles.textStyle_type2}>My name is {name}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  textStyle_type2: {
    fontSize: 20,
  },
});

export default ComponentScreen;
