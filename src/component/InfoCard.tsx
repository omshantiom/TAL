// components/InfoCard.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = { text: string };

export const InfoCard: React.FC<Props> = ({ text }) => (
  <View style={styles.card}>
    <View style={styles.leftAccent} />
    <Text style={styles.text}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    position: "relative",
    borderWidth: 1,
    borderColor: "#b9d8cb",
    borderRadius: 4,
    backgroundColor: "#f5fbf8",
    padding: 10,
    marginBottom: 18,
  },
  leftAccent: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 3,
    backgroundColor: "#33a06f",
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  text: { fontSize: 13, color: "#2f3337" },
});
