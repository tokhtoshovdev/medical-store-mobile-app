import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const ProductCard = ({ product, navigation }: any) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("product", { id: product.id })}
      style={{ width: "47%" }}
    >
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
            source={{ uri: product.img }}
            style={{
              width: "100%",
              height: "100%",
              margin: "auto",
              objectFit: "cover",
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            }}
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
            {product.title}
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
            {product.price}
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
            {product.stock}
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
              {product.rating}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
