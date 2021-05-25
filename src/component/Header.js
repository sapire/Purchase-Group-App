import React from "react";
import { View, Text } from "react-native";
import { Colors } from "../config";

const Header = () => {
  return (
    <View
      style={{
        width: "100%",
        height: 60,
        backgroundColor: Colors.gray,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{color:Colors.white,fontSize:22}}>GroupBuy</Text>
    </View>
  );
};

export default Header;
