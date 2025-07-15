import HeaderComponent from "@/components/headerComponent"
import SafeAreaCustom from "@/components/safeArea"
import { Box } from "@/components/ui/box"
import { HStack } from "@/components/ui/hstack"
import { Icon } from "@/components/ui/icon"
import { Text } from "@/components/ui/text"
import { VStack } from "@/components/ui/vstack"
import { IconArrowLeft, IconBell, IconBook, IconFileText } from "@tabler/icons-react-native"
import { useRouter } from "expo-router"
import { ScrollView } from "react-native"

const NotifikasiScreen = () => {
    const router = useRouter()
    return (
        <SafeAreaCustom>
            <HeaderComponent iconLeft={IconArrowLeft} title="Notifikasi" handleLeft={() => router.back()} />
            <ScrollView className="px-4 mt-3">
                <VStack space="md">
                    {/* Notifikasi 1 */}
                    <Box className="bg-slate-50 rounded-2xl border border-slate-200 p-4">
                        <HStack className="items-center" space="sm">
                            <Box className="bg-orange-100 p-1.5 rounded-full">
                                <Icon as={IconBell} size="sm" color="#F97316" />
                            </Box>
                            <Text className="text-xs text-gray-500">Peringatan · 18 Nov 2024, 04:45</Text>
                        </HStack>

                        <Text className="font-semibold text-base mt-2 text-gray-800">Anggaran Mendekati Batas</Text>
                        <Text className="text-sm text-gray-600 mt-1">Anggaran anda untuk Makanan sedikit lagi</Text>

                        <HStack className="bg-white border border-slate-200 rounded-xl p-3 mt-3 justify-between">
                            <VStack>
                                <Text className="text-xs text-gray-500">Anggaran</Text>
                                <Text className="text-sm font-medium text-gray-800">Rp 3.000.000</Text>
                            </VStack>
                            <VStack>
                                <Text className="text-xs text-gray-500">Pengeluaran</Text>
                                <Text className="text-sm font-medium text-red-500">Rp 2.900.000</Text>
                            </VStack>
                            <VStack>
                                <Text className="text-xs text-gray-500">Persentase</Text>
                                <Text className="text-sm font-medium text-gray-800">90%</Text>
                            </VStack>
                        </HStack>
                    </Box>

                    {/* Notifikasi 2 */}
                    <Box className=" rounded-2xl border border-slate-200 p-4">
                        <HStack className="items-center" space="sm">
                            <Box className="bg-blue-100 p-1.5 rounded-full">
                                <Icon as={IconFileText} size="sm" color="#3B82F6" />
                            </Box>
                            <Text className="text-xs text-gray-500">Tagihan · 18 Nov 2024, 04:45</Text>
                        </HStack>

                        <Text className="font-semibold text-base mt-2 text-gray-800">Asuransi Jiwa</Text>
                        <Text className="text-sm text-gray-600 mt-1">
                            Tagihan Asuransi Jiwa Rp 550.000, akan dicatat pada tanggal 24 Mei 2025.
                        </Text>
                    </Box>

                    {/* Notifikasi 3 */}
                    <Box className=" rounded-2xl border border-slate-200 p-4">
                        <HStack className="items-center" space="sm">
                            <Box className="bg-slate-200 p-1.5 rounded-full">
                                <Icon as={IconBook} size="sm" color="#334155" />
                            </Box>
                            <Text className="text-xs text-gray-500">Buku · 18 Nov 2024, 04:45</Text>
                        </HStack>

                        <Text className="font-semibold text-base mt-2 text-gray-800">Sukses Bergabung</Text>
                        <Text className="text-sm text-gray-600 mt-1">
                            Alexander telah bergabung ke Holiday Person's
                        </Text>
                    </Box>

                    {/* Footer */}
                    <Text className="text-center text-xs text-gray-400 mt-3 mb-6">Akhir dari notifikasi</Text>
                </VStack>
            </ScrollView>
        </SafeAreaCustom>
    )
}

export default NotifikasiScreen;