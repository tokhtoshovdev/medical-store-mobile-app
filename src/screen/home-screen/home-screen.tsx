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
  { id: "1", name: "Stomatologiya", colors: ["#ff758c", "#ff7eb3"] },
  { id: "2", name: "Salomatlik", colors: ["#00c6a9", "#00e676"] },
  { id: "3", name: "Homeopatiya ", colors: ["#ff8c00", "#ffb74d"] },
];

const CategoryCard = ({ name, colors }: { name: string; colors: any }) => {
  return (
    <View style={styles.card}>
      <LinearGradient colors={colors} style={styles.circle} />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

type RootStackParamList = {
  notification: undefined;
  home: undefined;
  shopping: undefined;
  allProducts: undefined;
  product: {
    id: number;
  };
};

const image = require("../../../assets/home-swipper.png");
import { StackScreenProps } from "@react-navigation/stack";
import { ProductCard } from "../../components";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

export const HomeScreen = ({
  navigation,
}: StackScreenProps<RootStackParamList>) => {
  const products = useSelector((state: RootState) => state.cart.products);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <LinearGradient colors={["#4facfe", "#00f2fe"]} style={styles.header}>
          <View style={styles.headerContent}>
            <Image
              source={require("../../../assets/logo-1.png")}
              style={styles.avatar}
            />
            <View style={styles.iconContainer}>
              <Ionicons
                name="notifications"
                onPress={() => navigation.navigate("notification")}
                size={30}
                color="#fff"
              />
              <Ionicons
                name="cart"
                onPress={() => navigation.navigate("shopping")}
                size={30}
                color="#fff"
              />
            </View>
          </View>
          <View style={styles.greetingContainer}>
            <Text style={styles.greeting1}>Salom hurmatli haridor</Text>
            <Text style={styles.greeting}>
              Oson Apteka do'koniga xush kelibsiz
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
            placeholder="mahsulotlarini qidiring"
            style={styles.searchInput}
          />
        </View>
        <View style={styles.categoryWrapper}>
          <Text style={styles.categoryTitle}>Eng yaxshi toifalar</Text>
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
                width: 151,
                fontFamily: "Overpass",
                fontWeight: "700",
                fontSize: 20,
                lineHeight: 21,
                color: "#1987FB",
              }}
            >
              Har bir buyurtma uchun 5% tejang
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
              .{" "}
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
            Kunning takliflari
          </Text>
          <Text
            style={{
              fontFamily: "Overpass",
              fontWeight: "400",
              fontSize: 14,
              lineHeight: 17.72,
              color: "#006AFF",
            }}
            onPress={() => navigation.navigate("allProducts")}
          >
            Ko'proq
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
          {products.slice(0, 4).map((product: any) => (
            <ProductCard
              key={product.id}
              product={product}
              navigation={navigation}
            />
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
    marginBottom: 50,
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
    paddingTop: 5,
    paddingBottom: 5,
  },
  categoryWrapper: {
    marginTop: 20,
  },
  categoryTitle: {
    fontFamily: "Overpass",
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 20.26,
    marginBottom: 10,
    marginLeft: 20,
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
