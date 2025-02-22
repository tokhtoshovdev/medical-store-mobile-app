import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import { PRODUCTS } from "../../mock";
import { ProductCard } from "../../components";
import { Ionicons } from "@expo/vector-icons";

export const AllProduct = ({ navigation }: { navigation: any }) => {
  return (
    <ScrollView>
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
          data={PRODUCTS}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between", gap: 16 }}
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
