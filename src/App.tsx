import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { RootStack } from "./root-stack";
import { Provider } from "react-redux";
import { store } from "./app/store";

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
