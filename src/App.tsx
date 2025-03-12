import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { RootStack } from "./root-stack";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
        <RootStack />
      </NavigationContainer>
    </Provider>
  );
}
