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
        flexDirection: "row-reverse",
        justifyContent: "center",
        flexWrap: "wrap",
        alignContent: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "tomato",
          height: 120,
          width: 120,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          height: 120,
          width: 120,
        }}
      />
      <View
        style={{
          backgroundColor: "#b22222",
          height: 120,
          width: 120,
        }}
      />
      <View
        style={{
          backgroundColor: "#e50aff",
          height: 120,
          width: 120,
        }}
      />
      <View
        style={{
          backgroundColor: "#7cfc00",
          height: 120,
          width: 120,
        }}
      />
    </View>
  );
}

const redBackgroundStyles = { backgroundColor: "red" };

const styles = StyleSheet.create({
  viewContainer: {
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
