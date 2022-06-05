import React from "react";
import { Button, View, Text, StyleSheet, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.textStyle}>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate("List")}
        title="Go to List Demo"
      />
      <Button
        onPress={() => {
          navigation.navigate("Components");
        }}
        title="Go to Components Demo"
      ></Button>
      <Button
        onPress={() => {
          navigation.navigate("Image");
        }}
        title="Go to Image Demo"
      ></Button>
      <Button
        onPress={() => {
          navigation.navigate("Counter");
        }}
        title="Go to Counter Demo"
      ></Button>
      <Button
        onPress={() => {
          navigation.navigate("Color");
        }}
        title="Go to Color Demo"
      ></Button>
      <Button
        onPress={() => {
          navigation.navigate("Square");
        }}
        title="Go to Square Demo"
      ></Button>
      <Button
        onPress={() => {
          navigation.navigate("Text");
        }}
        title="Go to Text Demo"
      ></Button>
      <Button
        onPress={() => {
          navigation.navigate("Box");
        }}
        title="Go to Box Demo"
      ></Button>
      <Button
        onPress={() => {
          navigation.navigate("Flex");
        }}
        title="Go to Flex Demo"
      ></Button>
      <Button
        onPress={() => {
          navigation.navigate("Example");
        }}
        title="Go to Example Demo"
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    textAlign: "center",
  },
});

export default HomeScreen;
