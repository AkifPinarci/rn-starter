import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";

const ImageDetail = (props) => {
  return (
    <View>
      <Image source={props.imageSrc} />
      <Text style={styles.textStyle}>{props.title}</Text>
      <Text style={styles.textStyle}>Image Score - {props.imageScore}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
  },
});

export default ImageDetail;
