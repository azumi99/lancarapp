import { router } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const BeforeLogin = () => {
  return (
    <>
      <Image
        style={{ marginTop: -100 }}
        size="2xl"
        source={require("@/assets/images/beforeLogin.png")}
        alt="Book illustration"
        resizeMode="contain"
      />
      <View className="items-center px-2">
        <Text className="text-center text-md font-semibold">
          Masuk atau buat akun untuk menyimpan progres{"\n"}
          kamu dan menjaga data tetap aman di semua{"\n"}
          perangkat.
        </Text>
      </View>

      <TouchableOpacity
        className="bg-blue-500 py-2 rounded-xl w-full mt-5"
        onPress={() => router.push("/profile/loginBarrier")}
      >
        <Text className="text-center text-white font-semibold text-lg">
          Masuk / Daftar
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default BeforeLogin;
