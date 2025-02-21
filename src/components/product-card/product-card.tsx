import { Image, Text, View } from "react-native";
import { Props } from "./types";
import { Ionicons } from "@expo/vector-icons";

export const ProductCard = ({ img, rs, star, strip, title }: Props) => {
  return (
    <View
      style={{
        width: 159,
        height: 239,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        backgroundColor: "#FFFFFF",
        borderRadius: 9,
      }}
    >
      <View
        style={{
          width: 159,
          height: 147,
          borderRadius: 15,
          backgroundColor: "#EEEEF0",
        }}
      >
        <Image
          source={require("../../../assets/product-img.png")}
          style={{ width: 96, height: 128, margin: "auto", objectFit: "cover" }}
        />
      </View>
      <View style={{ padding: 10, position: "relative" }}>
        <Text
          style={{
            fontFamily: "Overpass",
            fontWeight: "400",
            fontSize: 14,
            lineHeight: 19,
            color: "#090F47",
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontFamily: "Overpass",
            fontWeight: "400",
            fontSize: 16,
            lineHeight: 19,
            color: "#090F47",
            marginTop: 7,
          }}
        >
          {strip}
        </Text>
        <Text
          style={{
            fontFamily: "Overpass",
            fontWeight: "600",
            fontSize: 16,
            lineHeight: 19,
            color: "#090F47",
            marginTop: 7,
          }}
        >
          {rs}
        </Text>
        <View
          style={{
            position: "absolute",
            padding: 6,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            backgroundColor: "#FFC000",
            right: 0,
            top: 50,
            flexDirection: "row",
            gap: 5,
          }}
        >
          <Ionicons name="star" size={16} color="#fff" />
          <Text
            style={{
              fontFamily: "Overpass",
              fontWeight: "700",
              fontSize: 13,
              lineHeight: 16.46,
              color: "#FFFFFF",
            }}
          >
            {star}
          </Text>
        </View>
      </View>
    </View>
  );
};
