import React, { useEffect } from "react";
import { View, Text, StyleSheet, StatusBar, Image } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Replace Splash so user cannot go back to it
      navigation.replace("GetAQuote");
    }, 5000);

    // Clean up if user navigates away early
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      {/* Your logo or animation */}
      <Image source={require("../../assets/tallogo.svg")} style={styles.logo} />
      <Text style={styles.title}>Welcome TAL</Text>
      <Text style={styles.caption}>Loading…</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: { width: 120, height: 120, resizeMode: "contain", marginBottom: 24 },
  title: { color: "white", fontSize: 24, fontWeight: "600" },
  caption: { color: "#BBBBBB", marginTop: 8 },
});

export default SplashScreen;
