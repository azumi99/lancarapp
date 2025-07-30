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

const AboutScreen = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaCustom>
        <HeaderComponent
          title="About Us"
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
              <Text className="text-lg text-bold" style={{ marginTop: 20 }}>
                Tentang Kami
              </Text>

              <Text className="text-sm">
                Lancar adalah aplikasi manajemen keuangan pribadi yang dirancang
                untuk membantu Anda mengelola uang dengan lebih mudah, teratur,
                dan bijak. Kami percaya bahwa setiap orang berhak memiliki
                kendali atas keuangan mereka, tanpa harus menjadi ahli keuangan.
              </Text>

              <Text className="text-sm">
                Dengan fitur-fitur seperti pencatatan pengeluaran & pemasukan,
                pembuatan anggaran, serta analisis keuangan yang mudah
                dipahami, Lancar hadir sebagai solusi keuangan harian yang
                praktis dan aman di genggaman Anda.
              </Text>

              <Text className="text-lg text-bold" style={{ marginTop: 20 }}>
                Misi Kami
              </Text>

              <Text className="text-sm">
                Membantu pengguna membangun kebiasaan keuangan yang sehat,
                terencana, dan berkelanjutan.
              </Text>

              <Text className="text-lg text-bold" style={{ marginTop: 20 }}>
                Visi Kami
              </Text>

              <Text className="text-sm">
                Menjadi aplikasi manajemen keuangan pribadi terpercaya di
                Indonesia yang memberdayakan setiap individu untuk mencapai
                stabilitas finansial.
              </Text>
              <Text className="text-sm">
                Kami terus berinovasi untuk menghadirkan pengalaman terbaik bagi
                pengguna, dengan tetap menjaga keamanan dan kerahasiaan data
                Anda sebagai prioritas utama.
              </Text>
            </VStack>
          </View>
        </ScrollView>
      </SafeAreaCustom>
    </GestureHandlerRootView>
  );
};

export default AboutScreen;
