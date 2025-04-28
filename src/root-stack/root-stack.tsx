import { createStackNavigator } from "@react-navigation/stack";
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
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
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
