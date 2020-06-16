import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Button,
  Alert,
} from "react-native";

export default function App() {
  console.log("App Executed");

  const handlePress = (prop) => {
    console.log("image pressed ");
  };

  return (
    <View style={styles.container}>
      <Text numberOfLines={2} style={(styles.colorStyles, redBackgroundStyles)}>
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

      <Button
        title="The Button"
        onPress={() =>
          Alert.alert("My Alert", "My Message", [
            { text: "Yes", onPress: () => console.log("press yes") },
            { text: "No", onPress: () => console.log("press no") },
          ])
        }
        color="orange"
      />
    </View>
  );
}

const redBackgroundStyles = { backgroundColor: "red" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  colorStyles: {
    color: "red",
    textShadowColor: "black",
    backgroundColor: "pink",
  },
});
