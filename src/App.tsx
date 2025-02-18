import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { RootStack } from "./root-stack";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      <RootStack />
    </NavigationContainer>
  );
}
