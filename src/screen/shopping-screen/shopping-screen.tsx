import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { addToCart, removeFromCart } from "../../app/cart-slice";

export const ShoppingScreen: React.FC = () => {
  const dispatch = useDispatch();

  const shoppingItems = useSelector((state: RootState) =>
    state.cart.products.filter((p: any) => p.shopping && p.quantity > 0)
  );

  return (
    <View style={{ flex: 1, padding: 20, marginTop: 50 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Xarid savati
      </Text>

      {shoppingItems.length === 0 ? (
        <Text
          style={{
            fontSize: 18,
            color: "gray",
            textAlign: "center",
            marginTop: 50,
          }}
        >
          Savatingiz boʻsh!🛒
        </Text>
      ) : (
        <FlatList
          data={shoppingItems}
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
                <Text
                  style={{ fontSize: 16, fontWeight: "bold", marginTop: 5 }}
                >
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
                  onPress={() => dispatch(removeFromCart(item.id.toString()))}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      color: "#666",
                      marginHorizontal: 10,
                    }}
                  >
                    −
                  </Text>
                </TouchableOpacity>

                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  {item.quantity}
                </Text>

                <TouchableOpacity onPress={() => dispatch(addToCart(item))}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: "#666",
                      marginHorizontal: 10,
                    }}
                  >
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};
