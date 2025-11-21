import React, { useEffect, useState } from 'react';
import type { ColorValue } from 'react-native';
import {
    Dimensions,
    Image,
    Pressable,
    ScrollView,
    Text,
    TouchableOpacity,
    useColorScheme,
    View
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
    IconBell,
    IconCalendarCheck,
    IconChartBar,
    IconChevronLeft,
    IconChevronRight,
    IconCloudComputing,
    IconDatabaseImport,
    IconFileArrowRight,
    IconRefresh,
    IconSettingsAutomation,
    IconWallet
} from '@tabler/icons-react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Heading } from '@/components/ui/heading';
import { Icon } from '@/components/ui/icon';
import { VStack } from '@/components/ui/vstack';
import { useTabBar } from '@/src/store/TabBarContext';
import { useRouter } from 'expo-router';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
    Extrapolate,
    interpolate,
    runOnJS,
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring
} from 'react-native-reanimated';
import BookMenu from './menuBook';



const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const SNAP_POINTS = {
    collapsed: SCREEN_HEIGHT * 0.49,
    expanded: SCREEN_HEIGHT * 0.05,
};

const HomeScreen = () => {
    const insets = useSafeAreaInsets();
    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';
    const router = useRouter();
    const { hideTabBar, showTabBar } = useTabBar();

    const [isOpen, setIsOpen] = useState(true);
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentStickyHeader, setCurrentStickyHeader] = useState(0);
    const [sectionOffsets, setSectionOffsets] = useState<number[]>([]);
    const handleClose = () => setIsOpen(false);

    const gradientColors: [ColorValue, ColorValue] = isDark
        ? ['#0E0E0E', '#1C1C1C']
        : ['#DAE7FF', '#FFFFFF'];

    const backgroundImage = isDark
        ? require('@/assets/images/background-dark.png')
        : require('@/assets/images/background.png');

    const menuItems = [
        { name: 'Pengingat', icon: IconCalendarCheck },
        { name: 'Pembayaran Otomatis', icon: IconSettingsAutomation },
        { name: 'Berbagi Data', icon: IconCloudComputing },
        { name: 'Dompet', icon: IconWallet },
        { name: 'Anggaran', icon: IconChartBar },
        { name: 'Mulai Siklus', icon: IconRefresh },
        { name: 'Ekspor', icon: IconFileArrowRight },
        { name: 'Cadangkan', icon: IconDatabaseImport },
    ];

    const translateY = useSharedValue(SNAP_POINTS.collapsed);
    const contextY = useSharedValue(0);

    const handleTabBarVisibility = (expanded: boolean) => {
        if (expanded) {
            hideTabBar();
        } else {
            showTabBar();
        }
        setIsExpanded(expanded);
    };

    useEffect(() => {
        return () => {
            showTabBar();
        };
    }, [showTabBar]);

    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_, ctx: any) => {
            ctx.startY = translateY.value;
        },
        onActive: (event, ctx: any) => {
            if (event.translationY < 0) {
                translateY.value = ctx.startY + event.translationY;
            }
        },
        onEnd: (event) => {
            if (event.translationY < -50 || event.velocityY < -500) {
                translateY.value = withSpring(SNAP_POINTS.expanded, {
                    damping: 20,
                    stiffness: 150
                });
                runOnJS(handleTabBarVisibility)(true);
            } else {
                translateY.value = withSpring(SNAP_POINTS.collapsed, {
                    damping: 20,
                    stiffness: 150
                });
                runOnJS(handleTabBarVisibility)(false);
            }
        },
    });

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: translateY.value }],
        };
    });

    const overlayStyle = useAnimatedStyle(() => {
        const opacity = interpolate(
            translateY.value,
            [SNAP_POINTS.collapsed, SNAP_POINTS.expanded],
            [0, 0.5],
            Extrapolate.CLAMP
        );

        return {
            opacity,
        };
    });

    const contentStyle = useAnimatedStyle(() => {
        const scale = interpolate(
            translateY.value,
            [SNAP_POINTS.expanded, SNAP_POINTS.collapsed],
            [0.95, 1],
            Extrapolate.CLAMP
        );

        return {
            transform: [{ scale }],
        };
    });

    const handleOverlayTap = () => {
        translateY.value = withSpring(SNAP_POINTS.collapsed, {
            damping: 20,
            stiffness: 150
        });
        handleTabBarVisibility(false);
    };

    const transactionData = [

        {
            date: '05 Senin',
            totalIncome: 'Rp 4.500.000',
            totalExpense: 'Rp 50.000',
            transactions: [
                { type: 'expense', icon: '🥘', title: 'Membeli Sarapan', category: 'Makanan', method: 'Uang Cash', amount: 'Rp 50.000', iconBg: 'bg-red-100', iconColor: 'text-red-600' },
                { type: 'income', icon: '💰', title: 'Gaji Bulan Mei', category: 'Salary', method: 'Uang Cash', amount: 'Rp 4.500.000', iconBg: 'bg-green-100', iconColor: 'text-green-600' },
                { type: 'expense', icon: '↔️', title: 'Transfer dari Bank BCA ke Mandiri', category: 'Bank BCA → Bank Mandiri', method: '', amount: 'Rp 2.500.000', iconBg: 'bg-gray-100', iconColor: 'text-gray-600' },
            ]
        },
        {
            date: '04 Minggu',
            totalIncome: 'Rp 0',
            totalExpense: 'Rp 190.000',
            transactions: [
                { type: 'expense', icon: '🥘', title: 'Makan Siang', category: 'Makanan', method: 'Uang Cash', amount: 'Rp 125.000', iconBg: 'bg-red-100', iconColor: 'text-red-600' },
                { type: 'expense', icon: '☕', title: 'Membeli Kopi', category: 'Beverage', method: 'Uang Cash', amount: 'Rp 15.000', iconBg: 'bg-orange-100', iconColor: 'text-orange-600' },
                { type: 'expense', icon: '🥘', title: 'Sarapan', category: 'Makanan', method: 'Uang Cash', amount: 'Rp 25.000', iconBg: 'bg-red-100', iconColor: 'text-red-600' },
                { type: 'expense', icon: '🍔', title: 'Snack Pagi', category: 'Makanan', method: 'Uang Cash', amount: 'Rp 25.000', iconBg: 'bg-yellow-100', iconColor: 'text-yellow-600' },
            ]
        },
        {
            date: '03 Sabtu',
            totalIncome: 'Rp 0',
            totalExpense: 'Rp 755.000',
            transactions: [
                { type: 'expense', icon: '👕', title: 'Membeli Baju', category: 'Shopping', method: 'Uang Cash', amount: 'Rp 500.000', iconBg: 'bg-blue-100', iconColor: 'text-blue-600' },
                { type: 'expense', icon: '🥘', title: 'Makan Siang', category: 'Food', method: 'Uang Cash', amount: 'Rp 75.000', iconBg: 'bg-red-100', iconColor: 'text-red-600' },
                { type: 'expense', icon: '🛒', title: 'Beli Bahan Makanan', category: 'Grocery', method: 'Uang Cash', amount: 'Rp 150.000', iconBg: 'bg-green-100', iconColor: 'text-green-600' },
                { type: 'expense', icon: '☕', title: 'Minum Kopi', category: 'Beverage', method: 'Uang Cash', amount: 'Rp 30.000', iconBg: 'bg-orange-100', iconColor: 'text-orange-600' },
            ]
        },
        {
            date: '02 Jumat',
            totalIncome: 'Rp 500.000',
            totalExpense: 'Rp 125.000',
            transactions: [
                { type: 'expense', icon: '🍟', title: 'Kentang Goreng', category: 'Shopping', method: 'Uang Cash', amount: 'Rp 25.000', iconBg: 'bg-orange-100', iconColor: 'text-orange-600' },
                { type: 'expense', icon: '🍽️', title: 'Makan Malam', category: 'Shopping', method: 'Uang Cash', amount: 'Rp 100.000', iconBg: 'bg-purple-100', iconColor: 'text-purple-600' },
                { type: 'income', icon: '💼', title: 'Freelance', category: 'Income', method: 'Uang Cash', amount: 'Rp 500.000', iconBg: 'bg-green-100', iconColor: 'text-green-600' },
            ]
        },
        {
            date: '01 Kamis',
            totalIncome: 'Rp 0',
            totalExpense: 'Rp 125.000',
            transactions: [
                { type: 'expense', icon: '🍔', title: 'Makan Siang', category: 'Shopping', method: 'Uang Cash', amount: 'Rp 25.000', iconBg: 'bg-yellow-100', iconColor: 'text-yellow-600' },
                { type: 'expense', icon: '🍞', title: 'Sarapan', category: 'Shopping', method: 'Uang Cash', amount: 'Rp 100.000', iconBg: 'bg-brown-100', iconColor: 'text-brown-600' },
            ]
        },
    ];

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

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <LinearGradient
                colors={gradientColors}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                className="flex-1"
            >
                <Image
                    source={backgroundImage}
                    alt="Background illustration"
                    resizeMode="cover"
                    className="absolute -top-0 w-full h-auto"
                />

                <Animated.View style={[contentStyle, { flex: 1, paddingTop: insets.top }]}>
                    <ScrollView className='px-4' showsVerticalScrollIndicator={false}
                        scrollEnabled={!isExpanded}
                    >
                        <View className="flex-row justify-between items-center pt-2">
                            <BookMenu />
                            <TouchableOpacity onPress={() => router.push('Notifikasi')}>
                                <View className='p-3 bg-white rounded-2xl border border-gray-200 shadow'>
                                    <IconBell size={24} color="#4B5563" className="text-gray-700" />
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View className="bg-[#F1F5F9] mt-6 rounded-3xl border border-gray-200">
                            <View className="rounded-3xl px-4 py-3 flex-row items-center justify-between bg-white">
                                <View>
                                    <View className="flex-row items-center mb-1">
                                        <IconWallet size={20} color="black" className=" mr-1" />
                                        <Text className="text-sm font-semibold">Total Saldo</Text>
                                    </View>
                                    <Text className="text-2xl font-bold text-blue-600">Rp 48.750.000</Text>
                                </View>
                                <IconChevronRight size={20} color="#9CA3AF" className="text-gray-400" />
                            </View>

                            <LinearGradient
                                colors={['rgba(241, 245, 249, 1)', 'rgba(255, 255, 255, 1)', 'rgba(241, 245, 249, 1)']}
                                start={{ x: 0.5, y: 0 }}
                                end={{ x: 0.5, y: 1 }}
                                style={{
                                    borderRadius: 24,
                                    marginTop: 12,
                                    paddingVertical: 16,
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    justifyContent: 'space-around',
                                }}
                            >
                                {menuItems.map((item, index) => (
                                    <Pressable key={index} className="w-[22%] items-center mb-4">
                                        <View className="bg-white p-2.5 rounded-2xl border border-gray-200 mb-1">
                                            {React.createElement(item.icon, { size: 24, color: '#2563eb', className: 'text-blue-600' })}
                                        </View>
                                        <Text className="text-[11px] text-center leading-tight">{item.name}</Text>
                                    </Pressable>
                                ))}
                            </LinearGradient>
                        </View>

                        <View style={{ height: SNAP_POINTS.collapsed - (insets.top + 100) }} />
                    </ScrollView>
                </Animated.View>

                <Animated.View
                    style={[
                        overlayStyle,
                        {
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            zIndex: 10,
                        }
                    ]}
                    pointerEvents={isExpanded ? 'auto' : 'none'}
                >
                    <Pressable
                        style={{ flex: 1 }}
                        onPress={handleOverlayTap}
                    />
                </Animated.View>

                <Animated.View
                    style={[
                        animatedStyle,
                        {
                            position: 'absolute',
                            width: '100%',
                            bottom: 0,
                            height: SCREEN_HEIGHT - SNAP_POINTS.expanded + 50,
                            zIndex: 20,
                        }
                    ]}
                    className="bg-white border border-gray-200 rounded-t-3xl shadow-lg"
                >
                    <PanGestureHandler onGestureEvent={gestureHandler}>
                        <Animated.View className="pt-4">
                            <View className="w-16 h-1.5 bg-gray-300 rounded-full mx-auto mb-4" />

                            <View className="flex-row justify-between items-center px-4 mb-1">
                                <Text className="text-base font-bold text-gray-800">Transaksi Terakhir</Text>
                                <TouchableOpacity onPress={() => router.push("/Transaksi")} className="flex-row items-center">
                                    <Text className="text-blue-600 text-sm mr-1 font-bold">Semua Transaksi</Text>
                                    <IconChevronRight size={16} color="#2563eb" />
                                </TouchableOpacity>
                            </View>

                            <View className="flex-row justify-between items-center mx-4 mb-2  py-2">
                                <Icon as={IconChevronLeft} size={'xl'} />
                                <Text className="mx-2 text-base font-bold text-gray-800">May 2025</Text>
                                <Icon as={IconChevronRight} size={'xl'} />
                            </View>

                            <View className="flex-row justify-around  bg-gray-100  py-3  shadow border border-gray-200">
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
                        </Animated.View>
                    </PanGestureHandler>

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

                    <Animated.View style={{ flex: 1 }}>

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
                                            <View key={transactionIndex} className="px-4 py-3 border-b border-gray-100">
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
                                            </View>
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
                    </Animated.View>
                </Animated.View>
            </LinearGradient>
        </GestureHandlerRootView>
    );
};

export default HomeScreen;