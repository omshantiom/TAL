// components/AmountSelector.tsx
import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
// If you prefer a native picker:
import { Picker } from "@react-native-picker/picker";

type Props = {
  selectedOption: string | null;
  onSelectOption: (val: string | null) => void;
  customAmount: string;
  onChangeCustomAmount: (val: string) => void;
};

const OPTIONS = [
  "100000",
  "250000",
  "500000",
  "750000",
  "1000000",
  "2000000",
  "3000000",
  "5000000",
];

export const AmountSelector: React.FC<Props> = ({
  selectedOption,
  onSelectOption,
  customAmount,
  onChangeCustomAmount,
}) => {
  return (
    <View style={styles.wrap}>
      {/* Picker row styled like input */}
      <View style={styles.inputRow}>
        <Ionicons name="logo-usd" size={16} color="#2f3337" />
        <Picker
          selectedValue={selectedOption ?? ""}
          onValueChange={(itemValue) => {
            const val = itemValue === "" ? null : itemValue;
            onSelectOption(val);
          }}
          style={styles.picker}
          dropdownIconColor="#2f3337"
        >
          <Picker.Item label="Enter or select an amount" value="" />
          {OPTIONS.map((o) => (
            <Picker.Item
              key={o}
              label={`$${Number(o).toLocaleString()}`}
              value={o}
            />
          ))}
        </Picker>
        <Ionicons name="chevron-down" size={16} color="#2f3337" />
      </View>

      {/* Custom amount text input */}
      <View style={styles.inputRow}>
        <Ionicons name="logo-usd" size={16} color="#2f3337" />
        <TextInput
          style={styles.input}
          placeholder="Or enter an amount (e.g., 250000)"
          keyboardType="number-pad"
          value={customAmount}
          onChangeText={onChangeCustomAmount}
          accessibilityLabel="Enter custom cover amount"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: { gap: 10 },
  inputRow: {
    height: 40,
    borderWidth: 1,
    borderColor: "#cfd4da",
    borderRadius: 4,
    backgroundColor: "#ffffff",
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  picker: { flex: 1 },
  input: { flex: 1, fontSize: 13, color: "#2f3337" },
});
