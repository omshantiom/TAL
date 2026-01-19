import React from "react";
import { Pressable, Text, Image, StyleSheet } from "react-native";

function Button({ onPress, label }: { onPress: () => void; label: string }) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.label}>{label}</Text>
      <Image
        // source={require('./assets/icon.png')} // or forward.svg via react-native-svg
        style={styles.img}
        resizeMode="contain"
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#d9dbeaff",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    justifyContent: "center",
  },
  label: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  img: {
    width: 18,
    height: 18,
    marginLeft: 8,
    tintColor: "#fff", // works for PNGs with alpha; not for all formats
  },
});
export default Button;
