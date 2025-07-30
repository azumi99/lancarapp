import HeaderComponent from "@/components/headerComponent";
import { Box } from "@/components/ui/box";
import { Center } from "@/components/ui/center";
import { Divider } from "@/components/ui/divider";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import {
  IconArrowLeft,
  IconInfoCircleFilled,
} from "@tabler/icons-react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useState } from "react";
import type { ColorValue } from "react-native";
import { TouchableOpacity, useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const HapusAkunScreen = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const gradientColors: [ColorValue, ColorValue] = isDark
    ? ["#1C1C1C", "#1C1C1C"]
    : ["#ffffff", "#ffffff"];

  const textColor = isDark ? "white" : "#1f2937"; // Tailwind gray-800
  const [showActionsheet, setShowActionsheet] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <HeaderComponent
        title="Hapus Akun Saya"
        iconLeft={IconArrowLeft}
        iconRight={null}
        handleLeft={() => {}}
        handleRight={() => {}}
        boorderless={true}
      />
      <Divider />
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        className="flex-1"
      >
        <VStack className="items-center mt-10">
          <Box>
            <IconInfoCircleFilled
              size={64}
              color="#EF4444"
              className="text-gray-700"
            />
          </Box>
        </VStack>

        <VStack space="lg" className="p-4 mx-8 mt-6">
          <Center>
            <Text
              style={{ color: textColor }}
              className="font-bold text-lg mb-2 text-center"
            >
              Sekadar informasi, dengan menghapus akun Anda:
            </Text>
          </Center>
          <Text style={{ color: textColor }} className="text-md mt-2 ">
            Semua data keuangan Anda akan dihapus secara permanen.
          </Text>
          <Text style={{ color: textColor }} className="text-md mt-1 ">
            Anda akan kehilangan akses ke semua catatan dan anggaran.
          </Text>
          <Text style={{ color: textColor }} className="text-md mt-1 ">
            Tindakan ini tidak dapat dibatalkan.
          </Text>

          <Text
            style={{ color: textColor }}
            className="text-sm mt-8  leading-relaxed"
          >
            Kalau kamu tetap ingin hapus akun, pastikan semua catatan keuanganmu
            udah beres dan nggak ada masalah yang belum diselesaikan, ya!
          </Text>
        </VStack>

        <TouchableOpacity
          onPress={() => router.push("/(tabs)/profile/HapusAkun/otp")}
        >
          <Box className="bg-blue-500 border border-gray-200 rounded-xl shadow-lg m-4 mt-8">
            <VStack space="md" className="p-4">
              <Center>
                <Text className="text-white font-bold text-base">Next</Text>
              </Center>
            </VStack>
          </Box>
        </TouchableOpacity>
      </LinearGradient>
    </GestureHandlerRootView>
  );
};

export default HapusAkunScreen;
