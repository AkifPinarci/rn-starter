import React from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

const FlexScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>This is Flex Screen #1</Text>
      <Text style={styles.textStyle}>This is Flex Screen #2</Text>
      <Text style={styles.textStyle}>This is Flex Screen #3</Text>
      <Text style={styles.text1Style}>This is Flex Screen #4</Text>
      <Text style={styles.text1Style}>This is Flex Screen #5</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 15,
    borderColor: "red",
    borderWidth: 5,
    height: 150,
    width: 150,
    marginRight: "12%",
  },
  text1Style: {
    fontSize: 15,
    borderColor: "red",
    borderWidth: 5,
    height: 150,
    width: 150,
    marginRight: "12%",
    top: 10,
  },

  viewStyle: {
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    height: "80%",
    flexWrap: "wrap",
    alignContent: "space-around",
    flexDirection: "column",
  },
});

export default FlexScreen;
