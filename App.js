import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Button,
} from "react-native";

export default function App() {
  console.log("App Executed");

  const handlePress = (prop) => {
    console.log("image pressed ");
  };

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

      <TouchableHighlight onPress={handlePress}>
        <Image
          blurRadius={5}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>

      <Button title="The Button" onPress={handlePress} color="orange" />
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

  colorStyles: {
    color: "#fff",
    textShadowColor: "black",
  },
});
