import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import React, { useState } from "react";
import { FlatList, SafeAreaView, TextInput, TouchableOpacity } from "react-native";

const mockData = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    title: `Item ke-${i + 1}`,
}));

const GrafikScreen = () => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = () => {
        console.log("Data dikirim:", inputValue);
        setInputValue("");
    };

    return (
        <SafeAreaView className="flex-1">
            <Box className="flex-1 w-full px-4 py-20">
                <Text className="text-xl font-bold mb-4 self-center">Grafik Data</Text>

                {/* Form Input */}
                <Box className="flex-row items-center mb-4">
                    <TextInput
                        value={inputValue}
                        onChangeText={setInputValue}
                        placeholder="Tambah item..."
                        className="flex-1 border border-gray-300 rounded-lg p-3 bg-white text-gray-800"
                    />
                    <TouchableOpacity
                        onPress={handleSubmit}
                        className="ml-2 bg-blue-500 px-4 py-3 rounded-lg"
                    >
                        <Text className="text-white font-semibold">Tambah</Text>
                    </TouchableOpacity>
                </Box>

                {/* List */}
                <FlatList
                    data={mockData}
                    keyExtractor={(item) => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: 20,
                    }}
                    renderItem={({ item }) => (
                        <Box className="bg-white p-4 mb-3 rounded-xl shadow-sm">
                            <Text className="text-base text-gray-800">{item.title}</Text>
                        </Box>
                    )}
                />
            </Box>
        </SafeAreaView>
    );
};

export default GrafikScreen;
