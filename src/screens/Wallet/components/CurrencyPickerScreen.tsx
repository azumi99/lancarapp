import HeaderComponent from "@/components/headerComponent";
import SafeAreaCustom from "@/components/safeArea";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { IconX } from "@tabler/icons-react-native";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, TouchableOpacity, View, useColorScheme } from "react-native";

interface Currency {
    code: string;
    name: string;
    rate: string;
}

const currencyOptions: Currency[] = [
    { code: "IDR", name: "Indonesian Rupiah", rate: "" },
    { code: "USD", name: "United States Dollar", rate: "USD 1 = IDR 15,918" },
    { code: "EUR", name: "Euro", rate: "EUR 1 = IDR 17,668" },
    { code: "GBP", name: "British Pound", rate: "GBP 1 = IDR 20,074" },
    { code: "JPY", name: "Japanese Yen", rate: "JPY 1 = IDR 110.34" },
    { code: "AUD", name: "Australian Dollar", rate: "AUD 1 = IDR 11,045" },
    { code: "CAD", name: "Canadian Dollar", rate: "CAD 1 = IDR 12,195" },
    { code: "CHF", name: "Swiss Franc", rate: "CHF 1 = IDR 17,950" },
    { code: "CNY", name: "Chinese Yuan", rate: "CNY 1 = IDR 2,334" },
    { code: "INR", name: "Indian Rupee", rate: "" },
];

const CurrencyPickerScreen = () => {
    const router = useRouter();
    const [selectedCurrency, setSelectedCurrency] = useState("IDR");
    const colorScheme = useColorScheme();

    const isDark = colorScheme === 'dark';

    return (
        <SafeAreaCustom>
            {/* Header with close button and title */}
            <HeaderComponent
                title="Pilih Mata Uang"
                iconLeft={IconX}
                handleLeft={() => router.back()}
            />

            <ScrollView
                className={`flex-1 ${isDark ? 'bg-black' : 'bg-white'}`}
                contentContainerStyle={{ paddingBottom: 20 }}
                showsVerticalScrollIndicator={false}
            >
                {/* Selected Currency Section */}
                <View className={` ${isDark ? 'bg-black' : 'bg-white'}`}>
                    <Text className={`text-xs px-4 py-3 font-medium ${isDark
                        ? 'text-gray-400 bg-gray-900'
                        : 'text-gray-500 bg-gray-100'
                        }`}>
                        Mata Uang Terpilih
                    </Text>

                    <TouchableOpacity
                        onPress={() => setSelectedCurrency("IDR")}
                        className={`px-4 py-4 border-b ${isDark
                            ? 'bg-black border-gray-700'
                            : 'bg-white border-gray-100'
                            }`}
                    >
                        <View className="flex-row items-center justify-between">
                            <Text className={`text-base font-medium ${isDark ? 'text-white' : 'text-gray-900'
                                }`}>
                                Indonesian Rupiah – IDR
                            </Text>
                            <View className={`w-6 h-6 rounded-full items-center justify-center ${isDark ? 'bg-blue-500' : 'bg-blue-500'
                                }`}>
                                <View className="w-2 h-2 bg-white rounded-full" />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Other Currencies Section */}
                <View className={`mt-5 ${isDark ? 'bg-black' : 'bg-white'}`}>
                    <Text className={`text-xs px-4 py-3 font-medium ${isDark
                        ? 'text-gray-400 bg-gray-900'
                        : 'text-gray-500 bg-gray-100'
                        }`}>
                        Mata uang lainnya
                    </Text>

                    {currencyOptions.slice(1).map((item, index) => (
                        <TouchableOpacity
                            key={item.code}
                            onPress={() => setSelectedCurrency(item.code)}
                            className={`px-4 py-4 border-b ${isDark
                                ? 'bg-black border-gray-700'
                                : 'bg-white border-gray-100'
                                }`}
                        >
                            <View className="flex-row items-center justify-between">
                                <VStack className="flex-1">
                                    <Text className={`text-base font-medium mb-1 ${isDark ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        {`${item.name} – ${item.code}`}
                                    </Text>
                                    {item.rate ? (
                                        <Text className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'
                                            }`}>
                                            {item.rate}
                                        </Text>
                                    ) : null}
                                </VStack>

                                {selectedCurrency === item.code ? (
                                    <View className={`w-6 h-6 rounded-full items-center justify-center ml-3 ${isDark ? 'bg-blue-500' : 'bg-blue-500'
                                        }`}>
                                        <View className="w-2 h-2 bg-white rounded-full" />
                                    </View>
                                ) : (
                                    <View className={`w-6 h-6 rounded-full border-2 ml-3 ${isDark ? 'border-gray-600' : 'border-gray-300'
                                        }`} />
                                )}
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaCustom>
    );
};

export default CurrencyPickerScreen;