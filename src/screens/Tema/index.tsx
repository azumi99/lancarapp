import HeaderComponent from "@/components/headerComponent";
import SafeAreaCustom from "@/components/safeArea";
import { Box } from "@/components/ui/box";
import { Center } from "@/components/ui/center";
import { Divider } from "@/components/ui/divider";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { IconArrowLeft } from "@tabler/icons-react-native";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const themes = [
  {
    key: "system",
    label: "Sistem",
    image: require("@/assets/images/system.png"),
  },
  {
    key: "light",
    label: "Terang",
    image: require("@/assets/images/light.png"),
  },
  { key: "dark", label: "Gelap", image: require("@/assets/images/dark.png") },
];

const TemaScreen = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const [selectedTheme, setSelectedTheme] = useState("system");

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaCustom>
        <HeaderComponent
          title="Pilih Tema"
          iconLeft={IconArrowLeft}
          iconRight={null}
          handleLeft={() => router.back()}
          handleRight={() => {}}
          boorderless={true}
        />
        <Divider />
        <ScrollView className="flex-1 px-4 py-5">
          <VStack space="xl">
            {/* Baris pertama */}
            <HStack justifyContent="space-between" space="md">
              {themes.slice(0, 2).map((item) => (
                <TouchableOpacity
                  key={item.key}
                  onPress={() => setSelectedTheme(item.key)}
                >
                  <Box
                    borderWidth={2}
                    borderColor={
                      selectedTheme === item.key ? "#1D4ED8" : "transparent"
                    }
                    borderRadius={12}
                    p={1}
                  >
                    <Center>
                      <Image
                        source={item.image}
                        style={{ width: 150, height: 100, borderRadius: 8 }}
                        resizeMode="contain"
                      />
                      <Text mt="$2">{item.label}</Text>
                    </Center>
                  </Box>
                </TouchableOpacity>
              ))}
            </HStack>

            {/* Baris kedua */}
            <HStack justifyContent="space-between" space="md">
              {themes.slice(2, 4).map((item) => (
                <TouchableOpacity
                  key={item.key}
                  onPress={() => setSelectedTheme(item.key)}
                >
                  <Box
                    borderWidth={2}
                    borderColor={
                      selectedTheme === item.key ? "#1D4ED8" : "transparent"
                    }
                    borderRadius={12}
                    p={1}
                  >
                    <Center>
                      <Image
                        source={item.image}
                        style={{ width: 150, height: 100, borderRadius: 8 }}
                        resizeMode="contain"
                      />
                      <Text mt="$2">{item.label}</Text>
                    </Center>
                  </Box>
                </TouchableOpacity>
              ))}
            </HStack>
          </VStack>
        </ScrollView>
      </SafeAreaCustom>
    </GestureHandlerRootView>
  );
};

export default TemaScreen;
