import HeaderComponent from "@/components/headerComponent";
import { Box } from "@/components/ui/box";
import { Center } from "@/components/ui/center";
import { Divider } from "@/components/ui/divider";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { IconArrowLeft } from "@tabler/icons-react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import {
  ColorValue,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const OtpScreen = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const gradientColors: [ColorValue, ColorValue] = isDark
    ? ["#1C1C1C", "#1C1C1C"]
    : ["#ffffff", "#ffffff"];

  const textColor = isDark ? "white" : "#1f2937";
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const inputs = useRef<TextInput[]>([]);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text.slice(-1);
    setOtp(newOtp);

    if (text && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

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
        <VStack space="lg" className="p-6 mt-6">
          <Text style={{ color: textColor }} className="text-md">
            Email verifikasi telah dikirim ke
          </Text>
          <Text style={{ color: textColor }} className="text-md mb-2">
            Silakan masukkan kode yang Anda terima melalui email.
          </Text>
        </VStack>

        <Center>
          <Text style={{ color: textColor, fontSize: 11 }}>
            Verification Code
          </Text>
        </Center>

        <Center>
          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => {
                  inputs.current[index] = ref!;
                }}
                style={[
                  styles.otpInput,
                  {
                    backgroundColor: isDark ? "#333" : "#fff",
                    borderColor: isDark ? "#888" : "#ccc",
                    color: isDark ? "#fff" : "#000",
                  },
                ]}
                keyboardType="number-pad"
                maxLength={1}
                value={digit}
                onChangeText={(text) => handleChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                autoFocus={index === 0}
              />
            ))}
          </View>
        </Center>

        <TouchableOpacity
          onPress={() => router.push("/(tabs)/profile/HapusAkun/successHapus")}
        >
          <Box className="bg-blue-500 border border-gray-200 rounded-xl shadow-lg m-4 mt-10">
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

const styles = StyleSheet.create({
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 40,
    marginTop: 20,
    gap: 10,
  },
  otpInput: {
    width: 48,
    height: 56,
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 22,
    textAlign: "center",
  },
});

export default OtpScreen;
