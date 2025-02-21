import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
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

const products = [
  {
    id: 1,
    img: "../../../assets/product-img.png",
    rs: "Rs.112",
    star: "4",
    strip: "Test Strip",
    title: "Accu-check Active",
  },
  {
    id: 2,
    img: "../../../assets/product-img.png",
    rs: "Rs.112",
    star: "4",
    strip: "Test Strip",
    title: "Accu-check Active",
  },
  {
    id: 3,
    img: "../../../assets/product-img.png",
    rs: "Rs.112",
    star: "4",
    strip: "Test Strip",
    title: "Accu-check Active",
  },
];

const CategoryCard = ({ name, colors }: { name: string; colors: any }) => {
  return (
    <View style={styles.card}>
      <LinearGradient colors={colors} style={styles.circle} />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const image = require("../../../assets/home-swipper.png");
import { ProductCard } from "../../components";

export const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <StatusBar style="auto" />
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
            <Text style={styles.greeting}>
              Welcome to Nilkanth Medical Store
            </Text>
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
        <View
          style={{
            paddingHorizontal: 20,
            marginTop: 20,
          }}
        >
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={{
              width: "auto",
              height: 146,
              borderRadius: 10,
              padding: 30,
            }}
          >
            <Text
              style={{
                width: 131,
                fontFamily: "Overpass",
                fontWeight: "700",
                fontSize: 20,
                lineHeight: 21,
                color: "#1987FB",
              }}
            >
              Save extra on every order
            </Text>
            <Text
              style={{
                width: 118,
                fontFamily: "Overpass",
                fontWeight: "300",
                fontSize: 12,
                lineHeight: 16.36,
                color: "#090F47A6",
              }}
            >
              Etiam mollis metus non faucibus .{" "}
            </Text>
          </ImageBackground>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontFamily: "Overpass",
              fontWeight: "600",
              fontSize: 20,
              lineHeight: 20.26,
              color: "#090F47",
            }}
          >
            Deals of the Day
          </Text>
          <Text
            style={{
              fontFamily: "Overpass",
              fontWeight: "400",
              fontSize: 14,
              lineHeight: 17.72,
              color: "#006AFF",
            }}
          >
            More
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            marginTop: 20,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 16,
            marginBottom: 20,
          }}
        >
          {products.map((product) => (
            <View key={product.id} style={{ width: "47%" }}>
              <ProductCard {...product} />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
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
