import { createStackNavigator } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  AllProduct,
  LoginScreen,
  ProductDetail,
  SplashScreen,
  VerifyOtpScreen,
  WalkthroughScreen,
} from "../screen";
import { RootTabs } from "../root-tabs";

const Stack = createStackNavigator();

export const RootStack = () => {
  const [initialRoute, setInitialRoute] = useState<string | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem("accessToken");
      if (token) {
        setInitialRoute("home");
      } else {
        setInitialRoute("SplashScreen");
      }
    };

    checkAuth();
  }, []);

  if (initialRoute === null) {
    return null;
  }

  return (
    <Stack.Navigator
      initialRouteName={initialRoute}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="walkthrough" component={WalkthroughScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="home" component={RootTabs} />
      <Stack.Screen name="allProducts" component={AllProduct} />
      <Stack.Screen name="product" component={ProductDetail} />
    </Stack.Navigator>
  );
};
