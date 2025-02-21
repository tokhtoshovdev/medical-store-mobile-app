import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const categories = [
  { id: "1", name: "Dental", colors: ["#ff758c", "#ff7eb3"] },
  { id: "2", name: "Wellness", colors: ["#00c6a9", "#00e676"] },
  { id: "3", name: "Homeo", colors: ["#ff8c00", "#ffb74d"] },
  { id: "4", name: "Eye care", colors: ["#007bff", "#4facfe"] },
];

const CategoryCard = ({ name, colors }: { name: string; colors: any }) => {
  return (
    <View style={styles.card}>
      <LinearGradient colors={colors} style={styles.circle} />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient colors={["#4facfe", "#00f2fe"]} style={styles.header}>
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
        <View style={styles.greetingContainer}>
          <Text style={styles.greeting1}>Hi, Rahul</Text>
          <Text style={styles.greeting}>Welcome to Nilkanth Medical Store</Text>
        </View>
      </LinearGradient>
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
      <View style={styles.categoryWrapper}>
        <Text style={styles.categoryTitle}>Top Categories</Text>
        <FlatList
          horizontal
          data={categories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CategoryCard name={item.name} colors={item.colors} />
          )}
          contentContainerStyle={styles.list}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F5",
  },
  header: {
    width: "100%",
    height: 250,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  greetingContainer: {
    marginTop: 10,
  },
  greeting1: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
  greeting: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 56,
    borderWidth: 2,
    width: "90%",
    height: 50,
    paddingLeft: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    alignSelf: "center",
    marginTop: -25,
  },
  searchIcon: {
    position: "absolute",
    left: 16,
  },
  searchInput: {
    flex: 1,
    paddingLeft: 30,
  },
  categoryWrapper: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  categoryTitle: {
    fontFamily: "Overpass",
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 20.26,
    marginBottom: 10,
  },
  list: {
    paddingHorizontal: 10,
  },
  card: {
    width: 73,
    height: 120,
    backgroundColor: "#fff",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  circle: {
    width: 54,
    height: 58,
    marginBottom: 10,
    borderRadius: 50,
    marginTop: 10,
  },
  text: {
    fontFamily: "Overpass",
    fontWeight: "300",
    fontSize: 11,
    lineHeight: 13.93,
    textAlign: "center",
    marginBottom: 30,
  },
});
