import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            source={require("../../../assets/avatar.jpg")}
            style={styles.avatar}
          />
          <View style={styles.iconContainer}>
            <Ionicons name="notifications" size={30} color="#fff" />
            <Ionicons name="cart" size={30} color="#fff" />
          </View>
        </View>
        <View style={{ width: "90%", margin: "auto", marginTop: -20 }}>
          <Text style={styles.greeting1}>Hi, Rahul</Text>
          <Text style={styles.greeting}>Welcome to Nilkanth Medical Store</Text>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={24}
          color="gray"
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Search Medicine & Healthcare products"
          style={styles.searchInput}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    width: "100%",
    height: 250,
    backgroundColor: "blue",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    margin: "auto",
    marginTop: 50,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  iconContainer: {
    flexDirection: "row",
    gap: 24,
  },
  greeting: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 10,
  },
  greeting1: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 56,
    borderWidth: 2,
    width: 327,
    height: 50,
    paddingLeft: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    top: -30,
    marginLeft: 30,
  },
  searchIcon: {
    position: "absolute",
    left: 16,
  },
  searchInput: {
    flex: 1,
    paddingLeft: 30,
  },
});
