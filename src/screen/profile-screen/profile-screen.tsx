import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  useMeQuery,
  useUpdateProfileMutation,
} from "../../features/auth/authApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";
import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";

export const ProfileScreen = ({ navigation }: { navigation: any }) => {
  const { data: user } = useMeQuery({});
  const [modalVisible, setModalVisible] = useState(false);
  const [ubdateProfile] = useUpdateProfileMutation();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("accessToken");
      Toast.show({
        type: "success",
        text1: "Chiqish muvaffaqiyatli amalga oshirildi",
      });
      setTimeout(() => {
        navigation.navigate("login");
      }, 2000);
    } catch (error) {
      console.error("Chiqishda xatolik:", error);
      Toast.show({
        type: "error",
        text1: "Chiqishda xatolik yuz berdi",
      });
    }
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleSave = async (data: any) => {
    try {
      await ubdateProfile(data).unwrap();
      Toast.show({
        type: "success",
        text1: "O'zgartirish muvaffaqiyatli amalga oshirildi",
      });
      setModalVisible(false);
    } catch (error) {
      console.error("O'zgartirishda xatolik:", error);
      Toast.show({
        type: "error",
        text1: "O'zgartirishda xatolik yuz berdi",
      });
    }
  };

  const handleUpdateProfile = async (data: any) => {
    try {
      await ubdateProfile({
        id: user?._id,
        body: { username: data.username, fullName: data.fullName },
      }).unwrap();

      Toast.show({
        type: "success",
        text1: "Muvaffaqiyat!",
        text2: "Profil ma'lumotlaringiz yangilandi.",
        visibilityTime: 2000,
        position: "top",
      });
      setModalVisible(false);
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Xatolik!",
        text2: "Profilni yangilashda xato yuz berdi.",
        visibilityTime: 2000,
        position: "top",
      });
      console.log("Profilni yangilashda xatolik:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Mening profilim
        </Text>
        <TouchableOpacity onPress={() => handleLogout()}>
          <Ionicons name="log-out-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
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
            {user?.fullName}
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

      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
          marginTop: 36,
          borderBottomColor: "#000",
          borderBottomWidth: 1,
          paddingBottom: 20,
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
          <Ionicons name="list" size={24} color="black" />
          <Text
            style={{ fontFamily: "Overpass", fontWeight: "500", fontSize: 18 }}
          >
            Profilni tahrirlash
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={18} color="black" />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Profilni tahrirlash</Text>

            <Controller
              name="fullName"
              control={control}
              render={({ field: { onChange, value } }) => (
                <View>
                  <TextInput
                    onChangeText={onChange}
                    style={styles.input}
                    placeholder={`${user?.fullName}ni o'zgartirish`}
                    value={value}
                    placeholderTextColor="#090F4773"
                    autoCapitalize="none"
                  />
                  <Text style={styles.error}>
                    {errors.fullName?.message?.toString()}
                  </Text>
                </View>
              )}
            />

            <Controller
              name="username"
              control={control}
              render={({ field: { onChange, value } }) => (
                <View>
                  <TextInput
                    onChangeText={onChange}
                    style={styles.input}
                    placeholder={`${user?.username}ni o'zgartirish`}
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

            <TouchableOpacity
              onPress={handleSubmit(handleUpdateProfile)}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>Saqlash</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    marginHorizontal: 20,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  modalLabel: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 10,
  },
  modalInput: {
    fontSize: 16,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 5,
  },
  closeButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
