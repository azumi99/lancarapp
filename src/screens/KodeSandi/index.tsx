import HeaderComponent from "@/components/headerComponent";
import SafeAreaCustom from "@/components/safeArea";
import { Divider } from "@/components/ui/divider";
import { HStack } from "@/components/ui/hstack";
import { Switch } from "@/components/ui/switch";
import { VStack } from "@/components/ui/vstack";
import {
  IconArrowLeft,
  IconCheck,
  IconChevronRight,
} from "@tabler/icons-react-native";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";

const KodeSandi = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const [isEnabled, setIsEnabled] = useState(false);
  const [show, setShow] = useState(false);
  const [selectedTimeout, setSelectedTimeout] = useState<number | null>(null);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };

  const timeoutOptions = [0, 1, 5, 15];

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaCustom>
        <HeaderComponent
          title="Kode Sandi"
          iconLeft={IconArrowLeft}
          iconRight={null}
          handleLeft={() => router.back()}
          handleRight={() => {}}
          boorderless={true}
        />
        <Divider />
        <ScrollView className="flex-1 px-4 py-5">
          <VStack space="xl">
            {/* Box utama */}
            <View
              style={{
                borderWidth: 1,
                borderColor: "#e9e9ea",
                borderRadius: 12,
                padding: 16,
              }}
            >
              {/* Kode Sandi + Switch */}
              <HStack justifyContent="space-between" alignItems="center" mb={4}>
                <Text
                  className="text-md font-bold"
                  style={{ color: isDark ? "white" : "#475569" }}
                >
                  Kode Sandi
                </Text>

                <Switch
                  value={isEnabled}
                  onValueChange={toggleSwitch}
                  trackColor={{ false: "#D1D5DB", true: "#3B82F6" }}
                  thumbColor={isEnabled ? "#FFFFFF" : "#F3F4F6"}
                  ios_backgroundColor="#D1D5DB"
                />
              </HStack>

              <TouchableOpacity onPress={() => setShow(true)}>
                <HStack justifyContent="space-between" alignItems="center">
                  <Text
                    className="text-md font-bold"
                    style={{ color: isDark ? "white" : "#475569" }}
                  >
                    Ubah Kode Sandi
                  </Text>

                  <IconChevronRight
                    size={24}
                    color={"#94A3B8"}
                    style={{ marginRight: 10 }}
                  />
                </HStack>
              </TouchableOpacity>
            </View>

            {/* Box Minta Kode Sandi */}
            {show && (
              <>
                <Text
                  className="text-md font-bold"
                  style={{ color: isDark ? "white" : "#475569" }}
                >
                  Minta Kode Sandi
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: "#CBD5E1",
                    borderRadius: 12,
                    padding: 16,
                  }}
                >
                  <FlatList
                    data={timeoutOptions}
                    keyExtractor={(item) => item.toString()}
                    contentContainerStyle={{ gap: 12 }}
                    renderItem={({ item }) => (
                      <>
                        <TouchableOpacity
                          onPress={() => setSelectedTimeout(item)}
                          style={{
                            paddingVertical: 12,
                            paddingHorizontal: 16,
                            borderRadius: 10,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <Text
                            style={{
                              color:
                                selectedTimeout === item
                                  ? "#3B82F6"
                                  : isDark
                                  ? "white"
                                  : "#1E293B",
                              fontWeight: "600",
                            }}
                          >
                            {item === 0 ? "Langsung" : `${item} Menit`}
                          </Text>

                          {selectedTimeout === item && (
                            <IconCheck size={16} color="#3B82F6" />
                          )}
                        </TouchableOpacity>

                        <Divider />
                      </>
                    )}
                  />
                </View>
              </>
            )}
          </VStack>
        </ScrollView>
      </SafeAreaCustom>
    </GestureHandlerRootView>
  );
};

export default KodeSandi;
