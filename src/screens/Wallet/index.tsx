import ActionForm from "@/components/actionForm";
import HeaderComponent from "@/components/headerComponent";
import SafeAreaCustom from "@/components/safeArea";
import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { Icon } from "@/components/ui/icon";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { VStack } from "@/components/ui/vstack";
import WalletPickerSheet from "@/src/screens/Wallet/components/WalletPickerSheet";
import { IconArrowLeft, IconChevronRight, IconCurrencyDollar, IconIcons, IconWallet, IconWorld } from "@tabler/icons-react-native";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";

const WalletScreen = () => {
    const router = useRouter();
    const [showNamaDompetSheet, setShowNamaDompetSheet] = useState(false);
    const [showSaldoSheet, setShowSaldoSheet] = useState(false);
    const [bukuName, setBukuName] = useState("");
    const [saldo, setSaldo] = useState("");
    const [isPickerOpen, setIsPickerOpen] = useState(false);
    const [selectedWallet, setSelectedWallet] = useState("Cash");


    const handleClose = () => { router.back(); }
    const items = [
        {
            label: "Tipe Dompet",
            value: selectedWallet,
            icon: IconWallet,
            onPress: () => setIsPickerOpen(true),
        },
        {
            label: "Nama Dompet",
            value: bukuName || "Belum diisi",
            icon: IconWallet,
            onPress: () => setShowNamaDompetSheet(true),
        },
        {
            label: "Saldo",
            value: saldo || "Rp. 0",
            icon: IconCurrencyDollar,
            onPress: () => setShowSaldoSheet(true),
        },
        {
            label: "Mata Uang",
            value: "Pilih Mata Uang",
            icon: IconWorld,
            onPress: () => router.push("/wallet/CurrencyPickerScreen"),
        },
        {
            label: "Icon",
            value: "",
            icon: IconIcons,
            onPress: () => router.push("/IconPick"),
        },
    ];

    return (
        <SafeAreaCustom>

            <ScrollView className="flex-1">
                <HeaderComponent iconLeft={IconArrowLeft} roundedIconLeft boorderless handleLeft={handleClose} />
                <View className=" px-6 mb-10">
                    <View className="items-center">
                        <Image
                            size="2xl"
                            source={require('@/assets/images/wallet.png')}
                            alt="Book illustration"
                            resizeMode="contain"
                        />
                    </View>
                    <VStack space="md" className="items-center">
                        <Heading className="text-center">Atur Dompet Kamu</Heading>
                        <Text className="text-center">Yuk atur dompet kamu terlebih dahulu, sebelum memulai</Text>
                    </VStack>
                    <VStack className="mt-10">
                        {items.map((item, index) => (
                            <TouchableOpacity key={index} onPress={item.onPress}>
                                <View className="flex-row items-center border-b border-outline-100 py-3">
                                    <Box className="p-2 bg-gray-100 rounded-[15px] mr-3">
                                        <Icon as={item.icon} size="xl" color="#3B82F6" />
                                    </Box>
                                    <View className="flex-1">
                                        <Text className="font-medium">{item.label}</Text>
                                    </View>
                                    {item.value ? (
                                        <Text className="text-gray-400 mr-2">{item.value}</Text>
                                    ) : null}
                                    <Icon as={IconChevronRight} size="xl" />
                                </View>
                            </TouchableOpacity>
                        ))}
                    </VStack>
                    <VStack space="md" className="mt-10">
                        <TouchableOpacity
                            className="bg-blue-500 py-2 rounded-xl w-full"
                            onPress={() => router.push("/welcome")}
                        >
                            <Text className="text-center text-white font-semibold text-lg">
                                Selanjutnya
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            className="py-2 self-center"
                            onPress={() => { }}
                        >
                            <Text className="text-gray-500 text-center text-lg">
                                Skip
                            </Text>
                        </TouchableOpacity>
                    </VStack>
                </View>
            </ScrollView>
            <WalletPickerSheet
                isOpen={isPickerOpen}
                onClose={() => setIsPickerOpen(false)}
                selected={selectedWallet}
                onSelect={setSelectedWallet}
            />
            <ActionForm
                showActionsheet={showNamaDompetSheet}
                handleClose={() => setShowNamaDompetSheet(false)}
                titleActionsheet="Nama Dompet"
                titleButton="Save"
                fields={[
                    {
                        label: "Nama Dompet",
                        value: bukuName,
                        onChange: setBukuName,
                    },
                ]}
            />

            <ActionForm
                showActionsheet={showSaldoSheet}
                handleClose={() => setShowSaldoSheet(false)}
                titleActionsheet="Saldo"
                titleButton="Save"
                fields={[
                    {
                        label: "Saldo",
                        value: saldo,
                        onChange: setSaldo,
                    },
                ]}
            />


        </SafeAreaCustom>
    );
};

export default WalletScreen;