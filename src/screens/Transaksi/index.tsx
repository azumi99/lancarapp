import HeaderComponent from "@/components/headerComponent";
import SafeAreaCustom from "@/components/safeArea";
import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { Icon } from "@/components/ui/icon";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { VStack } from "@/components/ui/vstack";
import FilterSheet from "@/src/screens/Transaksi/FilterSheet";
import { IconAdjustmentsHorizontal, IconArrowLeft, IconChevronLeft, IconChevronRight, IconSearch } from "@tabler/icons-react-native";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, TouchableOpacity } from "react-native";


const TransactionScreen = () => {
    const router = useRouter();
    const [currentStickyHeader, setCurrentStickyHeader] = useState(0);
    const [sectionOffsets, setSectionOffsets] = useState<number[]>([]);
    const [showActionsheet, setShowActionsheet] = useState(false);
    const [countFilter, setCountFilter] = useState(0);
    console.log('Count Filter:', countFilter);
    const handleScroll = (event: any) => {
        const scrollY = event.nativeEvent.contentOffset.y;


        if (sectionOffsets.length === 0) return;

        let stickyIndex = 0;

        for (let i = 0; i < sectionOffsets.length; i++) {
            if (scrollY >= sectionOffsets[i]) {

                stickyIndex = i;
            } else {
                break;
            }
        }
        console.log('Scroll Y:', sectionOffsets);
        setCurrentStickyHeader(stickyIndex);
    };

    const onSectionLayout = (index: number, event: any) => {
        const { y } = event.nativeEvent.layout;

        setSectionOffsets(prev => {
            const newOffsets = [...prev];
            newOffsets[index] = y;
            return newOffsets;
        });
    };

    const transactionData = [
        {
            date: '05 Senin',
            totalIncome: 'Rp 4.500.000',
            totalExpense: 'Rp 50.000',
            transactions: [
                { id: 1, type: 'expense', icon: '🥘', title: 'Membeli Sarapan', category: 'Makanan', method: 'Uang Cash', amount: 'Rp 50.000', iconBg: 'bg-red-100', iconColor: 'text-red-600' },
                { id: 2, type: 'income', icon: '💰', title: 'Gaji Bulan Mei', category: 'Salary', method: 'Uang Cash', amount: 'Rp 4.500.000', iconBg: 'bg-green-100', iconColor: 'text-green-600' },
                { id: 3, type: 'expense', icon: '↔️', title: 'Transfer dari Bank BCA ke Mandiri', category: 'Bank BCA → Bank Mandiri', method: '', amount: 'Rp 2.500.000', iconBg: 'bg-gray-100', iconColor: 'text-gray-600' },
            ]
        },
        {
            date: '04 Minggu',
            totalIncome: 'Rp 0',
            totalExpense: 'Rp 190.000',
            transactions: [
                { id: 4, type: 'expense', icon: '🥘', title: 'Makan Siang', category: 'Makanan', method: 'Uang Cash', amount: 'Rp 125.000', iconBg: 'bg-red-100', iconColor: 'text-red-600' },
                { id: 5, type: 'expense', icon: '☕', title: 'Membeli Kopi', category: 'Beverage', method: 'Uang Cash', amount: 'Rp 15.000', iconBg: 'bg-orange-100', iconColor: 'text-orange-600' },
                { id: 6, type: 'expense', icon: '🥘', title: 'Sarapan', category: 'Makanan', method: 'Uang Cash', amount: 'Rp 25.000', iconBg: 'bg-red-100', iconColor: 'text-red-600' },
                { id: 7, type: 'expense', icon: '🍔', title: 'Snack Pagi', category: 'Makanan', method: 'Uang Cash', amount: 'Rp 25.000', iconBg: 'bg-yellow-100', iconColor: 'text-yellow-600' },
            ]
        },
        {
            date: '03 Sabtu',
            totalIncome: 'Rp 0',
            totalExpense: 'Rp 755.000',
            transactions: [
                { id: 8, type: 'expense', icon: '👕', title: 'Membeli Baju', category: 'Shopping', method: 'Uang Cash', amount: 'Rp 500.000', iconBg: 'bg-blue-100', iconColor: 'text-blue-600' },
                { id: 9, type: 'expense', icon: '🥘', title: 'Makan Siang', category: 'Food', method: 'Uang Cash', amount: 'Rp 75.000', iconBg: 'bg-red-100', iconColor: 'text-red-600' },
                { id: 10, type: 'expense', icon: '🛒', title: 'Beli Bahan Makanan', category: 'Grocery', method: 'Uang Cash', amount: 'Rp 150.000', iconBg: 'bg-green-100', iconColor: 'text-green-600' },
                { id: 11, type: 'expense', icon: '☕', title: 'Minum Kopi', category: 'Beverage', method: 'Uang Cash', amount: 'Rp 30.000', iconBg: 'bg-orange-100', iconColor: 'text-orange-600' },
            ]
        },
        {
            date: '02 Jumat',
            totalIncome: 'Rp 500.000',
            totalExpense: 'Rp 125.000',
            transactions: [
                { id: 12, type: 'expense', icon: '🍟', title: 'Kentang Goreng', category: 'Shopping', method: 'Uang Cash', amount: 'Rp 25.000', iconBg: 'bg-orange-100', iconColor: 'text-orange-600' },
                { id: 13, type: 'expense', icon: '🍽️', title: 'Makan Malam', category: 'Shopping', method: 'Uang Cash', amount: 'Rp 100.000', iconBg: 'bg-purple-100', iconColor: 'text-purple-600' },
                { id: 14, type: 'income', icon: '💼', title: 'Freelance', category: 'Income', method: 'Uang Cash', amount: 'Rp 500.000', iconBg: 'bg-green-100', iconColor: 'text-green-600' },
            ]
        },
        {
            date: '01 Kamis',
            totalIncome: 'Rp 0',
            totalExpense: 'Rp 125.000',
            transactions: [
                { id: 15, type: 'expense', icon: '🍔', title: 'Makan Siang', category: 'Shopping', method: 'Uang Cash', amount: 'Rp 25.000', iconBg: 'bg-yellow-100', iconColor: 'text-yellow-600' },
                { id: 16, type: 'expense', icon: '🍞', title: 'Sarapan', category: 'Shopping', method: 'Uang Cash', amount: 'Rp 100.000', iconBg: 'bg-brown-100', iconColor: 'text-brown-600' },
            ]
        },
        {
            date: '01 Jummaat',
            totalIncome: 'Rp 0',
            totalExpense: 'Rp 125.000',
            transactions: [
                { id: 17, type: 'expense', icon: '🍔', title: 'Makan Siang', category: 'Shopping', method: 'Uang Cash', amount: 'Rp 25.000', iconBg: 'bg-yellow-100', iconColor: 'text-yellow-600' },
                { id: 18, type: 'expense', icon: '🍞', title: 'Sarapan', category: 'Shopping', method: 'Uang Cash', amount: 'Rp 100.000', iconBg: 'bg-brown-100', iconColor: 'text-brown-600' },
            ]
        },
    ];

    return (
        <SafeAreaCustom>
            <HeaderComponent iconRightActive={countFilter > 0} customRightElement={<Box className="bg-red-500 px-2 py-1 rounded-lg"><Text className="text-xs text-white ">{countFilter}</Text></Box>} iconLeft={IconArrowLeft} title="Transaksi" boorderless handleLeft={() => router.back()} handleRight={() => setShowActionsheet(true)} roundedIconRight iconRight={IconAdjustmentsHorizontal} styleRight="p-3 bg-white rounded-2xl border border-gray-200 shadow" />
            <View className="flex-1">
                <View className="px-4">
                    <Input
                        variant="outline"
                        size="lg"
                        className="rounded-xl"
                    >
                        <InputSlot className="pr-3 pl-3" >
                            <InputIcon as={IconSearch} />
                        </InputSlot>
                        <InputField placeholder="Search Transaction here" />
                    </Input>
                    <View className="flex-row justify-between items-center py-5">

                        <Icon as={IconChevronLeft} size={'xl'} />
                        <Text className="mx-2 text-base font-bold text-gray-800">Total</Text>
                        <Icon as={IconChevronRight} size={'xl'} />
                    </View>
                </View>
                <View className="flex-row justify-around w-[100%]  bg-gray-100  py-3  shadow border border-gray-200">
                    <View className="items-center">
                        <Text className="text-gray-500 text-xs mb-1">Pemasukan</Text>
                        <Text className="text-green-600 font-bold text-base">Rp 5.000.000</Text>
                    </View>
                    <View className="items-center">
                        <Text className="text-gray-500 text-xs mb-1">Pengeluaran</Text>
                        <Text className="text-red-600 font-bold text-base">Rp 1.855.000</Text>
                    </View>
                    <View className="items-center">
                        <Text className="text-gray-500 text-xs mb-1">Total</Text>
                        <Text className="text-gray-800 font-bold text-base">Rp 3.145.000</Text>
                    </View>
                </View>
                {currentStickyHeader >= 0 && transactionData.length > 0 && (
                    <View className="bg-white border-b border-gray-200 shadow-sm px-4 py-3 relative z-30">
                        <View className="flex-row justify-between items-center">
                            <Text className="bg-gray-700 text-white text-xs rounded-md px-2 py-1 font-medium">
                                {transactionData[currentStickyHeader]?.date}
                            </Text>
                            <Text className="text-green-600 font-bold text-sm">
                                {transactionData[currentStickyHeader]?.totalIncome}
                            </Text>
                            <Text className="text-red-600 font-bold text-sm">
                                {transactionData[currentStickyHeader]?.totalExpense}
                            </Text>
                        </View>
                    </View>
                )}
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    onScroll={handleScroll}
                    scrollEventThrottle={16}
                >

                    {transactionData.length > 0
                        ? transactionData.map((dayData, dayIndex) => (
                            <React.Fragment key={dayIndex}>
                                <View
                                    className=" px-4 py-2 bg-gray-50"
                                    style={{
                                        opacity: currentStickyHeader === dayIndex ? 0 : 1,
                                    }}
                                    onLayout={(event) => onSectionLayout(dayIndex, event)}
                                >
                                    <View className='flex-row justify-between items-center' style={{
                                        display: currentStickyHeader === dayIndex ? 'none' : 'flex',
                                    }}>
                                        <Text className="bg-gray-700 text-white text-xs rounded-md px-2 py-1 font-medium">{dayData.date}</Text>
                                        <Text className="text-green-600 font-bold text-sm">{dayData.totalIncome}</Text>
                                        <Text className="text-red-600 font-bold text-sm">{dayData.totalExpense}</Text>
                                    </View>
                                </View>
                                {dayData.transactions.map((transaction, transactionIndex) => (
                                    <TouchableOpacity onPress={() => router.push(`/Transaksi/${transaction.id}`)} key={transactionIndex} className="px-4 py-3 border-b border-gray-100">
                                        <View className="flex-row items-center">
                                            <View className={`w-10 h-10 ${transaction.iconBg} rounded-full items-center justify-center mr-3`}>
                                                <Text className={`${transaction.iconColor} text-lg`}>{transaction.icon}</Text>
                                            </View>
                                            <View className="flex-1">
                                                <View className="flex-row justify-between items-center mb-1">
                                                    <Text className="text-gray-800 font-medium">{transaction.title}</Text>
                                                    <Text className={`${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'} font-bold`}>{transaction.amount}</Text>
                                                </View>
                                                <Text className="text-gray-500 text-xs">{transaction.category} {transaction.method ? `• ${transaction.method}` : ''}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </React.Fragment>
                        ))

                        :
                        <View className="mt-10 items-center justify-center ">
                            <Image source={require('@/assets/images/notfound.png')} style={{ width: 50, height: 50 }} />
                            <VStack className='items-center mt-4' space='xs'>
                                <Heading >Belum ada data Transaksi</Heading>
                                <Text>Anda belum melakukan transaksi bulan ini.</Text>
                            </VStack>
                        </View>
                    }


                    <View className="h-20" />
                </ScrollView>
                <FilterSheet showActionFilter={showActionsheet} handleClose={() => setShowActionsheet(false)} titleActionsheet="Filter" onFilterChange={(count) => setCountFilter(count)} />
            </View>
        </SafeAreaCustom>
    );
};

export default TransactionScreen;
