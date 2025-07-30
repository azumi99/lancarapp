import CustomActionsheet from "@/components/customActionsheet";
import BeforeLogin from "@/components/headerSetting/beforeLogin";
import SafeAreaCustom from "@/components/safeArea";
import { Button, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { VStack } from "@/components/ui/vstack";
import {
  IconAdOff,
  IconCategory2,
  IconCoin,
  IconDots,
  IconLanguage,
  IconMail,
  IconNumber123,
  IconPalette,
  IconPaperclip,
  IconSettings2,
  IconStar,
} from "@tabler/icons-react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  ColorValue,
  Image,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";

const ProfileScreen = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const gradientColors: [ColorValue, ColorValue] = isDark
    ? ["#0E0E0E", "#1C1C1C"]
    : ["#DAE7FF", "#FFFFFF"];
  const [action, setAction] = useState(false);
  const handleClose = () => setAction(false);
  const [rateUs, setRateUs] = useState(false);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaCustom>
        <ScrollView className="flex-1 px-6 py-10">
          <View className="items-center">
            <BeforeLogin />
          </View>
          <View className="items-center px-2">
            <Text className="text-center  ">
              Masuk atau buat akun untuk menyimpan progres kamu dan menjaga data
              tetap aman di semua perangkat.
            </Text>
          </View>

          <VStack space="md" className="mt-10">
            <TouchableOpacity
              className="bg-blue-500 py-2 rounded-xl w-full"
              onPress={() => router.push("/profile/loginBarrier")}
            >
              <Text className="text-center text-white font-semibold text-lg">
                Masuk / Daftar
              </Text>
            </TouchableOpacity>

            {/* Baris 1 */}
            {/* Baris 1 */}
            <HStack justifyContent="space-between" className="mx-2 mt-10">
              <VStack className="flex-1 items-center">
                <TouchableOpacity className="items-center">
                  <IconCategory2 size={32} color="#4B5563" />
                  <Text className="text-center mt-2">
                    Pengaturan{"\n"}Kategori
                  </Text>
                </TouchableOpacity>
              </VStack>

              <VStack className="flex-1 items-center">
                <TouchableOpacity
                  className="items-center"
                  onPress={() => router.push("/profile/mataUang")}
                >
                  <IconCoin size={32} color="#4B5563" />
                  <Text className="text-center mt-2">Mata Uang</Text>
                </TouchableOpacity>
              </VStack>

              <VStack className="flex-1 items-center">
                <TouchableOpacity
                  className="items-center"
                  onPress={() => router.push("/profile/bahasa")}
                >
                  <IconLanguage size={32} color="#4B5563" />
                  <Text className="text-center mt-2">Bahasa</Text>
                </TouchableOpacity>
              </VStack>
            </HStack>

            {/* Baris 2 */}
            <HStack justifyContent="space-between" className="mx-2 mt-10">
              <VStack className="flex-1 items-center">
                <TouchableOpacity
                  className="items-center"
                  onPress={() => router.push("/profile/tema")}
                >
                  <IconPalette size={32} color="#4B5563" />
                  <Text className="text-center mt-2">Tema</Text>
                </TouchableOpacity>
              </VStack>

              <VStack className="flex-1 items-center">
                <TouchableOpacity
                  className="items-center"
                  onPress={() => router.push("/profile/formatAngka")}
                >
                  <IconNumber123 size={32} color="#4B5563" />
                  <Text className="text-center mt-2">
                    Format Tampilan{"\n"}Angka
                  </Text>
                </TouchableOpacity>
              </VStack>

              <VStack className="flex-1 items-center">
                <TouchableOpacity
                  className="items-center"
                  onPress={() => router.push("/profile/pengaturan")}
                >
                  <IconSettings2 size={32} color="#4B5563" />
                  <Text className="text-center mt-2">Pengaturan</Text>
                </TouchableOpacity>
              </VStack>
            </HStack>

            {/* Baris 3 */}
            <HStack justifyContent="space-between" className="mx-2 mt-10">
              <VStack className="flex-1 items-center">
                <TouchableOpacity
                  className="items-center"
                  onPress={() => setRateUs(true)}
                >
                  <IconStar size={32} color="#4B5563" />
                  <Text className="text-center mt-2">Nilai Aplikasi</Text>
                </TouchableOpacity>
              </VStack>

              <VStack className="flex-1 items-center">
                <TouchableOpacity className="items-center">
                  <IconAdOff size={32} color="#4B5563" />
                  <Text className="text-center mt-2">Blokir Iklan</Text>
                </TouchableOpacity>
              </VStack>

              {/* Spacer agar tetap sejajar */}
              <VStack className="flex-1" />
            </HStack>

            <VStack
              space="lg"
              className="mt-10"
              style={{
                marginBottom: 150,
              }}
            >
              <LinearGradient
                colors={gradientColors}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                className="flex-1 rounded-2xl mt-50"
              >
                <HStack
                  style={{ justifyContent: "space-between" }}
                  className="m-4 "
                >
                  <VStack className="w-80">
                    <Text className="text-bold text-md">
                      Rekomendasikan ke Teman
                    </Text>
                    <Text className="text-sm text-gray-400">
                      Suka dengan Aplikasi ini? Ayo rekomendasikan ke teman!
                    </Text>

                    <TouchableOpacity
                      onPressIn={() => setAction(true)}
                      className="bg-blue-500 py-2 rounded-md w-1/2 mt-5"
                    >
                      <Text className="text-center text-white font-semibold text-sm">
                        Tap Disini
                      </Text>
                    </TouchableOpacity>
                  </VStack>
                  <VStack
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      flex: 1,
                    }}
                  >
                    <Image
                      size="xs"
                      source={require("@/assets/images/auto-added.png")}
                      alt="Book illustration"
                      resizeMode="contain"
                    />
                  </VStack>
                </HStack>
              </LinearGradient>
            </VStack>
          </VStack>
        </ScrollView>
      </SafeAreaCustom>

      <>
        <CustomActionsheet
          showActionsheet={action}
          handleClose={() => setAction(false)}
          titleActionsheet="Bagikan"
        >
          <VStack space="lg">
            {/* Baris Sosial Media */}
            <HStack
              justifyContent="space-around"
              alignItems="center"
              className="mt-4"
            >
              {[
                {
                  img: require("@/assets/images/whatsapp.png"),
                  label: "WhatsApp",
                },
                {
                  img: require("@/assets/images/telegram.png"),
                  label: "Telegram",
                },
                { img: require("@/assets/images/line.png"), label: "Line" },
                {
                  img: require("@/assets/images/instagram.png"),
                  label: "Instagram",
                },
              ].map((item, index) => (
                <VStack key={index} flex={1} alignItems="center" space="xs">
                  <Image
                    source={item.img}
                    resizeMode="contain"
                    style={{ width: 40, height: 40 }}
                  />
                  <Text fontSize={12} textAlign="center" color="#4B5563">
                    {item.label}
                  </Text>
                </VStack>
              ))}
            </HStack>

            {/* Baris Lainnya */}
            <HStack alignItems="center" className="mt-4">
              {[
                { icon: IconMail, label: "Email" },
                { icon: IconPaperclip, label: "Copy" },
                { icon: IconDots, label: "More" },
                null, // <-- Spacer visible
              ].map((item, index) => (
                <VStack key={index} flex={1} alignItems="center" space="xs">
                  {item ? (
                    <>
                      <item.icon size={28} color="#4B5563" />
                      <Text fontSize={12} textAlign="center" color="#4B5563">
                        {item.label}
                      </Text>
                    </>
                  ) : (
                    // Spacer
                    <View style={{ width: 40, height: 40 }} />
                  )}
                </VStack>
              ))}
            </HStack>
          </VStack>
        </CustomActionsheet>

        <CustomActionsheet
          showActionsheet={rateUs}
          titleActionsheet=""
          showDivider={false}
        >
          <VStack space="lg">
            <Image
              style={{ width: 361, height: 180 }}
              size="2xl"
              source={require("@/assets/images/objects.png")}
              alt="Book illustration"
              resizeMode="contain"
            />
            <Text className="font-bold text-xl text-center">
              Merasa terbantu dengan Lancar? Nilai kami berdasarkan pengalaman
              Anda.
            </Text>

            <Button
              className="bg-blue-500 rounded-xl w-full"
              size="md"
              variant="solid"
              action="primary"
            >
              <ButtonText>Ya, Tinggalkan Penilaian</ButtonText>
            </Button>

            <Button
              className="rounded-xl w-full"
              size="md"
              variant="outline"
              action="secondary"
            >
              <ButtonText>Nanti Saja</ButtonText>
            </Button>
          </VStack>
        </CustomActionsheet>
      </>
    </GestureHandlerRootView>
  );
};

export default ProfileScreen;
