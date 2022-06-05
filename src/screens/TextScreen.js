import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState("");

  return (
    <View style={styles.mainPage}>
      <Text style={styles.textStyle}>Enter Password: </Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        clearTextOnFocus={true}
        placeholder="Enter your name"
        placeholderTextColor="grey"
        value={password}
        onChangeText={(eventText) => {
          setPassword(eventText);
        }}
      />
      {password.length > 4 ? (
        <Text style={styles.confirmMessage}>This is valid password.</Text>
      ) : (
        <Text style={styles.errorMessage}>
          Password must be at least 5 characters long.
        </Text>
      )}
      <Text style={styles.textStyle}>Hi {password}. </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainPage: {
    margin: 10,
  },
  textStyle: {
    fontSize: 30,
  },
  input: {
    fontSize: 30,
    borderColor: "black",
    borderWidth: 1,
  },
  errorMessage: {
    color: "red",
  },
  confirmMessage: {
    color: "green",
  },
});

export default TextScreen;
