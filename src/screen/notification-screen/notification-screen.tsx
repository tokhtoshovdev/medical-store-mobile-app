import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NOTIFICATIONS } from "../../mock";
import { ScrollView } from "react-native-gesture-handler";

export const NotificationScreen = () => {
  const [notifications, setNotifications] = useState(NOTIFICATIONS);

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <ScrollView>
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
              Bildirishnomalar
            </Text>
          </View>
          <TouchableOpacity onPress={clearAllNotifications}>
            <Text
              style={{
                fontFamily: "Overpass",
                fontWeight: "500",
                fontSize: 13,
                lineHeight: 16.46,
                color: "#1987FB",
              }}
            >
              Hammasini tozalang
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            paddingTop: 20,
            paddingBottom: 20,
            marginBottom: 50,
          }}
        >
          {notifications.map((notification) => (
            <View
              key={notification.id}
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
                name={
                  notification.icons as
                    | "calendar-number-sharp"
                    | "notifications-outline"
                    | "notifications-circle-outline"
                }
                size={24}
                color="black"
              />
              <View
                style={{ display: "flex", flexDirection: "column", gap: 5 }}
              >
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
                  {notification.message}
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
                  {notification.time}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    marginHorizontal: 20,
  },
});
