import HeaderComponent from "@/components/headerComponent";
import SafeAreaCustom from "@/components/safeArea";
import { Divider } from "@/components/ui/divider";
import { VStack } from "@/components/ui/vstack";
import { IconArrowLeft } from "@tabler/icons-react-native";
import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";

const PrivacyScreen = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaCustom>
        <HeaderComponent
          title="Privacy Policy"
          iconLeft={IconArrowLeft}
          iconRight={null}
          handleLeft={() => router.back()}
          handleRight={() => {}}
          boorderless={true}
        />
        <Divider />
        <ScrollView className="flex-1 px-4 py-5">
          <View style={{ marginBottom: 20 }}>
            <VStack space="xl" className="mb-200">
              <Text className="text-bold text-4xl text-center">
                Kebijakan Privasi Aplikasi Lancar
              </Text>
              <Text className="text-lg text-center">
                Tanggal berlaku : 12 Mei 2025
              </Text>

              <Text className="text-sm">
                Kami di Lancar menghargai dan melindungi privasi Anda. Kebijakan
                Privasi ini menjelaskan bagaimana kami mengumpulkan,
                menggunakan, dan melindungi data pribadi Anda saat menggunakan
                aplikasi manajemen keuangan kami.
              </Text>

              <Text className="text-sm">
                Dengan menggunakan aplikasi Lancar, Anda menyetujui praktik yang
                dijelaskan dalam Kebijakan Privasi ini.
              </Text>

              <Text className="text-lg text-bold" style={{ marginTop: 20 }}>
                1. Informasi yang Kami Kumpulkan
              </Text>

              <Text className="text-sm">
                Kami dapat mengumpulkan informasi berikut saat Anda menggunakan
                aplikasi:
              </Text>

              <Text className="text-sm">
                Informasi Akun: Nama, alamat email, dan data login.
              </Text>

              <Text className="text-sm">
                Data Keuangan: Catatan pemasukan, pengeluaran, anggaran, dan
                transaksi yang Anda input.
              </Text>

              <Text className="text-sm">
                Data Teknis: Informasi perangkat, sistem operasi, alamat IP, dan
                log aktivitas aplikasi.
              </Text>

              <Text className="text-sm">
                Data Penggunaan: Interaksi Anda dengan fitur aplikasi (misalnya
                fitur yang sering digunakan).
              </Text>

              <Text className="text-lg text-bold" style={{ marginTop: 20 }}>
                2. Cara Kami Menggunakan Informasi
              </Text>

              <Text className="text-sm">
                Informasi yang kami kumpulkan digunakan untuk:
              </Text>

              <Text className="text-sm">
                Menyediakan dan meningkatkan layanan aplikasi.
              </Text>

              <Text className="text-sm">
                Menyimpan dan mencadangkan data keuangan Anda secara aman.
              </Text>

              <Text className="text-sm">
                Memberikan dukungan pengguna dan memperbaiki performa aplikasi.
              </Text>

              <Text className="text-sm">
                Mengirimkan pemberitahuan penting (seperti pembaruan atau
                perubahan layanan).
              </Text>
              <Text className="text-sm">
                Menganalisis penggunaan untuk pengembangan fitur baru.
              </Text>
            </VStack>
          </View>
        </ScrollView>
      </SafeAreaCustom>
    </GestureHandlerRootView>
  );
};

export default PrivacyScreen;
