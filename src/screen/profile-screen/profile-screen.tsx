import { Image, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Mening profilim</Text>
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
          source={require("../../../assets/logo-1.png")}
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
            Qulsoatova Iroda
          </Text>
          <Text
            style={{
              fontFamily: "Overpass",
              fontWeight: "400",
              fontSize: 14,
              lineHeight: 17.72,
            }}
          >
            Oson Aptekaga Xush kelibsiz
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
              Profilni tahrirlash
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
              Mening buyurtmalarim
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
              Hisob-kitob
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
              Qisqa Savol javoblar
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
