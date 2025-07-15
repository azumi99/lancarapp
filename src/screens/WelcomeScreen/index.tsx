import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Icon } from "@/components/ui/icon";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { VStack } from "@/components/ui/vstack";
import { IconArrowRight } from "@tabler/icons-react-native";
import { useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";

const WelcomeScreen = () => {
    const router = useRouter();
    return (

        <View className="flex-1 justify-center items-center ">
            <View className="px-6">
                <View className="items-center">
                    <Image
                        size="2xl"
                        source={require('@/assets/images/welcome.png')}
                        alt="Book illustration"
                        resizeMode="contain"
                    />
                </View>
                <VStack space="md" className="items-center">
                    <Heading className="text-center">Selamat Datang</Heading>
                    <Text className="text-center">Atur keuangan mu dengan mudah bersama Lancar Money Management.</Text>
                </VStack>
                <VStack space="md" className="mt-10">
                    <TouchableOpacity
                        className="bg-blue-500 py-2 rounded-xl w-full"
                        onPress={() => router.push("/(tabs)")}
                    >
                        <HStack className="items-center justify-center " space="xs">

                            <Text className="text-center text-white font-semibold text-lg">
                                Masuk ke Aplikasi
                            </Text>
                            <Icon as={IconArrowRight} size="xl" color="white" />
                        </HStack>
                    </TouchableOpacity>
                </VStack>
            </View>
        </View>

    );
};

export default WelcomeScreen;
