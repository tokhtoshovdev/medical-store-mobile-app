import { StyleSheet, Text, View } from "react-native";

export const ShoppingScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>ShoppingScreen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
