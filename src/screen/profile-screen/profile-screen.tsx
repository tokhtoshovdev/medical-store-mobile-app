import { Image, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>My Profile</Text>
      <View
        style={{
          flexDirection: "row",
          display: "flex",
          gap: 10,
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <Image
          source={require("../../../assets/avatar.jpg")}
          style={{ width: 63, height: 62, borderRadius: 50 }}
        />
        <View style={{}}>
          <Text
            style={{
              fontFamily: "Overpass",
              fontWeight: "400",
              fontSize: 20,
              lineHeight: 25.32,
            }}
          >
            Hi, Rahul kanjariya
          </Text>
          <Text
            style={{
              fontFamily: "Overpass",
              fontWeight: "400",
              fontSize: 14,
              lineHeight: 17.72,
            }}
          >
            Welcome to Nilkanth Medical Store
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 36,
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            borderBottomColor: "#000",
            borderBottomWidth: 1,
            paddingBottom: 20,
          }}
        >
          <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
            <Ionicons name="list" size={24} color="black" />
            <Text
              style={{
                fontFamily: "Overpass",
                fontWeight: "500",
                fontSize: 18,
              }}
            >
              Edit Profile
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="black" />
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            borderBottomColor: "#000",
            borderBottomWidth: 1,
            paddingBottom: 20,
          }}
        >
          <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
            <Ionicons name="options-sharp" size={24} color="black" />
            <Text
              style={{
                fontFamily: "Overpass",
                fontWeight: "500",
                fontSize: 18,
              }}
            >
              My orders
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="black" />
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            borderBottomColor: "#000",
            borderBottomWidth: 1,
            paddingBottom: 20,
          }}
        >
          <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
            <Ionicons name="wallet" size={24} color="black" />
            <Text
              style={{
                fontFamily: "Overpass",
                fontWeight: "500",
                fontSize: 18,
              }}
            >
              Billing
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="black" />
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            borderBottomColor: "#000",
            borderBottomWidth: 1,
            paddingBottom: 20,
          }}
        >
          <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
            <Ionicons name="help" size={24} color="black" />
            <Text
              style={{
                fontFamily: "Overpass",
                fontWeight: "500",
                fontSize: 18,
              }}
            >
              Faq
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="black" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    marginHorizontal: 20,
  },
});
