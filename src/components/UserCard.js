import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";

const UserCard = ({ data }) => {
  const [color, setColor] = useState(data.color);
  return (
    <View style={[styles.view, { backgroundColor: color }]}>
      <Text style={styles.text}>{data.name}</Text>
      <Text style={styles.text}>{data.email}</Text>
      <Text style={styles.text}>{data.phone}</Text>
      <TextInput
        autoCapitalize="none"
        style={styles.textInput}
        placeholder="Enter the desired color."
        value={color}
        onChangeText={(text) => {
          setColor(text);
        }}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    margin: 5,
    height: 25,
    backgroundColor: "white",
  },
  view: {
    width: "100%",
  },
  text: {
    fontSize: 30,
  },
});

export default UserCard;
