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

const TncScreen = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaCustom>
        <HeaderComponent
          title="Term of Use"
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
                Syarat dan Ketentuan Penggunaan Aplikasi Lancar
              </Text>
              <Text className="text-lg text-center">
                Tanggal berlaku : 12 Mei 2025
              </Text>

              <Text className="text-sm">
                Selamat datang di Lancar – aplikasi manajemen keuangan pribadi
                Anda yang dirancang untuk membantu mencatat pengeluaran,
                mengatur anggaran, dan mengelola keuangan dengan lebih baik.
              </Text>

              <Text className="text-sm">
                Harap baca Syarat dan Ketentuan Penggunaan ini (
                <Text className="font-bold">"Syarat"</Text>,{" "}
                <Text className="font-bold">"Perjanjian"</Text>) dengan saksama
                sebelum menggunakan aplikasi Lancar (
                <Text className="font-bold">"Aplikasi"</Text>,{" "}
                <Text className="font-bold">"Layanan"</Text>) yang dioperasikan
                oleh <Text className="font-bold">Lancar.app ("kami")</Text>.
              </Text>

              <Text className="text-sm">
                Dengan mengakses atau menggunakan aplikasi, Anda dianggap telah
                menyetujui Syarat ini. Jika Anda tidak setuju, mohon untuk tidak
                menggunakan aplikasi ini.
              </Text>

              <Text className="text-lg text-bold" style={{ marginTop: 20 }}>
                1. Penggunaan Aplikasi
              </Text>

              <Text className="text-sm">
                Lancar ditujukan untuk penggunaan pribadi. Anda dapat
                menggunakan aplikasi untuk:
              </Text>

              <Text className="text-sm">
                {" "}
                Mencatat pemasukan dan pengeluaran
              </Text>

              <Text className="text-sm"> Mengelola dan membuat anggaran</Text>

              <Text className="text-sm"> Menganalisis kebiasaan keuangan</Text>

              <Text className="text-sm">
                {" "}
                Menyimpan data keuangan dengan aman
              </Text>

              <Text className="text-lg text-bold" style={{ marginTop: 20 }}>
                2. Akun dan Keamanan
              </Text>

              <Text className="text-sm">
                Beberapa fitur memerlukan Anda untuk membuat akun. Anda
                bertanggung jawab atas keamanan informasi akun Anda. Jika
                terjadi akses yang tidak sah, segera hubungi kami.
              </Text>
            </VStack>
          </View>
        </ScrollView>
      </SafeAreaCustom>
    </GestureHandlerRootView>
  );
};

export default TncScreen;
