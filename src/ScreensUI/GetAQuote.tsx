import React, { useEffect } from "react";
import { View, Text, StyleSheet, StatusBar, Image } from "react-native";
import Button from "../component/Button";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation/navigation";

type FormStepsNavProp = NativeStackNavigationProp<
  RootStackParamList,
  "HomeScreen"
>;

const GetAQuote = () => {
  const navigation = useNavigation<FormStepsNavProp>();

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Image source={require("../../assets/tallogo.svg")} style={styles.logo} />
      <Text style={styles.title}>GetAQuote</Text>
      <Button
        onPress={() => navigation.navigate("HomeScreen")}
        label={"GET A QUOTE"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: { width: 120, height: 120, resizeMode: "contain", marginBottom: 24 },
  title: { color: "black", fontSize: 24, fontWeight: "600" },
  caption: { color: "#000000", marginTop: 8 },
});

export default GetAQuote;
