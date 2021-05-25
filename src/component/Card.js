import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Colors, Images } from "../config";

const Card = ({ title = "Card", onPress = () => {}, image }) => {
  return (
    <ImageBackground
      source={image}
      imageStyle={{ width: "100%", height: 60 }}
      style={{ height: 60, width: "30%" }}
    >
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.5}
        onPress={onPress}
      >
        <Text style={{color:Colors.white,fontWeight:'bold'}}>{title}</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
