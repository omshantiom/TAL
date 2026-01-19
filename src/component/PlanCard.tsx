// src/components/PlanCard.tsx
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { colors, spacing, radius, shadow } from "../theme/tokens";
import { Ionicons } from "@expo/vector-icons";

export type PlanCardProps = {
  title: string;
  iconName: keyof typeof Ionicons.glyphMap;
  added?: boolean;
  onAdd?: () => void;
  onToggle?: () => void; // for the right-side small plus/minus
};

export const PlanCard: React.FC<PlanCardProps> = ({
  title,
  iconName,
  added = false,
  onAdd,
  onToggle,
}) => {
  return (
    <View style={[styles.card, shadow.card]}>
      <View style={styles.headerRow}>
        <View style={styles.iconWrap}>
          <Ionicons name={iconName} size={18} color={colors.greenDark} />
        </View>
        <Text style={styles.title}>{title}</Text>
        <Pressable
          onPress={onToggle}
          accessibilityRole="button"
          accessibilityLabel={added ? "Remove plan" : "Add plan"}
          style={styles.roundToggle}
        >
          <Ionicons
            name={added ? "remove" : "add"}
            size={16}
            color={colors.mutedText}
          />
        </Pressable>
      </View>

      <Pressable
        onPress={onAdd}
        style={[styles.addBtn, added && styles.addBtnDisabled]}
        disabled={added}
        accessibilityRole="button"
        accessibilityLabel={added ? "Plan added" : "Add plan"}
      >
        <Text style={styles.addBtnText}>{added ? "ADDED" : "ADD"}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.cardBg,
    borderRadius: radius.md,
    padding: spacing.md,
    marginVertical: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.md,
  },
  iconWrap: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#EAF6E3",
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.sm,
  },
  title: {
    flex: 1,
    fontSize: 15,
    fontWeight: "600",
    color: colors.darkText,
  },
  roundToggle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  addBtn: {
    height: 40,
    borderRadius: radius.sm,
    backgroundColor: colors.green,
    alignItems: "center",
    justifyContent: "center",
  },
  addBtnDisabled: {
    backgroundColor: "#CFE9B8",
  },
  addBtnText: {
    color: "#fff",
    fontWeight: "700",
    letterSpacing: 0.5,
  },
});
