import { Text } from "@/components/ui/text";
import { IconChevronRight } from "@tabler/icons-react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useState } from "react";
import { ColorValue, Image, TouchableOpacity, View } from "react-native";
import { Avatar, AvatarFallbackText, AvatarImage } from "../ui/avatar";
import { HStack } from "../ui/hstack";
import { VStack } from "../ui/vstack";

const AfterLogin = () => {
  const gradientColors: [ColorValue, ColorValue] = ["#EFF5FF", "#BDD6FF"];
  const [vip, setVip] = useState(false);

  return (
    <View className="mt-10">
      <HStack justifyContent="space-between">
        <HStack space="md">
          <Avatar size="lg">
            <AvatarFallbackText>User</AvatarFallbackText>
            <AvatarImage
              source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              }}
            />
          </Avatar>

          <VStack>
            <Text className="font-semibold text-lg">Hi User</Text>

            <TouchableOpacity
              onPress={() => router.push("/(tabs)/profile/manageAccount")}
              style={{ zIndex: 2, position: "relative" }}
            >
              <HStack space="md">
                <Text className="text-sm" style={{ color: "#94A3B8" }}>
                  Manage Account
                </Text>
                <IconChevronRight size={16} color={"#94A3B8"} />
              </HStack>
            </TouchableOpacity>
          </VStack>
        </HStack>

        {vip ? (
          <Image
            style={{ height: 40, width: 40 }}
            source={require("@/assets/images/vip.png")}
            alt="Book illustration"
            resizeMode="contain"
          />
        ) : (
          ""
        )}
      </HStack>
      <View>
        {vip ? (
          ""
        ) : (
          <LinearGradient
            colors={gradientColors}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              marginTop: 40,
              borderTopRightRadius: 16,
              borderTopLeftRadius: 16,
              padding: 16,
            }}
          >
            <HStack justifyContent="space-between">
              <HStack space="md">
                <Image
                  style={{ height: 35, width: 35 }}
                  source={require("@/assets/images/vip.png")}
                  alt="Book illustration"
                  resizeMode="contain"
                />
                <Text
                  className="text-sm font-semibold"
                  style={{ color: "#173DDE", marginTop: 10 }}
                >
                  Unlock VIP for more benefit
                </Text>
              </HStack>

              <IconChevronRight
                size={20}
                color={"#447DFC"}
                style={{ marginTop: 10 }}
              />
            </HStack>
          </LinearGradient>
        )}
      </View>
    </View>
  );
};

export default AfterLogin;
