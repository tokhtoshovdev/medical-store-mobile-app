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
import { useLoginMutation } from "../../features/auth/authApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

export const LoginScreen = ({ navigation }: HomeScreenProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const [login, { isLoading, error }] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    try {
      const res = await login(data).unwrap();

      if (res.token) {
        await AsyncStorage.setItem("accessToken", res.token);
      }

      console.log(res.token);

      Toast.show({
        type: "success",
        text1: "Muvaffaqiyat!",
        text2: "Tizimga muvaffaqiyatli kirdingiz 👌",
        visibilityTime: 2000,
        position: "top",
      });

      setTimeout(() => {
        navigation.navigate("home");
      }, 2000);
    } catch (err) {
      Toast.show({
        type: "error",
        text1: "Xatolik!",
        text2: "Tarmoq bilan bog‘lanishda muammo 😢",
        visibilityTime: 2000,
        position: "top",
      });
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <View>
          <View style={styles.logo}>
            <Image
              style={styles.img}
              source={require("../../../assets/logo.png")}
            />
          </View>
          <Text style={styles.text}>Oson Apteka </Text>
        </View>
        <Text style={styles.text1}>
          Kirish/Ro‘yxatdan o‘tish uchun foydalanuvchi nomi va parolingizni
          kiriting
        </Text>
        <View>
          <Controller
            name="username"
            control={control}
            rules={{ required: "Foydalanuvchi nomini kiriting" }}
            render={({ field: { onChange, value } }) => (
              <View>
                <TextInput
                  onChangeText={onChange}
                  style={styles.input}
                  placeholder="Foydalanuvchi nomi"
                  value={value}
                  placeholderTextColor="#090F4773"
                  autoCapitalize="none"
                />
                <Text style={styles.error}>
                  {errors.username?.message?.toString()}
                </Text>
              </View>
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{ required: "Parol kiriting" }}
            render={({ field: { onChange, value } }) => (
              <View>
                <TextInput
                  onChangeText={onChange}
                  style={styles.input}
                  placeholder="Parol"
                  value={value}
                  placeholderTextColor="#090F4773"
                  secureTextEntry
                />
                <Text style={styles.error}>
                  {errors.password?.message?.toString()}
                </Text>
              </View>
            )}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.button_text}>
              {isLoading ? "Loading..." : "Continue"}
            </Text>
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
    borderRadius: 100,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#3f51b5",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    margin: "auto",
  },
  img: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Overpass",
    fontWeight: "100",
    fontStyle: "italic",
    fontSize: 28,
    lineHeight: 35.45,
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
    backgroundColor: "#4157FF",
    padding: 15,
    marginTop: 40,
  },
  button_text: {
    fontFamily: "Overpass",
    fontWeight: "700",
    fontSize: 20,
    textAlign: "center",
    color: "#FFFFFF",
  },
});
