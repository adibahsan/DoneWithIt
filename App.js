import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  console.log("App Executed");

  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={styles.colorStyles}>
        Ullamco eiusmod laborum ad deserunt amet culpa amet dolor nulla
        consectetur excepteur veniam. Lorem officia deserunt do ipsum Lorem. Eu
        id officia quis consectetur. Pariatur anim fugiat labore minim
        adipisicing consectetur exercitation deserunt enim. Do consequat aliquip
        non exercitation aute voluptate id officia velit excepteur qui culpa in.
        Officia ad deserunt qui reprehenderit nostrud culpa.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },

  colorStyles: {
    color: "#fff",
  },
});
