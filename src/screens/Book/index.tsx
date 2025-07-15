import SafeAreaCustom from "@/components/safeArea";
import { Box } from "@/components/ui/box";
import { Icon } from "@/components/ui/icon";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { VStack } from "@/components/ui/vstack";

import ActionForm from "@/components/actionForm";
import { IconBook2, IconChevronRight, IconIcons } from '@tabler/icons-react-native';
import { useRouter } from "expo-router";
import React from 'react';
import { ScrollView, TouchableOpacity } from "react-native";

const BookScreen = () => {
    const [showActionsheet, setShowActionsheet] = React.useState(false)
    const [bukuName, setBukuName] = React.useState<string>('');
    const handleClose = () => setShowActionsheet(false)
    const router = useRouter();
    return (
        <SafeAreaCustom>
            <ScrollView className="flex-1 px-6 py-10">
                <View className="items-center">
                    <Image
                        size="2xl"
                        source={require('@/assets/images/book.png')}
                        alt="Book illustration"
                        resizeMode="contain"
                    />
                </View>
                <View className="items-center px-2">
                    <Text className="text-center text-lg font-bold">
                        Atur Buku Anda
                    </Text>
                    <Text className="text-center  ">
                        Yuk atur buku Anda dulu, agar transaksi tidak tertukar.
                    </Text>
                </View>

                <VStack className="mt-10">
                    <TouchableOpacity onPress={() => setShowActionsheet(true)}>
                        <View className="flex-row items-center border-b border-outline-100 py-3">
                            <Box className="p-2 bg-gray-100 rounded-[15px] mr-3 ">
                                <Icon
                                    as={IconBook2}
                                    size="xl"
                                    color="#3B82F6"
                                />
                            </Box>
                            <View className="flex-1">
                                <Text className="font-medium">
                                    Nama Buku
                                </Text>
                            </View>
                            <Text className="text-gray-400 mr-2">
                                {bukuName ? bukuName : 'Belum ada nama'}
                            </Text>
                            <Icon
                                as={IconChevronRight}
                                size="xl"
                            />

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => router.push("/IconPick")} >
                        <View className="flex-row items-center border-b border-outline-100 py-3">
                            <Box className="p-2 bg-gray-100 rounded-[15px] mr-3">
                                <Icon
                                    as={IconIcons}
                                    size="xl"
                                    color="#3B82F6"
                                />
                            </Box>
                            <View className="flex-1">
                                <Text className="font-medium">
                                    Icon
                                </Text>
                            </View>
                            <Icon
                                as={IconChevronRight}
                                size="xl"
                            />
                        </View>
                    </TouchableOpacity>
                </VStack>
                <VStack space="md" className="mt-10">
                    <TouchableOpacity
                        className="bg-blue-500 py-2 rounded-xl w-full"
                        onPress={() => router.push("/wallet")}
                    >
                        <Text className="text-center text-white font-semibold text-lg">
                            Selanjutnya
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        className="py-2 self-center"
                        onPress={() => router.push("/(tabs)")}
                    >
                        <Text className="text-gray-500 text-center text-lg">
                            Skip
                        </Text>
                    </TouchableOpacity>
                </VStack>
            </ScrollView>

            <ActionForm
                showActionsheet={showActionsheet}
                handleClose={handleClose}
                titleActionsheet="Atur Nama Buku"
                titleButton="Simpan"
                fields={[
                    {
                        label: "Nama Buku",
                        value: bukuName,
                        onChange: setBukuName,
                    },
                ]}
            />

        </SafeAreaCustom>
    )
}

export default BookScreen;