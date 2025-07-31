import ActionForm from "@/components/actionForm";
import CustomModal from "@/components/modal";
import { Avatar } from "@/components/ui/avatar";
import { Box } from "@/components/ui/box";
import { Center } from "@/components/ui/center";
import { Divider } from "@/components/ui/divider";
import { HStack } from "@/components/ui/hstack";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import {
  IconIdBadge2,
  IconMail,
  IconPencil,
  IconUser,
} from "@tabler/icons-react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useState } from "react";
import type { ColorValue } from "react-native";
import {
  Image,
  Pressable,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Feather from "react-native-vector-icons/Feather";

const ManageAccount = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const gradientColors: [ColorValue, ColorValue] = isDark
    ? ["#0E0E0E", "#1C1C1C"]
    : ["#DAE7FF", "#FFFFFF"];
  const backgroundImage = isDark
    ? require("@/assets/images/background-dark.png")
    : require("@/assets/images/background.png");

  const [showActionsheet, setShowActionsheet] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = React.useState<string>("");
  const handleClose = () => setShowActionsheet(false);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        className="flex-1"
      >
        <Image
          source={backgroundImage}
          alt="Background illustration"
          resizeMode="cover"
          className="absolute -top-0 w-full h-auto"
        />

        <VStack alignItems="center" mt="$2">
          <Box position="relative">
            <Avatar
              style={{ marginTop: 100 }}
              size="xl"
              source={{ uri: "https://i.pravatar.cc/150?img=3" }}
            />
            <Pressable
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                backgroundColor: "#2563eb",
                padding: 6,
                borderRadius: 999,
              }}
            >
              <Icon as={Feather} name="edit-2" color="white" size="sm" />
            </Pressable>
          </Box>
        </VStack>
        <Box className="bg-white border border-gray-200 rounded-3xl shadow-lg m-4">
          <VStack space="md" className="p-6">
            <Text className="text-gray-800 font-bold text-base">
              Keamanan Akun
            </Text>
            <Divider />

            <HStack justifyContent="space-between">
              <HStack space="md">
                <IconMail size={20} color="#4B5563" className="text-gray-700" />
                <Text className="text-gray-800 text-base text-md">
                  Email tertaut
                </Text>
              </HStack>
              <Text className="text-gray-400 text-sm">abc@gmail.com</Text>
            </HStack>
            <Divider />

            <HStack justifyContent="space-between">
              <HStack space="md">
                <IconIdBadge2
                  size={20}
                  color="#4B5563"
                  className="text-gray-700"
                />
                <Text className="text-gray-800 text-base text-md">ID</Text>
              </HStack>
              <Text className="text-gray-400 text-sm">125252025</Text>
            </HStack>
          </VStack>
        </Box>

        <Box className="bg-white border border-gray-200 rounded-3xl shadow-lg m-4">
          <VStack space="md" className="p-6">
            <HStack justifyContent="space-between">
              <Text className="text-gray-800 font-bold text-base">
                Informasi Pribadi
              </Text>

              <TouchableOpacity onPress={() => setShowActionsheet(true)}>
                <HStack>
                  <IconPencil
                    size={20}
                    color="#447DFC"
                    className="text-gray-700"
                  />
                  <Text className="text-blue-700 text-sm ml-1">Ubah</Text>
                </HStack>
              </TouchableOpacity>
            </HStack>
            <Divider />

            <HStack justifyContent="space-between">
              <HStack space="md">
                <IconUser size={20} color="#4B5563" className="text-gray-700" />
                <Text className="text-gray-800 text-base text-md">Nama</Text>
              </HStack>
              <Text className="text-gray-400 text-sm">Rendy</Text>
            </HStack>
          </VStack>
        </Box>

        <Box className="bg-white border border-gray-200 rounded-3xl shadow-lg m-4">
          <VStack space="md" className="p-4">
            <Center>
              <TouchableOpacity onPress={() => setShowModal(true)}>
                <Text className="text-gray-800 font-bold text-base">
                  Keluar
                </Text>
              </TouchableOpacity>
            </Center>
          </VStack>
        </Box>

        <Center className="m-4">
          <TouchableOpacity
            onPress={() => router.push("/(tabs)/profile/HapusAkun")}
          >
            <Text className="text-red-400 font-bold text-base">Hapus Akun</Text>
          </TouchableOpacity>
          <Text className="text-gray-500 text-sm mt-1">
            Setelah dihapus, semua informasi akun akan dihapus. Anda tidak
          </Text>
          <Text className="text-gray-500 text-sm">
            akan dapat memulihkan informasi ini.
          </Text>
        </Center>

        <ActionForm
          showActionsheet={showActionsheet}
          handleClose={handleClose}
          titleActionsheet="Ubah Nama"
          titleButton="Save"
          fields={[
            {
              label: "Nama",
              value: name,
              onChange: setName,
            },
          ]}
        />

        <CustomModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          title="Apakah kamu yakin ingin keluar"
          description=""
          confirmText="Ya, Keluar"
          cancelText="Tidak, Kembali"
          action="negative"
          onConfirm={() => {
            console.log("Confirmed");
            setShowModal(false);
          }}
        />
      </LinearGradient>
    </GestureHandlerRootView>
  );
};

export default ManageAccount;
