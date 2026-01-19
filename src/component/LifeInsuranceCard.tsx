// src/components/LifeInsuranceCard.tsx
import React from "react";
import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import { colors, spacing, radius, shadow } from "../theme/tokens";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  pricePerMonth: number; // e.g., 299.4
  coverAmount: string; // e.g., "4,000,000"
  onRemove?: () => void;
  onAdjustCover?: () => void;
};

export const LifeInsuranceCard: React.FC<Props> = ({
  pricePerMonth,
  coverAmount,
  onRemove,
  onAdjustCover,
}) => {
  return (
    <View style={[styles.card, shadow.card]}>
      {/* Dark header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.heartWrap}>
            <Ionicons name="heart-outline" size={18} color="#FFFFFF" />
          </View>
          <Text style={styles.headerTitle}>Life Insurance</Text>
        </View>

        <Pressable
          onPress={onRemove}
          style={styles.removeBtn}
          accessibilityRole="button"
          accessibilityLabel="Remove life insurance"
        >
          <Text style={styles.removeText}>REMOVE</Text>
        </Pressable>
      </View>

      {/* Price */}
      <View style={styles.priceRow}>
        <Text style={styles.priceText}>
          ${pricePerMonth.toFixed(2)}
          <Text style={styles.per}> / month</Text>
        </Text>
      </View>

      {/* Cover Amount & Adjust */}
      <View style={styles.section}>
        <Text style={styles.label}>Cover Amount</Text>

        <View style={styles.inputRow}>
          <Text style={styles.currency}>$</Text>
          <TextInput
            value={coverAmount}
            style={styles.input}
            placeholder="0"
            keyboardType="numeric"
            placeholderTextColor={colors.mutedText}
          />
          <Pressable style={styles.iconBtn} accessibilityLabel="Clear amount">
            <Ionicons name="close" size={16} color={colors.mutedText} />
          </Pressable>
          <Pressable style={styles.iconBtn} accessibilityLabel="Open options">
            <Ionicons name="chevron-down" size={16} color={colors.mutedText} />
          </Pressable>
        </View>

        <Pressable
          onPress={onAdjustCover}
          style={styles.adjustBtn}
          accessibilityRole="button"
          accessibilityLabel="View and adjust cover"
        >
          <Text style={styles.adjustText}>VIEW & ADJUST COVER</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.cardBg,
    borderRadius: radius.md,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.md,
  },
  header: {
    backgroundColor: colors.dark,
    padding: spacing.md,
    flexDirection: "row",
    alignItems: "center",
  },
  headerLeft: { flexDirection: "row", alignItems: "center", flex: 1 },
  heartWrap: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#94A3AB",
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.sm,
  },
  headerTitle: { color: "#fff", fontSize: 14, fontWeight: "600" },
  removeBtn: {
    backgroundColor: "#334147",
    paddingHorizontal: spacing.sm,
    paddingVertical: 6,
    borderRadius: radius.sm,
  },
  removeText: { color: "#fff", fontSize: 12, fontWeight: "700" },

  priceRow: { padding: spacing.md },
  priceText: { fontSize: 24, fontWeight: "800", color: colors.darkText },
  per: { fontSize: 12, fontWeight: "600", color: colors.mutedText },

  section: { paddingHorizontal: spacing.md, paddingBottom: spacing.md },
  label: {
    fontSize: 12,
    color: colors.darkText,
    marginBottom: spacing.sm,
    fontWeight: "600",
  },

  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.sm,
    height: 40,
    paddingHorizontal: spacing.sm,
    backgroundColor: "#FAFBFC",
  },
  currency: {
    color: colors.mutedText,
    marginRight: spacing.sm,
    fontWeight: "700",
  },
  input: { flex: 1, color: colors.darkText },
  iconBtn: {
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 2,
    borderRadius: 14,
  },

  adjustBtn: {
    height: 36,
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
    marginTop: spacing.sm,
    backgroundColor: "#fff",
  },
  adjustText: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.darkText,
    letterSpacing: 0.3,
  },
});
