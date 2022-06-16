import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import UserCard from "../components/UserCard";

const UserListScreen = () => {
  const data = [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@gmail.com",
      phone: "555-555-5555",
      color: "red",
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "janedoe@gmail.com",
      phone: "555-555-5555",
      color: "green",
    },
    {
      id: 3,
      name: "Jack Doe",
      email: "jackdoe@gmail.com",
      phone: "555-555-5555",
      color: "blue",
    },
  ];

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <UserCard data={item} />}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({});

export default UserListScreen;
