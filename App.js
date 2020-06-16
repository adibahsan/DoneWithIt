import React from "react";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  Image,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  const deviceOrientation = useDeviceOrientation();

  console.log("Device orientation ", { deviceOrientation });
  console.log(Dimensions.get("screen"));

  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        flexDirection: "column-reverse",
      }}
    >
      <View
        style={{
          backgroundColor: "red",
          flex: 2,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          flex: 1,
        }}
      />
      <View
        style={{
          backgroundColor: "blue",
          flex: 1,
        }}
      />
    </View>
  );
}

const redBackgroundStyles = { backgroundColor: "red" };

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: "#db09f4",
    height: 80,
    width: "50%",
  },

  paddingTop: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  colorStyles: {
    color: "red",
    textShadowColor: "black",
    backgroundColor: "pink",
  },
});
