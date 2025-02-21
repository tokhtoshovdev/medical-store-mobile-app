import { createStackNavigator } from "@react-navigation/stack";
import {
  LoginScreen,
  LoginsuccessScreen,
  SplashScreen,
  VerifyOtpScreen,
  WalkthroughScreen,
} from "../screen";
import { RootTabs } from "../root-tabs";

const Stack = createStackNavigator();

export const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="splash" component={SplashScreen} />
      <Stack.Screen name="walkthrough" component={WalkthroughScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="verify" component={VerifyOtpScreen} />
      <Stack.Screen name="loginsuccess" component={LoginsuccessScreen} />
      <Stack.Screen name="home" component={RootTabs} />
    </Stack.Navigator>
  );
};
