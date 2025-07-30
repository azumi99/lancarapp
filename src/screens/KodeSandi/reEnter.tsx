import HeaderComponent from "@/components/headerComponent";
import SafeAreaCustom from "@/components/safeArea";
import { Box } from "@/components/ui/box";
import { Divider } from "@/components/ui/divider";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { IconArrowLeft } from "@tabler/icons-react-native";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Dimensions, Image, Pressable, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const screenWidth = Dimensions.get("window").width;

const ReEnter = () => {
  const [pin, setPin] = useState<string>("");

  const handlePress = (value: string) => {
    if (pin.length < 4) {
      setPin(pin + value);
    }
  };

  const handleDelete = () => {
    setPin(pin.slice(0, -1));
  };

  useEffect(() => {
    if (pin.length === 4) {
      setTimeout(() => {
        router.push("/(tabs)/profile/kodeSandi");
      }, 100);
    }
  }, [pin]);

  const renderDots = () => (
    <HStack justifyContent="center" space="lg" mt={32} mb={40}>
      {Array(4)
        .fill("")
        .map((_, index) => (
          <Box
            key={index}
            width={16}
            height={16}
            borderRadius={999}
            backgroundColor={pin.length > index ? "#0F172A" : "#E2E8F0"}
          />
        ))}
    </HStack>
  );

  const renderKeypad = () => {
    const keys = [
      ["1", "2", "3"],
      ["4", "5", "6"],
      ["7", "8", "9"],
      ["", "0", "delete"],
    ];

    return (
      <VStack space="lg" px={screenWidth * 0.1}>
        {keys.map((row, rowIndex) => (
          <HStack
            key={rowIndex}
            justifyContent="space-between"
            alignItems="center"
          >
            {row.map((key, colIndex) => {
              const isNumber = key !== "" && key !== "delete";
              const uniqueKey = `${rowIndex}-${colIndex}`;
              const commonStyle = {
                width: 72,
                height: 72,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 32,
              };

              if (key === "") {
                return <Box key={colIndex} style={commonStyle} />;
              }

              if (key === "delete") {
                return (
                  <Pressable
                    key={uniqueKey}
                    onPress={handleDelete}
                    style={commonStyle}
                  >
                    <Text style={{ fontSize: 24, color: "#0F172A" }}>⌫</Text>
                  </Pressable>
                );
              }

              return (
                <Pressable
                  key={key}
                  onPress={() => handlePress(key)}
                  style={commonStyle}
                >
                  <Text
                    style={{ fontSize: 24, color: "#0F172A" }}
                    className="font-bold"
                  >
                    {key}
                  </Text>
                </Pressable>
              );
            })}
          </HStack>
        ))}
      </VStack>
    );
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaCustom>
        <Box flex={1} bg="$white">
          <VStack flex={1}>
            {/* Header & Logo */}
            <VStack px="$6" py="$4">
              <HeaderComponent
                title="Kode Sandi"
                iconLeft={IconArrowLeft}
                iconRight={null}
                handleLeft={() => router.back()}
                handleRight={() => {}}
                boorderless={true}
              />
              <Divider />
            </VStack>

            {/* Logo & Teks */}
            <Box flex={1} justifyContent="center" alignItems="center">
              <Image
                source={require("@/assets/images/logo.png")}
                style={{ height: 56, width: 56 }}
                alt="App Logo"
                resizeMode="contain"
              />
              <Text
                style={{
                  marginTop: 20,
                  fontWeight: "bold",
                  fontSize: 16,
                  color: "#334155",
                  marginBottom: 50,
                }}
              >
                Masukkan Kode Sandi Anda
              </Text>

              {renderDots()}
            </Box>

            {/* Keypad di bagian bawah */}
            <Box bg="$white" style={{ marginBottom: 120 }}>
              {renderKeypad()}
            </Box>
          </VStack>
        </Box>
      </SafeAreaCustom>
    </GestureHandlerRootView>
  );
};

export default ReEnter;
