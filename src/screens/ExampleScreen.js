import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ExampleScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewStyle}></View>
      <View style={styles.view1Style}></View>
      <View style={styles.view2Style}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 150,
    borderWidth: 1,
    borderColor: "black",
  },
  viewStyle: {
    height: 75,
    width: 75,
    backgroundColor: "red",
  },
  view1Style: {
    height: 75,
    width: 75,
    backgroundColor: "purple",
    alignSelf: "flex-end",
  },
  view2Style: {
    height: 75,
    width: 75,
    backgroundColor: "green",
  },
});

export default ExampleScreen;
