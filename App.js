import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  console.log("App Executed");

  return (
    <View style={styles.container}>
      <Text>
        Culpa irure excepteur sint occaecat consectetur excepteur Lorem
        excepteur fugiat reprehenderit ipsum. Lorem adipisicing fugiat laboris
        enim qui cillum minim mollit nisi qui ea. Nostrud anim fugiat labore ex
        ea elit. Mollit proident esse nisi ut Lorem ea Lorem commodo incididunt
        irure. Magna amet enim Lorem do ut laboris quis est mollit non excepteur
        amet. Enim qui velit commodo sit.
      </Text>
      <Image source={require("./assets/icon.png")} />
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
