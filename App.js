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

export default function App() {
  console.log(Dimensions.get("screen"));

  return (
    <SafeAreaView style={styles.paddingTop}>
      <View style={styles.viewContainer}></View>
    </SafeAreaView>
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
