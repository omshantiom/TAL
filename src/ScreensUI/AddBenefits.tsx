import React, { FC } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Pressable,
  Platform,
} from "react-native";

// Icons: Expo -> @expo/vector-icons; RN CLI -> react-native-vector-icons
// Change these imports depending on your setup:
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation/navigation";

type Benefit = {
  id: string;
  title: string;
  iconName: keyof typeof ICON_MAP;
};

const ICON_MAP = {
  life: { lib: "MaterialCommunityIcons", name: "heart-pulse" },
  tpd: { lib: "MaterialCommunityIcons", name: "wheelchair-accessibility" },
  critical: { lib: "MaterialCommunityIcons", name: "hospital-box-outline" },
  income: { lib: "MaterialCommunityIcons", name: "shield-check-outline" },
} as const;

const COLORS = {
  background: "#0E0E0E", // dark page background
  card: "#FFFFFF",
  textPrimary: "#FFFFFF",
  textDark: "#1A1A1A",
  border: "#E8E8E8",
  info: "#7E7E7E",
  brandGreen: "#7BC51A", // button fill (adjust to match your brand)
  brandGreenDark: "#6BB014",
  iconBg: "#F2F4F5",
};

const benefits: Benefit[] = [
  { id: "life", title: "Life Insurance Plan", iconName: "life" },
  { id: "tpd", title: "TPD Insurance Plan", iconName: "tpd" },
  {
    id: "critical",
    title: "Critical Illness Insurance Plan",
    iconName: "critical",
  },
  { id: "income", title: "Income Protection Plan", iconName: "income" },
];

type LifeInsuranceScreenNavProp = NativeStackNavigationProp<
  RootStackParamList,
  "LifeInsuranceScreen"
>;

const AddBenefits = () => {
  const navigation = useNavigation<LifeInsuranceScreenNavProp>();

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.heroTitle}>Add a benefit to{"\n"}get started</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {benefits.map((b) => (
          <BenefitCard
            key={b.id}
            title={b.title}
            iconName={b.iconName}
            onAdd={() => {
              // TODO: wire this to your navigation or state
              navigation.navigate("LifeInsuranceScreen");
              console.log("Add pressed:", b.id);
            }}
            onInfo={() => {
              // TODO: show sheet / modal with info
              console.log("Info pressed:", b.id);
            }}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

type BenefitCardProps = {
  title: string;
  iconName: keyof typeof ICON_MAP;
  onAdd: () => void;
  onInfo: () => void;
};

const BenefitCard: FC<BenefitCardProps> = ({
  title,
  iconName,
  onAdd,
  onInfo,
}) => {
  const iconSpec = ICON_MAP[iconName];

  const IconRenderer =
    iconSpec.lib === "MaterialCommunityIcons"
      ? MaterialCommunityIcons
      : Ionicons;

  return (
    <View style={styles.card} accessible accessibilityRole="summary">
      <View style={styles.cardHeader}>
        <View style={styles.leadingIcon}>
          <IconRenderer name={iconSpec.name as any} size={22} color="#2D2D2D" />
        </View>

        <Text style={styles.cardTitle} numberOfLines={1}>
          {title}
        </Text>

        <Pressable
          onPress={onInfo}
          style={styles.infoButton}
          accessibilityRole="button"
          accessibilityLabel={`More info about ${title}`}
          android_ripple={{ color: "#DDD", borderless: true }}
        >
          <Ionicons
            name="information-circle-outline"
            size={20}
            color={COLORS.info}
          />
        </Pressable>
      </View>

      <Pressable
        onPress={onAdd}
        style={({ pressed }) => [
          styles.addButton,
          pressed && { backgroundColor: COLORS.brandGreenDark },
        ]}
        accessibilityRole="button"
        accessibilityLabel={`Add ${title}`}
        android_ripple={{ color: "#98D84A" }}
      >
        <Text style={styles.addText}>ADD</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.background },
  header: {
    paddingHorizontal: 16,
    paddingTop: 70,
    paddingBottom: 16,
    backgroundColor: COLORS.background,
  },
  heroTitle: {
    color: COLORS.textPrimary,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: "800",
  },
  scrollContent: {
    paddingHorizontal: 12,
    paddingBottom: 24,
  },

  card: {
    backgroundColor: COLORS.card,
    borderRadius: 10,
    marginVertical: 8,
    paddingVertical: 14,
    paddingHorizontal: 12,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.12,
        shadowRadius: 6,
      },
      android: { elevation: 3 },
    }),
  },
  cardHeader: {
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  leadingIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: COLORS.iconBg,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  cardTitle: {
    flex: 1,
    color: COLORS.textDark,
    fontSize: 18,
    fontWeight: "bold",
  },
  infoButton: {
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
  },

  addButton: {
    backgroundColor: COLORS.brandGreen,
    borderRadius: 6,
    minHeight: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  addText: {
    color: "#1D2B0E", // dark text over green (adjust for contrast)
    fontSize: 12,
    letterSpacing: 1.2,
    fontWeight: "bold",
  },

  footer: {
    marginTop: 8,
    backgroundColor: "#1A1A1A",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  footerLabel: { color: "#D0D0D0", fontSize: 13, fontWeight: "600" },
  footerValue: { color: "#D0D0D0", fontSize: 13, fontWeight: "600" },
  chipRow: { flexDirection: "row", gap: 8 },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#FFF0C7",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 14,
  },
  chipText: { fontSize: 12, color: "#444", fontWeight: "600" },
});

export default AddBenefits;
``;
