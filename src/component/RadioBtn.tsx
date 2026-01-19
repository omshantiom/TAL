import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

interface RadioBtnProps {
  labelData1: string;
  labelData2: string;
}
type Gender = "male" | "female";

const RadioBtn = ({ labelData1, labelData2 }: RadioBtnProps) => {
  const [gender, setGender] = useState<Gender | null>("male");

  const RadioItem = ({ label, value }: { label: string; value: Gender }) => {
    const selected = gender === value;
    return (
      <Pressable
        onPress={() => setGender(value)}
        accessibilityRole="radio"
        accessibilityState={{ checked: selected }}
        accessibilityLabel={label}
        style={styles.radioRow}
      >
        <View
          style={[styles.radioOuter, selected && styles.radioOuterSelected]}
        >
          {selected && <View style={styles.radioInner} />}
        </View>
        <Text style={styles.radioLabel}>{label}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <View
        accessible
        accessibilityRole="radiogroup"
        accessibilityLabel="Gender"
        style={styles.horizontalGroup}
      >
        <RadioItem label={labelData1} value="male" />
        <RadioItem label={labelData2} value="female" />
      </View>
      ``
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  label: { marginBottom: 8, fontSize: 16, fontWeight: "600" },
  horizontalGroup: { flexDirection: "row", alignItems: "center", gap: 16 },
  radioRow: { flexDirection: "row", alignItems: "center" },
  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#777",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  radioOuterSelected: { borderColor: "#0a84ff" },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#0a84ff",
  },
  radioLabel: { fontSize: 16 },
  outputBar: {
    marginTop: 12,
    backgroundColor: "#f5f7ff",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#e2e7ff",
  },
  outputText: { fontSize: 15, fontWeight: "500", color: "#333" },
});

export default RadioBtn;
