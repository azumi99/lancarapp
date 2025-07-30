import HeaderComponent from "@/components/headerComponent";
import SafeAreaCustom from "@/components/safeArea";
import { Button, ButtonText } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { Input, InputField } from "@/components/ui/input";
import { Textarea, TextareaInput } from "@/components/ui/textarea";
import { VStack } from "@/components/ui/vstack";
import { IconArrowLeft, IconCamera } from "@tabler/icons-react-native";
import { router } from "expo-router";
import React from "react";
import { Text } from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";

const FeedbackScreen = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaCustom>
        <HeaderComponent
          title="Berikan Umpan Balik"
          iconLeft={IconArrowLeft}
          iconRight={null}
          handleLeft={() => router.back()}
          handleRight={() => {}}
          boorderless={true}
        />
        <Divider />
        <ScrollView className="flex-1 px-4 py-5">
          <VStack space="xl">
            <Text className="text-bold text-lg">
              1. Masukkan apa yang ingin Anda bagikan ?
            </Text>

            <Textarea
              size="xl"
              isReadOnly={false}
              isInvalid={false}
              isDisabled={false}
              className="w-full"
            >
              <TextareaInput placeholder="Tuliskan masukkan anda disini" />
            </Textarea>

            <Text className="text-bold text-lg">
              2. Tambahkan foto terkait (opsional)
            </Text>
            <IconCamera size={24} color="#4B5563" className="text-gray-700" />

            <Text className="text-bold text-lg">3. Apa email Kamu ?</Text>
            <Input
              variant="outline"
              size="md"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
            >
              <InputField placeholder="Tulis email kamu" />
            </Input>

            <Button
              onPress={() => router.push("/profile/feedbackSuccess")}
              className="bg-blue-500 rounded-xl w-full mt-10"
              size="xl"
              variant="solid"
              action="primary"
            >
              <ButtonText>Kirim Umpan Balik</ButtonText>
            </Button>
          </VStack>
        </ScrollView>
      </SafeAreaCustom>
    </GestureHandlerRootView>
  );
};

export default FeedbackScreen;
