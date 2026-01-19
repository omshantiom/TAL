// components/Divider.tsx
import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";

type DividerProps = {
  /** Thickness of the divider line */
  thickness?: number;
  /** Color of the divider */
  color?: string;
  /** Horizontal margin */
  marginVertical?: number;
  /** Optional custom style override */
  style?: ViewStyle;
};

export const Divider: React.FC<DividerProps> = ({
  thickness = StyleSheet.hairlineWidth,
  color = "#e2e6ea",
  marginVertical = 8,
  style,
}) => {
  return (
    <View
      style={[
        styles.line,
        {
          height: thickness,
          backgroundColor: color,
          marginVertical: marginVertical,
        },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  line: {
    width: "100%",
  },
});
