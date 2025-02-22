import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { PRODUCTS } from "../../mock";
import { Ionicons } from "@expo/vector-icons";

export const ProductDetail = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const { id } = route.params;
  const product = PRODUCTS.find((p) => p.id === id);
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff", padding: 16 }}>
      <Ionicons
        name="arrow-back"
        size={24}
        color="#090F47"
        style={{ marginTop: 30 }}
        onPress={() => navigation.goBack()}
      />
      <Image
        source={{ uri: product?.img }}
        style={{
          width: "100%",
          height: 250,
          borderRadius: 10,
          backgroundColor: "#EEEEF0",
          marginTop: 16,
        }}
        resizeMode="cover"
      />

      <View style={{ marginTop: 16 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold", color: "#090F47" }}>
          {product?.title}
        </Text>
        <Text style={{ fontSize: 16, color: "#666", marginTop: 4 }}>
          {product?.category} • {product?.manufacturer}
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 8,
            backgroundColor: "#FFC000",
            padding: 6,
            borderRadius: 20,
            alignSelf: "flex-start",
          }}
        >
          <Ionicons name="star" size={16} color="#fff" />
          <Text
            style={{
              fontSize: 14,
              fontWeight: "700",
              color: "#FFFFFF",
              marginLeft: 5,
            }}
          >
            {product?.rating}
          </Text>
        </View>

        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
            color: "#090F47",
            marginTop: 12,
          }}
        >
          ${product?.price.toFixed(2)}
        </Text>
        <Text style={{ fontSize: 16, color: "#666", marginTop: 4 }}>
          Stock: {product?.stock} available
        </Text>

        <Text
          style={{
            fontSize: 16,
            color: "#333",
            marginTop: 12,
            lineHeight: 22,
          }}
        >
          {product?.description}
        </Text>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            width: 330,
            height: 45,
            borderRadius: 56,
            backgroundColor: "#4157FF",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            marginTop: 70,
          }}
        >
          <Text
            style={{
              fontFamily: "Overpass",
              fontWeight: "700",
              fontSize: 16,
              lineHeight: 20.26,
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 700,
    marginHorizontal: 20,
  },
});
