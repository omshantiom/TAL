// components/InsuranceTickItem.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = { text: string };

export const InsuranceTickItem: React.FC<Props> = ({ text }) => {
  return (
    <View style={styles.row}>
      <Ionicons
        name="checkmark-circle"
        size={18}
        color="#33a06f"
        style={styles.icon}
      />
      <View style={styles.textWrap}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
    backgroundColor: "#ffffff",
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  icon: { marginTop: 2 },
  textWrap: { flex: 1, marginLeft: 6 },
  text: { fontSize: 13, color: "#2f3337" },
});
