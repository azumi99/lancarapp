import HeaderComponent from "@/components/headerComponent";
import SafeAreaCustom from "@/components/safeArea";
import { Divider } from "@/components/ui/divider";
import { HStack } from "@/components/ui/hstack";
import { CircleIcon } from "@/components/ui/icon";
import {
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
} from "@/components/ui/radio";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { IconArrowLeft } from "@tabler/icons-react-native";
import { router } from "expo-router";
import React, { useState } from "react";
import { ColorValue, ScrollView, useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const KursScreen = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const gradientColors: [ColorValue, ColorValue] = isDark
    ? ["#0E0E0E", "#1C1C1C"]
    : ["#DAE7FF", "#FFFFFF"];

  const [selected, setSelected] = useState("idr");

  const [chooseCurrency] = useState([
    { label: "Rupiah (IDR)", logo: "IDR", code: "idr", rateToIDR: 1 },
    { label: "US Dollar (USD)", logo: "USD", code: "usd", rateToIDR: 16000 },
    { label: "Japanese Yen (JPY)", logo: "JPY", code: "jpy", rateToIDR: 115 },
    { label: "Euro (EUR)", logo: "EUR", code: "eur", rateToIDR: 17500 },
    {
      label: "British Pound (GBP)",
      logo: "GBP",
      code: "gbp",
      rateToIDR: 20500,
    },
    { label: "Chinese Yuan (CNY)", logo: "CNY", code: "cny", rateToIDR: 2250 },
    { label: "Korean Won (KRW)", logo: "KRW", code: "krw", rateToIDR: 12 },
    {
      label: "Singapore Dollar (SGD)",
      logo: "SGD",
      code: "sgd",
      rateToIDR: 11800,
    },
    {
      label: "Australian Dollar (AUD)",
      logo: "AUD",
      code: "aud",
      rateToIDR: 10700,
    },
    { label: "Swiss Franc (CHF)", logo: "CHF", code: "chf", rateToIDR: 18300 },
  ]);

  const selectedCurr = chooseCurrency.find((item) => item.code === selected);
  const otherCurr = chooseCurrency.filter((item) => item.code !== selected);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaCustom>
        <HeaderComponent
          title="Pilih Mata Uang"
          iconLeft={IconArrowLeft}
          iconRight={null}
          handleLeft={() => router.back()}
          handleRight={() => {}}
          boorderless={true}
        />
        <Divider />
        <ScrollView className="flex-1 px-4 py-5">
          <VStack space="md">
            {/* Mata Uang */}
            <Text
              className="text-md font-bold"
              style={{ color: isDark ? "white" : "#475569" }}
            >
              Mata Uang
            </Text>

            <RadioGroup value={selected} onChange={setSelected}>
              {selectedCurr && (
                <>
                  <HStack style={{ justifyContent: "space-between" }}>
                    <Text className="text-lg">{selectedCurr.label}</Text>
                    <Radio value={selectedCurr.code} size="lg" my="$1">
                      <RadioIndicator mr="$2">
                        <RadioIcon as={CircleIcon} />
                      </RadioIndicator>
                    </Radio>
                  </HStack>
                </>
              )}
            </RadioGroup>

            {/* Bahasa lainnya */}
            <Text
              className="text-md font-bold mt-4"
              style={{ color: isDark ? "white" : "#475569" }}
            >
              Bahasa lainnya
            </Text>

            <RadioGroup value={selected} onChange={setSelected}>
              {otherCurr.map((item) => (
                <>
                  <HStack
                    style={{
                      justifyContent: "space-between",
                    }}
                  >
                    <Text className="text-lg">{item.label}</Text>
                    <Radio key={item.code} value={item.code} size="md" my="$1">
                      <RadioIndicator mr="$2">
                        <RadioIcon as={CircleIcon} />
                      </RadioIndicator>
                    </Radio>
                  </HStack>
                  <Text className="text-sm" style={{ color: "#94A3B8" }}>
                    {item.logo} 1 to IDR = {item.rateToIDR}
                  </Text>
                  <Divider style={{ marginBottom: 20 }} />
                </>
              ))}
            </RadioGroup>
          </VStack>
        </ScrollView>
      </SafeAreaCustom>
    </GestureHandlerRootView>
  );
};

export default KursScreen;
