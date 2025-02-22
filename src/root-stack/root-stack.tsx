import { createStackNavigator } from "@react-navigation/stack";
import {
  AllProduct,
  LoginScreen,
  LoginsuccessScreen,
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
      initialRouteName="splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="splash" component={SplashScreen} />
      <Stack.Screen name="walkthrough" component={WalkthroughScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="verify" component={VerifyOtpScreen} />
      <Stack.Screen name="loginsuccess" component={LoginsuccessScreen} />
      <Stack.Screen name="home" component={RootTabs} />
      <Stack.Screen name="allProducts" component={AllProduct} />
      <Stack.Screen name="product" component={ProductDetail} />
    </Stack.Navigator>
  );
};
