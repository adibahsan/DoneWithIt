import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  console.log("App Executed");

  return (
    <View style={styles.container}>
      <Text>Hello From my App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
