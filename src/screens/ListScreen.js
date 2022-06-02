import React from "react";
import { View, Text, StyleSheet, FlatList, DevSettings } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 20 },
    { name: "Friend #2", age: 25 },
    { name: "Friend #3", age: 23 },
    { name: "Friend #4", age: 56 },
    { name: "Friend #5", age: 43 },
    { name: "Friend #6", age: 31 },
    { name: "Friend #7", age: 21 },
    { name: "Friend #8", age: 75 },
    { name: "Friend #9", age: 2 },
  ];
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <View>
            <Text style={styles.textStyle}>
              {item.name} - Age:{item.age}
            </Text>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    marginVertical: 50,
    marginHorizontal: 50,
    textAlign: "center",
  },
});

export default ListScreen;
