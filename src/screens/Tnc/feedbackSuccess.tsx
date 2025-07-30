import HeaderComponent from "@/components/headerComponent";
import { Box } from "@/components/ui/box";
import { Center } from "@/components/ui/center";
import { Divider } from "@/components/ui/divider";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { IconArrowLeft } from "@tabler/icons-react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useState } from "react";
import type { ColorValue } from "react-native";
import { Image, TouchableOpacity, useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const FeedbackSuccess = () => {
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
        <VStack className="items-center">
          <Box>
            <Image
              source={require("@/assets/images/email.png")}
              style={{
                width: 80,
                height: 80,
                marginTop: 80,
                resizeMode: "contain",
                alignSelf: "center",
              }}
              alt="email"
            />
          </Box>
        </VStack>

        <VStack space="lg" className="p-6 mt-6">
          <Center>
            <Text
              style={{ color: textColor }}
              className="font-bold text-lg mb-2"
            >
              Email terkirim!
            </Text>

            <Text
              style={{ color: textColor }}
              className="text-md mt-8 text-center leading-relaxed"
            >
              Terima kasih! Masukan berharga Anda membantu kami membuat acara
              Lancar lebih baik. Kami akan segera menghubungi Anda kembali.
            </Text>
          </Center>
        </VStack>

        <TouchableOpacity onPress={() => router.push("/(FirstScreen)/book")}>
          <Box className="bg-blue-500 border border-gray-200 rounded-xl shadow-lg m-4 mt-8">
            <VStack space="md" className="p-4">
              <Center>
                <Text className="text-white font-bold text-base">
                  Kembali ke Beranda
                </Text>
              </Center>
            </VStack>
          </Box>
        </TouchableOpacity>
      </LinearGradient>
    </GestureHandlerRootView>
  );
};

export default FeedbackSuccess;
