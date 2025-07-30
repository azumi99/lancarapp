import CustomActionsheet from "@/components/customActionsheet";
import HeaderComponent from "@/components/headerComponent";
import SafeAreaCustom from "@/components/safeArea";
import { Badge } from "@/components/ui/badge";
import { Button, ButtonText } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import {
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@/components/ui/modal";
import { VStack } from "@/components/ui/vstack";
import {
  IconArrowLeft,
  IconChevronRight,
  IconInfoCircle,
} from "@tabler/icons-react-native";
import { router } from "expo-router";
import React, { useState } from "react";
import { Text, TouchableOpacity, useColorScheme, View } from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";

const AccountScreen = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const fontColor = isDark ? "#FFFFFF" : "#0F172A";
  const [showModal, setShowModal] = useState(false);
  const [showVip, setShowVip] = useState(false);

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaCustom>
          <HeaderComponent
            title="Akun"
            iconLeft={IconArrowLeft}
            iconRight={null}
            handleLeft={() => router.back()}
            handleRight={() => {}}
            boorderless
          />
          <Divider />
          <ScrollView className="flex-1 px-4 py-5">
            <VStack space="xl">
              <TouchableOpacity onPress={() => router.push("/")}>
                <HStack justifyContent="space-between" alignItems="center">
                  <Text className="text-md" style={{ color: fontColor }}>
                    Profil Saya
                  </Text>
                  <IconChevronRight size={24} color="#4B5563" />
                </HStack>
              </TouchableOpacity>
              <Divider />

              <TouchableOpacity
                onPress={() => router.push("/(tabs)/profile/firstTimeAdd")}
              >
                <HStack justifyContent="space-between" alignItems="center">
                  <Text className="text-md" style={{ color: fontColor }}>
                    Kode Sandi
                  </Text>
                  <TouchableOpacity onPress={() => setShowVip(true)}>
                    <HStack space="md">
                      <Badge
                        size="sm"
                        variant="solid"
                        action="info"
                        style={{ backgroundColor: "#EFF5FF" }}
                      >
                        <Text style={{ color: "#173DDE" }} className="text-xs">
                          VIP
                        </Text>
                      </Badge>
                      <IconChevronRight size={24} color="#4B5563" />
                    </HStack>
                  </TouchableOpacity>
                </HStack>
              </TouchableOpacity>
              <Divider />

              <TouchableOpacity onPress={() => router.push("/profile/font")}>
                <HStack justifyContent="space-between" alignItems="center">
                  <Text className="text-md" style={{ color: fontColor }}>
                    Ukuran Font
                  </Text>
                  <HStack space="md">
                    <Text className="text-gray-500">Normal</Text>
                    <IconChevronRight size={24} color="#4B5563" />
                  </HStack>
                </HStack>
              </TouchableOpacity>
              <Divider />

              <TouchableOpacity onPress={() => router.push("/profile/sound")}>
                <HStack justifyContent="space-between" alignItems="center">
                  <Text className="text-md" style={{ color: fontColor }}>
                    Efek Suara
                  </Text>
                  <IconChevronRight size={24} color="#4B5563" />
                </HStack>
              </TouchableOpacity>
              <Divider />

              <TouchableOpacity onPress={() => router.push("/profile/number")}>
                <HStack justifyContent="space-between" alignItems="center">
                  <Text className="text-md" style={{ color: fontColor }}>
                    Pemisah Ribuan
                  </Text>
                  <IconChevronRight size={24} color="#4B5563" />
                </HStack>
              </TouchableOpacity>
              <Divider />

              <TouchableOpacity onPress={() => router.push("/profile/tnc")}>
                <HStack justifyContent="space-between" alignItems="center">
                  <Text className="text-md" style={{ color: fontColor }}>
                    Syarat & Ketentuan
                  </Text>
                  <IconChevronRight size={24} color="#4B5563" />
                </HStack>
              </TouchableOpacity>
              <Divider />

              <TouchableOpacity onPress={() => router.push("/profile/privacy")}>
                <HStack justifyContent="space-between" alignItems="center">
                  <Text className="text-md" style={{ color: fontColor }}>
                    Kebijakan Privasi
                  </Text>
                  <IconChevronRight size={24} color="#4B5563" />
                </HStack>
              </TouchableOpacity>
              <Divider />

              <TouchableOpacity onPress={() => router.push("/profile/about")}>
                <HStack justifyContent="space-between" alignItems="center">
                  <Text className="text-md" style={{ color: fontColor }}>
                    Tentang Lancar
                  </Text>
                  <IconChevronRight size={24} color="#4B5563" />
                </HStack>
              </TouchableOpacity>
              <Divider />

              <TouchableOpacity
                onPress={() => router.push("/profile/feedback")}
              >
                <HStack justifyContent="space-between" alignItems="center">
                  <Text className="text-md" style={{ color: fontColor }}>
                    Umpan Balik
                  </Text>
                  <IconChevronRight size={24} color="#4B5563" />
                </HStack>
              </TouchableOpacity>
              <Divider />

              <TouchableOpacity onPress={() => router.push("/profile/api")}>
                <HStack justifyContent="space-between" alignItems="center">
                  <Text className="text-md" style={{ color: fontColor }}>
                    API (Developer Tools)
                  </Text>
                  <TouchableOpacity onPress={() => setShowVip(true)}>
                    <HStack space="md">
                      <Badge
                        size="sm"
                        variant="solid"
                        action="info"
                        style={{ backgroundColor: "#EFF5FF" }}
                      >
                        <Text style={{ color: "#173DDE" }} className="text-xs">
                          VIP
                        </Text>
                      </Badge>
                      <IconChevronRight size={24} color="#4B5563" />
                    </HStack>
                  </TouchableOpacity>
                </HStack>
              </TouchableOpacity>
              <Divider />

              <TouchableOpacity
                onPress={() => router.push("/profile/clear-cache")}
              >
                <HStack justifyContent="space-between" alignItems="center">
                  <Text className="text-md" style={{ color: fontColor }}>
                    Hapus Cache
                  </Text>
                  <IconChevronRight size={24} color="#4B5563" />
                </HStack>
              </TouchableOpacity>
              <Divider />

              <TouchableOpacity onPress={() => setShowModal(true)}>
                <HStack justifyContent="space-between" alignItems="center">
                  <Text className="text-md" style={{ color: "red" }}>
                    Hapus Semua Data
                  </Text>
                  <IconChevronRight size={24} color="#4B5563" />
                </HStack>
              </TouchableOpacity>
              <Divider />
            </VStack>
          </ScrollView>
        </SafeAreaCustom>
      </GestureHandlerRootView>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading size="md">Hapus Semua Data?</Heading>
          </ModalHeader>
          <ModalBody>
            <Text className="text-sm">
              Menghapus Semua Data berarti menghilangkan semua aktifitas
              pengelola keuangan seperti catatan transaksi, pengaturan anggaran,
              pengingat dan lain sebagainya.
            </Text>
          </ModalBody>
          <ModalFooter>
            <HStack space="md">
              <Button
                variant="outline"
                action="secondary"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                <ButtonText>Tidak, Kembali</ButtonText>
              </Button>
              <Button
                variant="solid"
                action="negative"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                <ButtonText>Ya, Hapus</ButtonText>
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <CustomActionsheet
        showActionsheet={showVip}
        titleActionsheet=""
        handleClose={() => setShowVip(false)}
        showDivider={false}
      >
        <VStack space="lg">
          <Text className="font-bold text-md">Apa itu Vip ?</Text>
          <Text className="text-sm">
            VIP dirancang khusus untuk kamu yang ingin mencatat pengeluaran dan
            pemasukan yang lebih powerfull, personal & akses kek beberapa fitur
            penting.
          </Text>

          <Text className="font-bold text-md">Hak Istimewa</Text>
          <Text className="font-bold text-md"> 🚫 Bebas Iklan</Text>
          <Text className="text-sm">
            Nikmati kebebasan tanpa iklan dengan langganan premium! Akses penuh
            semua fitur, kelola keuangan tanpa gangguan, dan capai tujuan
            finansial lebih mudah. Berlangganan sekarang!
          </Text>

          <Text className="font-bold text-md"> 🔒 Kata Sandi</Text>
          <Text className="text-sm">
            Pakai kata sandi untuk menjaga aplikasi keuangan mu tetap aman dan
            rahasia.
          </Text>

          <Text className="font-bold text-md"> 🧩 API Developer</Text>
          <Text className="text-sm">
            Integrasikan API kami untuk melacak pengeluaran, kelola anggaran,
            dan analisis data keuangan secara real-time.
          </Text>

          <HStack justifyContent="space-between">
            <Text className="font-bold text-md"> Rp 99.000 / Year</Text>
            <Badge
              size="sm"
              variant="solid"
              action="info"
              style={{ backgroundColor: "#EFF5FF" }}
            >
              <Text className="text-sm font-semibold">Batalkan kapan saja</Text>
            </Badge>
          </HStack>

          <TouchableOpacity
            className="bg-blue-500 py-2 rounded-xl w-full"
            onPress={() => router.push("/profile/loginBarrier")}
          >
            <Text className="text-center text-white font-semibold text-lg">
              Bayar
            </Text>
          </TouchableOpacity>

          <View className="flex-row items-center justify-center mt-2">
            <IconInfoCircle
              color="#F59E0B"
              size={16}
              style={{ marginRight: 6 }}
            />
            <Text className="text-sm text-center">
              Perpanjang Otomatis Rp 99.000 pada 14 Mei 2026
            </Text>
          </View>

          <Text className="text-sm text-center">
            Dengan membayar, saya mengakui bahwa saya telah membaca dan setuju
            dengan{" "}
            <Text className="font-semibold underline">
              Ketentuan Penggunaan
            </Text>{" "}
            dan{" "}
            <Text className="font-semibold underline">
              Kebijakan Privasi Lancar
            </Text>
          </Text>
        </VStack>
      </CustomActionsheet>
    </>
  );
};

export default AccountScreen;
