import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import { ProductCard } from "../../components";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

export const AllProduct = ({ navigation }: { navigation: any }) => {
  const products = useSelector((state: RootState) => state.cart.products);

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            marginBottom: 20,
          }}
        >
          <Ionicons
            name="arrow-back"
            size={24}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.title}>All Products</Text>
        </View>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-between",
            gap: 16,
            marginBottom: 20,
          }}
          contentContainerStyle={{ paddingBottom: 20 }}
          renderItem={({ item }) => (
            <ProductCard product={item} navigation={navigation} />
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    marginHorizontal: 20,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
