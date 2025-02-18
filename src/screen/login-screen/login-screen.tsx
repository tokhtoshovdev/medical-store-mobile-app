import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { HomeScreenProps, onSubmitProps } from "./types";
import { Controller, FieldValues, useForm } from "react-hook-form";

export const LoginScreen = ({ navigation }: HomeScreenProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    const phoneNumber = data.phone_number as string;
    navigation.navigate("verify");
  };
  return (
    <View style={styles.container}>
      <View>
        <View>
          <View style={styles.logo}>
            <Image source={require("../../../assets/logo.png")} />
          </View>
          <Text style={styles.text}>Nilkanth Medical </Text>
        </View>
        <Text style={styles.text1}>
          Please Enter your Mobile Number to Login/Sign Up
        </Text>
        <View>
          <Controller
            name="phone_number"
            control={control}
            rules={{ required: "Telefon raqam kiriting" }}
            render={({ field: { onChange, value } }) => (
              <View>
                <TextInput
                  onChangeText={onChange}
                  style={styles.input}
                  placeholder="Telefon raqam kiriting"
                  value={value}
                  placeholderTextColor="#090F4773"
                  maxLength={13}
                  keyboardType="phone-pad"
                  textContentType="telephoneNumber"
                  autoComplete="tel"
                />
                <Text style={styles.error}>
                  {errors.phone_number?.message?.toString()}
                </Text>
              </View>
            )}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.button_text}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
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
  },
  text1: {
    width: 255,
    fontFamily: "Overpass",
    fontWeight: "300",
    fontSize: 16,
    lineHeight: 24,
    marginTop: 86,
  },
  input: {
    width: 330,
    borderRadius: 14,
    borderWidth: 1,
    color: "#090F4773",
    borderStyle: "solid",
    fontFamily: "Overpass",
    fontWeight: "400",
    fontSize: 24,
    lineHeight: 30.38,
    paddingLeft: 10,
    marginTop: 36,
  },
  error: {
    color: "red",
    marginLeft: 5,
    marginTop: 5,
    fontSize: 16,
  },
  button: {
    width: 330,
    borderRadius: 56,
    color: "#fff",
    backgroundColor: "#4157FF",
    padding: 15,
    marginTop: 40,
  },
  button_text: {
    fontFamily: "Overpass",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 20.26,
    letterSpacing: 0,
    textAlign: "center",
    color: "#FFFFFF",
  },
});
