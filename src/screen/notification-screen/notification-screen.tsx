import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          paddingBottom: 20,
          borderBottomWidth: 2,
          borderBottomColor: "#E7E9EC",
        }}
      >
        <View style={{ flexDirection: "row", gap: 15 }}>
          <Ionicons name="notifications" size={24} color="black" />
          <Text
            style={{
              fontFamily: "Overpass",
              fontWeight: "700",
              fontSize: 16,
              lineHeight: 20.26,
            }}
          >
            Notifications
          </Text>
        </View>
        <Text
          style={{
            fontFamily: "Overpass",
            fontWeight: "500",
            fontSize: 13,
            lineHeight: 16.46,
            color: "#1987FB",
          }}
        >
          Clear all
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            gap: 10,
            borderBottomWidth: 2,
            borderBottomColor: "#E7E9EC",
            paddingBottom: 20,
          }}
        >
          <Ionicons name="calendar-number-sharp" size={24} color="black" />
          <View style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <Text
              style={{
                width: 300,
                fontFamily: "Overpass",
                fontWeight: "400",
                fontSize: 14,
                lineHeight: 17,
                color: "#091C3F",
              }}
            >
              The future of professional learning is immersive, communal
              experiences for{" "}
            </Text>
            <Text
              style={{
                fontFamily: "Overpass",
                fontWeight: "400",
                fontSize: 13,
                lineHeight: 16.46,
                color: "#091C3F73",
              }}
            >
              Aug 12, 2020 at 12:08 PM
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            gap: 10,
            borderBottomWidth: 2,
            borderBottomColor: "#E7E9EC",
            paddingBottom: 20,
          }}
        >
          <Ionicons name="notifications-outline" size={24} color="black" />
          <View style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <Text
              style={{
                width: 300,
                fontFamily: "Overpass",
                fontWeight: "400",
                fontSize: 14,
                lineHeight: 17,
                color: "#091C3F",
              }}
            >
              The future of professional learning is immersive, communal
              experiences for{" "}
            </Text>
            <Text
              style={{
                fontFamily: "Overpass",
                fontWeight: "400",
                fontSize: 13,
                lineHeight: 16.46,
                color: "#091C3F73",
              }}
            >
              Aug 12, 2020 at 12:08 PM
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            gap: 10,
            borderBottomWidth: 2,
            borderBottomColor: "#E7E9EC",
            paddingBottom: 20,
          }}
        >
          <Ionicons
            name="notifications-circle-outline"
            size={24}
            color="black"
          />
          <View style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <Text
              style={{
                width: 300,
                fontFamily: "Overpass",
                fontWeight: "400",
                fontSize: 14,
                lineHeight: 17,
                color: "#091C3F",
              }}
            >
              The future of professional learning is immersive, communal
              experiences for{" "}
            </Text>
            <Text
              style={{
                fontFamily: "Overpass",
                fontWeight: "400",
                fontSize: 13,
                lineHeight: 16.46,
                color: "#091C3F73",
              }}
            >
              Aug 12, 2020 at 12:08 PM
            </Text>
          </View>
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
