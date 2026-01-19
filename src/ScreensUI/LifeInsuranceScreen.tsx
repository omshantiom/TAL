// screens/LifeInsuranceScreen.tsx
import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TextInput,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // or react-native-vector-icons/Ionicons
import { InsuranceTickItem } from "../component/InsuranceTickItem";
import { InfoCard } from "../component/InfoCard";
import { Divider } from "../component/Divider";
import { AmountSelector } from "../component/AmountSelector";
import { RootStackParamList } from "../Navigation/navigation";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type BenefitItem = {
  id: string;
  text: string;
};

const BENEFITS: BenefitItem[] = [
  {
    id: "b1",
    text: "Get a quote online for cover from $100,000 to $5,000,000. For a higher level of cover, please call us on 131 825.",
  },
  {
    id: "b2",
    text: "Receive an advanced payment of 10% of the Benefit Amount, up to a maximum of $25,000 as soon as we receive the death certificate or medical certificate confirming death.",
  },
  {
    id: "b3",
    text: "Your loved ones will have peace of mind with a lump sum payment if you pass away or are diagnosed with a terminal illness.",
  },
];

const infoBoxText =
  "There may be additional options available to you. For more information, please read our PDS or call us to discuss your options today.";

type LifeInsuranceDetailScreenNavProp = NativeStackNavigationProp<
  RootStackParamList,
  "LifeInsuranceDetailScreen"
>;

export const LifeInsuranceScreen: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState<string>(""); // raw string
  const [estimatedPremium, setEstimatedPremium] = useState<string>("—");

  const navigation = useNavigation<LifeInsuranceDetailScreenNavProp>();

  // A simple mock premium calculator
  const premium = useMemo(() => {
    // Prefer custom amount if provided, else use selectedOption
    const numeric =
      Number(customAmount.replace(/[^0-9.]/g, "")) ||
      (selectedOption ? Number(selectedOption.replace(/[^0-9.]/g, "")) : 0);

    if (!numeric || numeric < 100000) return null;

    // Extremely simplified: $0.45 per $1000 per month
    const monthly = Math.round((numeric / 1000) * 0.45);
    return monthly;
  }, [selectedOption, customAmount]);

  React.useEffect(() => {
    setEstimatedPremium(premium ? `$${premium.toLocaleString()}/mo` : "—");
  }, [premium]);

  const canConfirm = Boolean(premium); // enable only if we can compute a premium

  const onConfirm = () => {
    navigation.navigate("LifeInsuranceDetailScreen");
    if (!canConfirm) return;
    // TODO: Navigate or submit
    console.log("Confirmed with amount:", customAmount || selectedOption);
    //LifeInsuranceDetailScreen;
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Header icon + title */}
        <View style={styles.header}>
          <View style={styles.headerIcon}>
            <Ionicons name="heart-outline" size={26} color="#2d2e2f" />
          </View>
          <Text style={styles.title}>Life Insurance</Text>
          <Text style={styles.subtitle}>
            Providing for your loved ones when you are gone.
          </Text>
        </View>

        {/* Benefits box */}
        <View style={styles.benefitBox}>
          {BENEFITS.map((b) => (
            <InsuranceTickItem key={b.id} text={b.text} />
          ))}
        </View>

        {/* Info box with border accent */}
        <InfoCard text={infoBoxText} />

        {/* Cover Amount section */}
        <View style={styles.section}>
          <View style={styles.sectionTitleRow}>
            <Text style={styles.sectionTitle}>Cover Amount</Text>
            <Ionicons
              name="information-circle-outline"
              size={18}
              color="#33a06f"
            />
          </View>
          <Text style={styles.helperText}>
            Select from the options below or enter an amount from $100,000 to
            $5,000,000
          </Text>

          {/* Amount selector (dropdown + text input) */}
          <AmountSelector
            selectedOption={selectedOption}
            onSelectOption={setSelectedOption}
            customAmount={customAmount}
            onChangeCustomAmount={setCustomAmount}
          />
        </View>

        <Divider />

        {/* Estimated monthly premium row */}
        <View style={styles.premiumRow}>
          <Text style={styles.premiumLabel}>Estimated Monthly Premium</Text>
          <Text style={styles.premiumValue}>{estimatedPremium}</Text>
        </View>

        {/* Confirm button */}
        <Pressable
          //onPress={() => navigation.navigate("LifeInsuranceDetailScreen")}
          onPress={onConfirm}
          disabled={!canConfirm}
          style={({ pressed }) => [
            styles.confirmButton,
            !canConfirm && styles.confirmButtonDisabled,
            pressed && canConfirm ? styles.confirmButtonPressed : null,
          ]}
          accessibilityRole="button"
          accessibilityState={{ disabled: !canConfirm }}
        >
          <Text style={styles.confirmText}>CONFIRM</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#f6f7f8" },
  container: {
    paddingHorizontal: 18,
    paddingBottom: 28,
  },
  header: {
    alignItems: "center",
    marginTop: 8,
    marginBottom: 16,
  },
  headerIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#e9eef0",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 16.5,
    fontWeight: "600",
    color: "#2d2e2f",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    color: "#60666b",
    textAlign: "center",
  },

  benefitBox: {
    backgroundColor: "#f0f3f5",
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginBottom: 16,
  },

  section: {
    marginTop: 8,
    marginBottom: 8,
  },
  sectionTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 14.5,
    fontWeight: "600",
    color: "#1f2124",
  },
  helperText: {
    fontSize: 13,
    color: "#5d646a",
    marginBottom: 8,
  },

  premiumRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 2,
  },
  premiumLabel: { fontSize: 13.5, color: "#2f3337" },
  premiumValue: { fontSize: 13.5, color: "#2f3337", fontWeight: "600" },

  confirmButton: {
    marginTop: 8,
    height: 40,
    borderRadius: 4,
    backgroundColor: "#3a8fdf",
    alignItems: "center",
    justifyContent: "center",
  },
  confirmButtonPressed: {
    opacity: 0.9,
  },
  confirmButtonDisabled: {
    backgroundColor: "#cfd4da",
  },
  confirmText: {
    letterSpacing: 1.1,
    color: "#ffffff",
    fontWeight: "700",
  },
});
``;
