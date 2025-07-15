import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { VStack } from '@/components/ui/vstack';
import { IconBook2, IconCheck, IconChevronDown, IconCreditCard, IconPlus } from '@tabler/icons-react-native';
import React, { useRef, useState } from 'react';
import { Dimensions, Modal, TouchableOpacity } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const BookMenu = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [buttonLayout, setButtonLayout] = useState({ x: 0, y: 0, width: 0, height: 0 });
    const [selectedBook, setSelectedBook] = useState('My Book');
    const touchableRef = useRef<React.ElementRef<typeof TouchableOpacity>>(null);

    const handlePress = () => {
        touchableRef.current?.measure((fx, fy, width, height, px, py) => {
            setButtonLayout({
                x: px,
                y: py,
                width: width,
                height: height
            });
            setIsVisible(true);
        });
    };

    const menuItems = [
        {
            id: 'my-book',
            label: 'My Book',
            icon: IconBook2,
            selected: selectedBook === 'My Book'
        },
        {
            id: 'holiday-persons',
            label: "Holiday Person's",
            icon: IconCreditCard,
            avatars: [
                { id: 1, color: '#FF6B6B' },
                { id: 2, color: '#4ECDC4' },
                { id: 3, color: '#45B7D1' }
            ],
            selected: selectedBook === "Holiday Person's"
        }
    ];

    type MenuItemType = {
        id: string;
        label: string;
        icon?: React.ComponentType<{ size: number; color: string }>;
        avatars?: { id: number; color: string }[];
        selected: boolean;
    };

    const MenuItem = ({ item, onPress }: { item: MenuItemType; onPress: () => void }) => (
        <TouchableOpacity
            onPress={onPress}
            className={`flex-row items-center p-4  `}
        >
            <View className="flex-row items-center flex-1">
                {item.icon && (
                    <View className="w-6 h-6 mr-3 items-center justify-center">
                        <item.icon size={20} color={item.selected ? '#3B82F6' : '#374151'} />
                    </View>
                )}

                <Text className={`font-medium ${item.selected ? 'text-blue-600' : 'text-gray-800'}`}>
                    {item.label}
                </Text>

                {item.avatars && (
                    <View className="flex-row ml-1   ">
                        {item.avatars.map((avatar, index) => (
                            <View
                                key={avatar.id}
                                className={`w-6 h-6 rounded-full items-center justify-center ${index > 0 ? '-ml-2' : ''}`}
                                style={{
                                    backgroundColor: avatar.color,
                                    zIndex: (item.avatars?.length ?? 0) - index,
                                    borderWidth: 2,
                                    borderColor: 'white'
                                }}
                            >
                                <Text className="text-white text-xs font-bold">
                                    {String.fromCharCode(65 + index)}
                                </Text>
                            </View>
                        ))}
                    </View>
                )}


            </View>

            {item.selected && (
                <View className="w-5 h-5 bg-blue-500 rounded-full items-center justify-center">
                    <IconCheck size={12} color="white" />
                </View>
            )}
        </TouchableOpacity>
    );

    const handleSelectItem = (item: MenuItemType) => {
        setSelectedBook(item.label);
        setIsVisible(false);
    };

    return (
        <>
            <TouchableOpacity
                ref={touchableRef}
                onPress={handlePress}
            >
                <View className="flex-row border border-gray-200 items-center bg-white rounded-full p-2 shadow">
                    <IconBook2 size={24} color="black" className="mr-2" />
                    <Text className="font-bold">{selectedBook}</Text>
                    <IconChevronDown size={24} color="black" className="ml-1" />
                </View>
            </TouchableOpacity>

            <Modal
                visible={isVisible}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setIsVisible(false)}
                statusBarTranslucent={true}
            >
                <View
                    className="bg-black/40"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,

                    }}
                >
                    <TouchableOpacity
                        className="flex-1"
                        activeOpacity={1}
                        onPress={() => setIsVisible(false)}
                    >
                        <View
                            className="bg-gray-100 rounded-3xl p-3 shadow-lg overflow-hidden"
                            style={{
                                position: 'absolute',
                                top: buttonLayout.y + buttonLayout.height + 8,
                                left: 16,
                                right: 16,
                                width: screenWidth - 32,
                            }}
                        >
                            <VStack space='md'>
                                <View className='bg-white rounded-3xl shadow-lg'>
                                    {menuItems.map((item) => (
                                        <MenuItem
                                            key={item.id}
                                            item={item}
                                            onPress={() => handleSelectItem(item)}
                                        />
                                    ))}
                                </View>
                                <HStack space='md' className="justify-between w-full">
                                    <TouchableOpacity
                                        onPress={() => {
                                            console.log('Add new book');
                                            setIsVisible(false);
                                        }}
                                        className="flex-1 rounded-xl flex-row items-center justify-center px-4 p-2 border border-gray-200 "
                                    >
                                        <Text className="font-semibold">Bergabung</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => {
                                            console.log('Add new book');
                                            setIsVisible(false);
                                        }}
                                        className="flex-1 rounded-xl flex-row items-center justify-center px-4 p-2 bg-blue-500"
                                    >
                                        <Icon as={IconPlus} size={'lg'} color="white" className="mr-2" />
                                        <Text className="font-semibold text-white">Tambah Buku</Text>
                                    </TouchableOpacity>
                                </HStack>
                            </VStack>
                        </View>
                    </TouchableOpacity>
                </View>
            </Modal>
        </>
    );
};

export default BookMenu;