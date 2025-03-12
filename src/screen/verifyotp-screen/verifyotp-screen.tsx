import { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { StatusBar } from "expo-status-bar";

export const VerifyOtpScreen = ({ navigation }: { navigation: any }) => {
  const { control, handleSubmit } = useForm();
  const inputRefs = useRef<Array<TextInput | null>>(new Array(6).fill(null));
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (
    text: string,
    index: number,
    onChange: (value: string) => void
  ) => {
    if (text.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    onChange(text);

    if (text && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const onSubmit = (data: any) => {
    if (data.otp) {
      console.log("OTP Submitted:", data);
      navigation.navigate("loginsuccess");
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#4facfe" />
      <View>
        <Text style={styles.text}>Tasdiqlash kodini kiriting</Text>
        <Text style={styles.text1}>
          Biz hozirgina +91 998 999 99 99 telefon orqali tasdiqlash kodini
          yubordik
        </Text>
        <View style={styles.inputContainer}>
          {otp.map((_, index) => (
            <Controller
              key={index}
              control={control}
              name={`otp[${index}]`}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <View>
                  <TextInput
                    ref={(el) => (inputRefs.current[index] = el)}
                    style={styles.input}
                    keyboardType="numeric"
                    maxLength={1}
                    value={value}
                    onChangeText={(text) => handleChange(text, index, onChange)}
                    onKeyPress={(e) => handleKeyPress(e, index)}
                  />
                </View>
              )}
            />
          ))}
        </View>
        <View style={{ paddingHorizontal: 25 }}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.buttonText}>KOD YUBORING</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.text2}>Tasdiqlash kodi 00:59 da tugaydi</Text>
        <Text style={styles.resendText}>Kodni qayta yuborish</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    paddingHorizontal: 25,
  },
  text: {
    fontFamily: "Overpass",
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 32,
    textAlign: "left",
  },
  text1: {
    width: 300,
    marginTop: 10,
    fontFamily: "Overpass",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 21,
    color: "#090F4773",
  },
  text2: {
    marginTop: 40,
    fontFamily: "Overpass",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 21,
    color: "#090F4773",
    textAlign: "center",
    marginLeft: 10,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  input: {
    width: 40,
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: "#000",
    textAlign: "center",
    fontSize: 20,
    marginHorizontal: 5,
  },
  button: {
    backgroundColor: "#3f51b5",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: "#3f51b5",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    marginTop: 30,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  resendText: {
    fontFamily: "Overpass",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center",
    color: "#4157FF",
    marginTop: 20,
  },
});
