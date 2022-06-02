import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Beach"
        imageSrc={require("../../assets/beach.jpg")}
        imageScore={9}
      />
      <ImageDetail
        title="Forest"
        imageSrc={require("../../assets/forest.jpg")}
        imageScore={4}
      />
      <ImageDetail
        title="Mountain"
        imageSrc={require("../../assets/mountain.jpg")}
        imageScore={7}
      />
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

export default ImageScreen;
