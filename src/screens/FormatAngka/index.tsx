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
import { ScrollView, useColorScheme } from "react-native";
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

const FormatAngkaScreen = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const [selected, setSelected] = useState("1");
  const [chooseLang] = useState([
    { label: "123.456.789", id: "1" },
    { label: "123,456,789", id: "2" },
    { label: "123 456 789.89", id: "3" },
    { label: "123 456 789.,89", id: "4" },
  ]);

  const selectedLang = chooseLang.find((item) => item.id === selected);
  const otherLangs = chooseLang.filter((item) => item.id !== selected);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaCustom>
        <HeaderComponent
          title="Pilih Bahasa"
          iconLeft={IconArrowLeft}
          iconRight={null}
          handleLeft={() => router.back()}
          handleRight={() => {}}
          boorderless={true}
        />
        <Divider />
        <ScrollView className="flex-1 px-4 py-5">
          <VStack space="md">
            {/* Bahasa Terpilih */}
            <Text
              className="text-md font-bold"
              style={{ color: isDark ? "white" : "#475569" }}
            >
              Bahasa Terpilih
            </Text>

            <RadioGroup value={selected} onChange={setSelected}>
              {selectedLang && (
                <>
                  <HStack style={{ justifyContent: "space-between" }}>
                    <Text className="text-lg">{selectedLang.label}</Text>
                    <Radio value={selectedLang.id} size="lg" my="$1">
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
              {otherLangs.map((item) => (
                <>
                  <HStack
                    style={{
                      justifyContent: "space-between",
                    }}
                  >
                    <Text className="text-lg">{item.label}</Text>
                    <Radio key={item.id} value={item.id} size="md" my="$1">
                      <RadioIndicator mr="$2">
                        <RadioIcon as={CircleIcon} />
                      </RadioIndicator>
                    </Radio>
                  </HStack>
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

export default FormatAngkaScreen;
