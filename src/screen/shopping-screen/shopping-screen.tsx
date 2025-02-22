import React, { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { PRODUCTS } from "../../mock";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  shopping: boolean; // shopping flag qo‘shildi
}

export const ShoppingScreen: React.FC = () => {
  const [cart, setCart] = useState<{ [key: string]: number }>({});

  const addToCart = (id: string): void => {
    setCart((prevCart) => ({ ...prevCart, [id]: (prevCart[id] || 0) + 1 }));
  };

  const removeFromCart = (id: string): void => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[id] > 1) {
        updatedCart[id] -= 1;
      } else {
        delete updatedCart[id];
      }
      return updatedCart;
    });
  };

  const filteredProducts = PRODUCTS.filter((product) => product.shopping);

  return (
    <View style={{ flex: 1, padding: 20, marginTop: 50 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Shopping Cart
      </Text>
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 10,
              backgroundColor: "#f8f8f8",
              borderRadius: 10,
              marginBottom: 10,
            }}
          >
            <Image
              source={{ uri: item.img }}
              style={{ width: 60, height: 60, borderRadius: 5 }}
            />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                {item.title}
              </Text>
              <Text style={{ color: "gray", fontSize: 14 }}>
                {item.description.slice(0, 30)}
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 5 }}>
                Rs.{item.price}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#e0e0ff",
                borderRadius: 20,
                paddingHorizontal: 10,
                paddingVertical: 5,
              }}
            >
              <TouchableOpacity
                onPress={() => removeFromCart(item?.id.toString())}
              >
                <Text
                  style={{ fontSize: 20, color: "#666", marginHorizontal: 10 }}
                >
                  −
                </Text>
              </TouchableOpacity>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                {cart[item.id] || 1}
              </Text>
              <TouchableOpacity
                onPress={() => removeFromCart(item?.id.toString())}
              >
                <Text
                  style={{ fontSize: 20, color: "#666", marginHorizontal: 10 }}
                >
                  +
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};
