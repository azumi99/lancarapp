import HeaderComponent from "@/components/headerComponent";
import { Button } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import { Divider } from "@/components/ui/divider";
import { VStack } from "@/components/ui/vstack";
import { IconArrowLeft } from "@tabler/icons-react-native";
import { router } from "expo-router";
import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const LoginBarrier = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView
        style={[
          styles.container,
          { backgroundColor: isDark ? "#000" : "#fff" },
        ]}
      >
        <View style={styles.wrapper}>
          {/* === Bagian Atas === */}
          <View>
            <HeaderComponent
              title="Lancar"
              iconLeft={IconArrowLeft}
              iconRight={null}
              handleLeft={() => router.back()}
              handleRight={() => {}}
              boorderless={true}
            />
            <Divider />
            <Center>
              <Image
                style={styles.illustration}
                source={require("@/assets/images/Illustrations.png")}
                resizeMode="contain"
              />
            </Center>

            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionText}>
                Masuk atau buat akun untuk menyimpan progres kamu dan menjaga
                data tetap aman di semua perangkat.
              </Text>
            </View>

            <VStack space="md" style={styles.buttonContainer}>
              <Button
                size="lg"
                action="secondary"
                variant="outline"
                borderRadius="$xl"
                backgroundColor="$blue500"
                onPress={() => router.push("/wallet")}
              >
                <Image
                  style={styles.googleIcon}
                  source={require("@/assets/images/google.png")}
                  resizeMode="contain"
                />
                <Text style={styles.googleText}>Lanjut dengan Google</Text>
              </Button>
            </VStack>
          </View>
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText} className="text-center text-sm">
            Dengan melanjutkan, saya mengakui bahwa saya telah membaca dan
            setuju dengan{" "}
            <Text className="font-bold underline">Ketentuan Penggunaan</Text>{" "}
            dan
            <Text className="font-bold underline">
              {" "}
              Kebijakan Privasi Lancar
            </Text>
          </Text>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  illustration: {
    marginTop: 50,
    height: 200,
    width: 250,
  },
  descriptionContainer: {
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 16,
  },
  descriptionText: {
    textAlign: "center",
    fontSize: 14,
    color: "#333",
  },
  buttonContainer: {
    marginTop: 40,
    marginHorizontal: 20,
  },
  googleIcon: {
    marginRight: 10,
    height: 24,
    width: 24,
  },
  googleText: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  wrapper: {
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  footerContainer: {
    alignItems: "center",
    marginTop: 250,
    paddingHorizontal: 20,
  },
  footerText: {
    color: "#888",
    textAlign: "center",
  },
});

export default LoginBarrier;
