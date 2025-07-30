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

const BahasaScreen = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const gradientColors: [ColorValue, ColorValue] = isDark
    ? ["#0E0E0E", "#1C1C1C"]
    : ["#DAE7FF", "#FFFFFF"];

  const [selected, setSelected] = useState("id");
  const [chooseLang] = useState([
    { label: "Bahasa Indonesia", code: "id" },
    { label: "English", code: "en" },
    { label: "日本語 (Japanese)", code: "ja" },
    { label: "Français (French)", code: "fr" },
    { label: "Español (Spanish)", code: "es" },
    { label: "Deutsch (German)", code: "de" },
    { label: "中文 (Chinese)", code: "zh" },
    { label: "한국어 (Korean)", code: "ko" },
    { label: "Português (Portuguese)", code: "pt" },
    { label: "Русский (Russian)", code: "ru" },
  ]);

  const selectedLang = chooseLang.find((item) => item.code === selected);
  const otherLangs = chooseLang.filter((item) => item.code !== selected);

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
                    <Radio value={selectedLang.code} size="lg" my="$1">
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
                    <Radio key={item.code} value={item.code} size="md" my="$1">
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

export default BahasaScreen;
