import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeScreen,
  NotificationScreen,
  ProfileScreen,
  ShoppingScreen,
} from "../screen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const RootTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "home") {
            iconName = "home";
          } else if (route.name === "notification") {
            iconName = "notifications";
          } else if (route.name === "shopping") {
            iconName = "cart";
          } else if (route.name === "profile") {
            iconName = "person";
          } else {
            throw new Error(`Unknown route name: ${route.name}`);
          }

          return (
            <Ionicons
              name={iconName as "home" | "notifications" | "cart" | "person"}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="notification" component={NotificationScreen} />
      <Tab.Screen name="shopping" component={ShoppingScreen} />
      <Tab.Screen name="profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
