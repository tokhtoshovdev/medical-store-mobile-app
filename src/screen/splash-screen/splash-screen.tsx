import React, { useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import { SplashScreenProps } from "./types";
import { StatusBar } from "expo-status-bar";

export const SplashScreen = ({ navigation }: SplashScreenProps) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("walkthrough");
    }, 1000);
  }, [navigation]);

  return (
    <ImageBackground
      source={require("../../../assets/splash-bg.png")}
      style={styles.background}
    >
      <StatusBar style="inverted" />
      <View style={styles.container}>
        <View>
          <View style={styles.logo}>
            <Image source={require("../../../assets/logo.png")} />
          </View>
          <Text style={styles.text}>Oson Apteka </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 74,
    height: 74,
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: "100%",
    margin: "auto",
    marginBottom: 20,
  },
  text: {
    fontFamily: "Overpass",
    fontWeight: "100",
    fontStyle: "italic",
    fontSize: 28,
    lineHeight: 35.45,
    letterSpacing: 0,
    textAlign: "center",
    color: "#fff",
  },
});
