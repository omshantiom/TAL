import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
} from "react-native";
import RNBootSplash from "react-native-bootsplash";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect } from "react";

import HomeScreen from "./src/ScreensUI/HomeScreen";
import SplashScreen from "./src/ScreensUI/SplashScreen";
import AddBenefits from "./src/ScreensUI/AddBenefits";
import GetAQuote from "./src/ScreensUI/GetAQuote";
import { LifeInsuranceScreen } from "./src/ScreensUI/LifeInsuranceScreen";
import { LifeInsuranceDetailScreen } from "./src/ScreensUI/LifeInsuranceDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* You can directly show Home; the splash covers it for 5s */}
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="GetAQuote" component={GetAQuote} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AddBenefits" component={AddBenefits} />
        <Stack.Screen
          name="LifeInsuranceScreen"
          component={LifeInsuranceScreen}
        />
        <Stack.Screen
          name="LifeInsuranceDetailScreen"
          component={LifeInsuranceDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: "#f7f3f3ff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: 12,
    paddingRight: 20,
  },
  innercontainer: {
    flex: 1,
    width: "90%",
    marginTop: 10,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: "#FFFFFF",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  bottomcontainer: {
    width: "100%",
    //flexDirection:'row',
    marginTop: 10,
    backgroundColor: "#000000",
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 15,
    paddingRight: 10,
  },

  imgcontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    marginTop: 12,
    // If your RN version < 0.71, remove gap and use marginRight below
    gap: 12,
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 8,
    resizeMode: "cover",
    backgroundColor: "#eee",
  },
  imgbottom: {
    width: 200,
    height: 90,
    resizeMode: "cover",
    marginTop: 30,
  },

  scroll: {
    flex: 1, // make ScrollView fill the screen
    backgroundColor: "#fafafa",
  },
  content: {
    padding: 0, // inner padding of the scroll content
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    width: "100%",
    padding: 10,
    fontSize: 16,
    marginEnd: 10,
    marginTop: 10,
  },
  txtheaderStyle: {
    fontSize: 20,
    borderColor: "#000000",
    marginTop: 40,
    fontWeight: "bold",
  },
  txtdesStyle: {
    fontSize: 16,
    borderColor: "#000000",
    marginTop: 20,
  },
  txtdesBoldStyle: {
    fontSize: 16,
    borderColor: "#000000",
    marginTop: 20,
    fontWeight: "bold",
  },
  txtWhitedesBoldStyle: {
    fontSize: 16,
    color: "#FFFFFF",
    marginTop: 20,
    fontWeight: "bold",
  },

  txtdeslineStyle: {
    fontSize: 16,
    borderColor: "#000000",
    marginTop: 20,
    textDecorationLine: "underline",
    textDecorationColor: "green",
    textDecorationStyle: "solid", // 'solid', 'double', 'dotted', 'dashed'
  },
  txtdeslinebottomStyle: {
    fontSize: 16,
    color: "#FFFFFF",
    marginTop: 20,
  },
});
