// src/components/BottomBar.tsx
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { colors, spacing, radius } from "../theme/tokens";

type Props = {
  totalPremium: number; // 307.40
  discountLabel?: string; // '1 discount applied'
  onContinue?: () => void;
  onViewSummary?: () => void;
};

export const BottomBar: React.FC<Props> = ({
  totalPremium,
  discountLabel,
  onContinue,
  onViewSummary,
}) => {
  return (
    <View style={styles.wrap}>
      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text style={styles.totalTitle}>Total premium*</Text>
          <Text style={styles.amount}>${totalPremium.toFixed(2)}</Text>
          <Text style={styles.perMonth}>per month</Text>
          <Text style={styles.subtext}>
            Pay annually and get 12 months’ cover for the price of 11.
          </Text>
        </View>

        <View style={styles.rightCol}>
          {discountLabel ? (
            <View style={styles.chip}>
              <Text style={styles.chipText}>{discountLabel}</Text>
            </View>
          ) : null}

          <Pressable
            onPress={onContinue}
            style={styles.cta}
            accessibilityRole="button"
          >
            <Text style={styles.ctaText}>CONTINUE</Text>
          </Pressable>
        </View>
      </View>

      <Pressable
        onPress={onViewSummary}
        accessibilityRole="button"
        style={styles.linkRow}
      >
        <Text style={styles.link}>View quote summary</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.chipBg,
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
    paddingBottom: spacing.lg,
    borderTopLeftRadius: radius.lg,
    borderTopRightRadius: radius.lg,
  },
  row: { flexDirection: "row" },
  totalTitle: { color: "#9DA5AA", fontSize: 11, fontWeight: "700" },
  amount: { color: "#fff", fontSize: 22, fontWeight: "800", marginTop: 2 },
  perMonth: { color: "#9DA5AA", fontSize: 12, marginBottom: spacing.sm },
  subtext: { color: "#C7CDD1", fontSize: 11, lineHeight: 16 },

  rightCol: { width: 160, alignItems: "flex-end" },

  chip: {
    backgroundColor: colors.accent,
    paddingHorizontal: spacing.sm,
    paddingVertical: 6,
    borderRadius: 999,
    marginBottom: spacing.sm,
  },
  chipText: { color: "#1F2427", fontSize: 11, fontWeight: "700" },

  cta: {
    backgroundColor: colors.green,
    height: 40,
    borderRadius: radius.sm,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  ctaText: { color: "#fff", fontWeight: "800", letterSpacing: 0.4 },

  linkRow: { marginTop: spacing.md },
  link: { color: "#BBD6FF", fontSize: 13, fontWeight: "700" },
});
