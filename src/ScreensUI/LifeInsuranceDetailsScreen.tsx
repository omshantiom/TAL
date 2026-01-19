// src/screens/InsuranceScreen.tsx
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, View, StyleSheet } from "react-native";
import { colors, spacing } from "../theme/tokens";
import { BottomBar } from "../component/BottomBar";
import { LifeInsuranceCard } from "../component/LifeInsuranceCard";
import { PlanCard } from "../component/PlanCard";

export const LifeInsuranceDetailScreen: React.FC = () => {
  const [coverAmount] = useState("4,000,000");
  const [price] = useState(299.4);
  const [tpdAdded, setTpdAdded] = useState(false);
  const [ciAdded, setCiAdded] = useState(false);

  const total = price + (tpdAdded ? 5.5 : 0) + (ciAdded ? 2.5 : 0); // example

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 160 }}
          showsVerticalScrollIndicator={false}
        >
          <LifeInsuranceCard
            pricePerMonth={price}
            coverAmount={coverAmount}
            onRemove={() => {}}
            onAdjustCover={() => {}}
          />

          <PlanCard
            title="TPD Insurance Plan"
            iconName="accessibility-outline"
            added={tpdAdded}
            onAdd={() => setTpdAdded(true)}
            onToggle={() => setTpdAdded((v) => !v)}
          />

          <PlanCard
            title="Critical Illness Insurance Plan"
            iconName="medkit-outline"
            added={ciAdded}
            onAdd={() => setCiAdded(true)}
            onToggle={() => setCiAdded((v) => !v)}
          />
        </ScrollView>

        <BottomBar
          totalPremium={Number(total.toFixed(2))}
          discountLabel="1 discount applied"
          onContinue={() => {}}
          onViewSummary={() => {}}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  container: { flex: 1, paddingHorizontal: spacing.md, paddingTop: spacing.md },
});
