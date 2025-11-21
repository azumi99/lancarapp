import HeaderComponent from "@/components/headerComponent";
import ModalDelete from "@/components/modalDelete";
import SafeAreaCustom from "@/components/safeArea";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { IconArrowLeft, IconEdit, IconTrash } from "@tabler/icons-react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Image, TouchableOpacity } from "react-native";

const DetailTransaksi = () => {
    const router = useRouter();
    const { id } = useLocalSearchParams();
    const [showModal, setShowModal] = useState(false);

    const transactionData = [
        {
            date: '05 Senin',
            totalIncome: 'Rp 4.500.000',
            totalExpense: 'Rp 50.000',
            transactions: [
                {
                    id: 1,
                    type: 'expense',
                    icon: '🥘',
                    title: 'Membeli Sarapan',
                    category: 'Makanan',
                    method: 'Uang Cash',
                    amount: 'Rp 50.000',
                    date: '05/05/2025',
                    iconBg: 'bg-red-100',
                    iconColor: 'text-red-600'
                },
                {
                    id: 2,
                    type: 'income',
                    icon: '💰',
                    title: 'Gaji Bulan Mei',
                    category: 'Salary',
                    method: 'Uang Cash',
                    amount: 'Rp 4.500.000',
                    date: '05/05/2025',
                    iconBg: 'bg-green-100',
                    iconColor: 'text-green-600'
                },
                {
                    id: 3,
                    type: 'expense',
                    icon: '↔️',
                    title: 'Transfer dari Bank BCA ke Mandiri',
                    category: 'Bank BCA → Bank Mandiri',
                    method: '',
                    amount: 'Rp 2.500.000',
                    date: '05/05/2025',
                    iconBg: 'bg-gray-100',
                    iconColor: 'text-gray-600'
                },
            ]
        },
        {
            date: '04 Minggu',
            totalIncome: 'Rp 0',
            totalExpense: 'Rp 190.000',
            transactions: [
                {
                    id: 4,
                    type: 'expense',
                    icon: '🥘',
                    title: 'Makan Siang',
                    category: 'Makanan',
                    method: 'Uang Cash',
                    amount: 'Rp 125.000',
                    date: '04/05/2025',
                    iconBg: 'bg-red-100',
                    iconColor: 'text-red-600'
                },
                {
                    id: 5,
                    type: 'expense',
                    icon: '☕',
                    title: 'Membeli Kopi',
                    category: 'Beverage',
                    method: 'Uang Cash',
                    amount: 'Rp 15.000',
                    date: '04/05/2025',
                    iconBg: 'bg-orange-100',
                    iconColor: 'text-orange-600'
                },
                {
                    id: 6,
                    type: 'expense',
                    icon: '🥘',
                    title: 'Sarapan',
                    category: 'Makanan',
                    method: 'Uang Cash',
                    amount: 'Rp 25.000',
                    date: '04/05/2025',
                    iconBg: 'bg-red-100',
                    iconColor: 'text-red-600'
                },
                {
                    id: 7,
                    type: 'expense',
                    icon: '🍔',
                    title: 'Snack Pagi',
                    category: 'Makanan',
                    method: 'Uang Cash',
                    amount: 'Rp 25.000',
                    date: '04/05/2025',
                    iconBg: 'bg-yellow-100',
                    iconColor: 'text-yellow-600'
                },
            ]
        },
        {
            date: '03 Sabtu',
            totalIncome: 'Rp 0',
            totalExpense: 'Rp 755.000',
            transactions: [
                {
                    id: 8,
                    type: 'expense',
                    icon: '👕',
                    title: 'Membeli Baju',
                    category: 'Shopping',
                    method: 'Uang Cash',
                    amount: 'Rp 500.000',
                    date: '03/05/2025',
                    iconBg: 'bg-blue-100',
                    iconColor: 'text-blue-600'
                },
                {
                    id: 9,
                    type: 'expense',
                    icon: '🥘',
                    title: 'Makan Siang',
                    category: 'Food',
                    method: 'Uang Cash',
                    amount: 'Rp 75.000',
                    date: '03/05/2025',
                    iconBg: 'bg-red-100',
                    iconColor: 'text-red-600'
                },
                {
                    id: 10,
                    type: 'expense',
                    icon: '🛒',
                    title: 'Beli Bahan Makanan',
                    category: 'Grocery',
                    method: 'Uang Cash',
                    amount: 'Rp 150.000',
                    date: '03/05/2025',
                    iconBg: 'bg-green-100',
                    iconColor: 'text-green-600'
                },
                {
                    id: 11,
                    type: 'expense',
                    icon: '☕',
                    title: 'Minum Kopi',
                    category: 'Beverage',
                    method: 'Uang Cash',
                    amount: 'Rp 30.000',
                    date: '03/05/2025',
                    iconBg: 'bg-orange-100',
                    iconColor: 'text-orange-600'
                },
            ]
        },
        {
            date: '02 Jumat',
            totalIncome: 'Rp 500.000',
            totalExpense: 'Rp 125.000',
            transactions: [
                {
                    id: 12,
                    type: 'expense',
                    icon: '🍟',
                    title: 'Kentang Goreng',
                    category: 'Shopping',
                    method: 'Uang Cash',
                    amount: 'Rp 25.000',
                    date: '02/05/2025',
                    iconBg: 'bg-orange-100',
                    iconColor: 'text-orange-600'
                },
                {
                    id: 13,
                    type: 'expense',
                    icon: '🍽️',
                    title: 'Makan Malam',
                    category: 'Shopping',
                    method: 'Uang Cash',
                    amount: 'Rp 100.000',
                    date: '02/05/2025',
                    iconBg: 'bg-purple-100',
                    iconColor: 'text-purple-600'
                },
                {
                    id: 14,
                    type: 'income',
                    icon: '💼',
                    title: 'Freelance',
                    category: 'Income',
                    method: 'Uang Cash',
                    amount: 'Rp 500.000',
                    date: '02/05/2025',
                    iconBg: 'bg-green-100',
                    iconColor: 'text-green-600'
                },
            ]
        },
        {
            date: '01 Kamis',
            totalIncome: 'Rp 0',
            totalExpense: 'Rp 125.000',
            transactions: [
                {
                    id: 15,
                    type: 'expense',
                    icon: '🍔',
                    title: 'Makan Siang',
                    category: 'Shopping',
                    method: 'Uang Cash',
                    amount: 'Rp 25.000',
                    date: '01/05/2025',
                    iconBg: 'bg-yellow-100',
                    iconColor: 'text-yellow-600'
                },
                {
                    id: 16,
                    type: 'expense',
                    icon: '🍞',
                    title: 'Sarapan',
                    category: 'Shopping',
                    method: 'Uang Cash',
                    amount: 'Rp 100.000',
                    date: '01/05/2025',
                    iconBg: 'bg-brown-100',
                    iconColor: 'text-brown-600'
                },
            ]
        },
        {
            date: '01 Jummaat',
            totalIncome: 'Rp 0',
            totalExpense: 'Rp 125.000',
            transactions: [
                {
                    id: 17,
                    type: 'expense',
                    icon: '🍔',
                    title: 'Makan Siang',
                    category: 'Shopping',
                    method: 'Uang Cash',
                    amount: 'Rp 25.000',
                    date: '01/05/2025',
                    iconBg: 'bg-yellow-100',
                    iconColor: 'text-yellow-600'
                },
                {
                    id: 18,
                    type: 'expense',
                    icon: '🍞',
                    title: 'Sarapan',
                    category: 'Shopping',
                    method: 'Uang Cash',
                    amount: 'Rp 100.000',
                    date: '01/05/2025',
                    iconBg: 'bg-brown-100',
                    iconColor: 'text-brown-600'
                },
            ]
        },
    ];

    const findTransaction = () => {
        for (const dayData of transactionData) {
            const transaction = dayData.transactions.find(t => t.id.toString() === id);
            if (transaction) return transaction;
        }
        return transactionData[0].transactions[0];
    };

    const transaction = findTransaction();

    interface InfoRowProps {
        label: string;
        value: string;
        labelColor?: string;
    }

    const InfoRow = ({ label, value, labelColor = "text-gray-400" }: InfoRowProps) => (
        <View className="flex-row justify-between items-center py-4 border-b border-gray-100">
            <Text className={`text-sm ${labelColor}`}>{label}</Text>
            <Text className="text-base font-medium text-gray-900">{value}</Text>
        </View>
    );

    return (
        <SafeAreaCustom>
            <HeaderComponent
                iconLeft={IconArrowLeft}
                title="Detail Transaksi"
                handleLeft={() => router.back()}
            />

            <View className="flex-1">
                <View className="bg-red-50 mx-4 mt-4 rounded-xl p-4 flex-row items-center">
                    <View className="w-10 h-10 bg-red-100 rounded-full items-center justify-center mr-3">
                        <Text className="text-lg">{transaction.icon}</Text>
                    </View>
                    <Text className="text-lg font-semibold text-red-600">{transaction.category}</Text>
                </View>

                <View className="mx-4 mt-6 bg-white rounded-xl p-4">
                    <InfoRow
                        label="Tipe Transaksi"
                        value="Pengeluaran"

                    />

                    <InfoRow
                        label="Dompet"
                        value={transaction.method}
                    />

                    <InfoRow
                        label="Jumlah"
                        value={transaction.amount}
                    />

                    <InfoRow
                        label="Date"
                        value={transaction.date}
                    />

                    <InfoRow
                        label="Catatan"
                        value={transaction.title}
                    />

                    <View className="py-4">
                        <Text className="text-sm text-gray-400 mb-3">Foto</Text>
                        <View className="w-full h-32 bg-gray-100 rounded-lg overflow-hidden">
                            <Image
                                source={{ uri: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200' }}
                                className="w-full h-full"
                                resizeMode="cover"
                            />
                        </View>
                    </View>
                </View>

                <View className="mx-4 mt-6 flex-row gap-4">
                    <TouchableOpacity
                        className="flex-1 bg-white rounded-xl p-4 flex-row items-center justify-center border border-gray-200"
                        onPress={() => { }}
                    >
                        <Icon as={IconEdit} size="sm" className="text-gray-600 mr-2" />
                        <Text className="text-gray-800 font-medium">Edit</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        className="flex-1 bg-white rounded-xl p-4 flex-row items-center justify-center border border-red-200"
                        onPress={() => setShowModal(true)}
                    >
                        <Icon as={IconTrash} size="sm" className="text-red-500 mr-2" />
                        <Text className="text-red-500 font-medium">Hapus</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <ModalDelete
                showModal={showModal}
                setShowModal={setShowModal}
            />

        </SafeAreaCustom>
    );
};

export default DetailTransaksi;