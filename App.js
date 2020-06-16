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
  const { width } = Dimensions.get("window");
  let screenWidth = width * 0.05;

  console.log("Device orientation ", { deviceOrientation });
  console.log("Window Size is ", width);
  console.log("ScreenWidth Size is ", screenWidth);

  const redBackgroundStyles = { backgroundColor: "red" };

  const styles = StyleSheet.create({
    viewContainer: {
      height: 80,
      width: "50%",
    },

    paddingTop: {
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    textStyles: {
      color: "black",
      fontSize: screenWidth / 1.5,
      fontWeight: "bold",
      flexShrink: 1,
    },

    colorStyles: {
      color: "red",
      textShadowColor: "black",
      backgroundColor: "pink",
    },
  });

  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        flexDirection: "row-reverse",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "tomato",
          height: 120,
          width: 120,
          top: -35,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          height: 120,
          width: 120,
          top: 35,
        }}
      />
      <View
        style={{
          backgroundColor: "#b22222",
          height: 120,
          width: 420,
          flexShrink: 1,
        }}
      >
        <Text style={styles.textStyles}>
          Lorem consequat dolore quis officia aliquip. Aliquip deserunt nulla ut
          cillum excepteur aliquip esse proident mollit sunt. Veniam enim anim
        </Text>
      </View>
      {/* <View
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
      /> */}
    </View>
  );
}
