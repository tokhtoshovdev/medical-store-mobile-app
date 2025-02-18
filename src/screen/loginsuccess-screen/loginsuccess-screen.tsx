import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const LoginsuccessScreen = ({ navigation }: { navigation: any }) => {
  const onSubmit = () => {
    navigation.navigate("home");
  };
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/taddaaa_image.png")} />
      <Text
        style={{
          fontFamily: "Overpass",
          fontWeight: "700",
          fontSize: 24,
          lineHeight: 32,
          textAlign: "center",
          color: "#090F47",
          marginTop: 53,
        }}
      >
        Phone Number Verified
      </Text>
      <Text
        style={{
          width: 275,
          fontFamily: "Overpass",
          fontWeight: "300",
          fontSize: 16,
          lineHeight: 24,
          textAlign: "center",
          marginTop: 20,
        }}
      >
        Congradulations, your phone number has been verified. You can start
        using the app
      </Text>
      <View
        style={{
          alignItems: "center",
          width: "100%",
          marginTop: 70,
        }}
      >
        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.buttonText}>CONTINUE</Text>
        </TouchableOpacity>
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
  button: {
    width: "80%",
    backgroundColor: "#3f51b5",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: "#3f51b5",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    marginTop: 100,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});
