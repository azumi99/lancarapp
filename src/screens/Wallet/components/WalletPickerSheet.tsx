import {
    Actionsheet,
    ActionsheetBackdrop,
    ActionsheetContent
} from "@/components/ui/actionsheet";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { VStack } from "@/components/ui/vstack";
import {
    IconBuildingBank,
    IconChartLine,
    IconCheck,
    IconCreditCard,
    IconDeviceImac,
    IconMoneybag,
    IconUserDollar,
    IconWallet,
    IconX,
} from "@tabler/icons-react-native";
import React from "react";
import { TouchableOpacity, useColorScheme } from "react-native";

interface WalletItem {
    label: string;
    icon: React.ReactNode;
}

const WalletPickerSheet: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    selected: string;
    onSelect: (label: string) => void;
}> = ({ isOpen, onClose, selected, onSelect }) => {
    const colorScheme = useColorScheme();
    const isDark = colorScheme === "dark";

    const iconWrapper = (
        IconComponent: React.ElementType,
        bgLight: string,
        bgDark: string
    ) => (
        <View
            className={`p-2 rounded-full ${isDark ? bgDark : bgLight
                }`}
        >
            <Icon as={IconComponent} size="xl" color={isDark ? "#fff" : "#000"} />
        </View>
    );

    const walletOptions: WalletItem[] = [
        { label: "Cash", icon: iconWrapper(IconWallet, "bg-green-500", "bg-green-400") },
        { label: "Debit Card", icon: iconWrapper(IconCreditCard, "bg-yellow-400", "bg-yellow-300") },
        { label: "Credit Card", icon: iconWrapper(IconBuildingBank, "bg-blue-500", "bg-blue-400") },
        { label: "Virtual Account", icon: iconWrapper(IconDeviceImac, "bg-sky-400", "bg-sky-300") },
        { label: "Investment", icon: iconWrapper(IconChartLine, "bg-cyan-400", "bg-cyan-300") },
        { label: "Owes me / Receivables", icon: iconWrapper(IconUserDollar, "bg-amber-400", "bg-amber-300") },
        { label: "I owe / Payables", icon: iconWrapper(IconMoneybag, "bg-orange-400", "bg-orange-300") },
    ];

    return (
        <Actionsheet isOpen={isOpen} onClose={onClose}>
            <ActionsheetBackdrop />
            <ActionsheetContent>
                {/* <ActionsheetDragIndicatorWrapper>
                    <ActionsheetDragIndicator />
                </ActionsheetDragIndicatorWrapper> */}

                <HStack className="w-full items-center justify-between py-3 ">
                    <View className="w-5" />
                    <Heading className="text-center flex-1">Pilih Dompet</Heading>
                    <TouchableOpacity onPress={onClose}>
                        <Icon as={IconX} size="xl" />
                    </TouchableOpacity>
                </HStack>

                <Divider className="my-0.5 w-[100vh]" />

                <VStack className="w-full">
                    {walletOptions.map((item) => (
                        <TouchableOpacity
                            key={item.label}
                            onPress={() => {
                                onSelect(item.label);
                                onClose();
                            }}
                        >
                            <HStack className="items-center  py-3 justify-between">
                                <HStack space="md" className="items-center">
                                    {item.icon}
                                    <Text className={selected === item.label ? "text-blue-500 font-medium" : ""}>
                                        {item.label}
                                    </Text>
                                </HStack>
                                {selected === item.label && (
                                    <Icon as={IconCheck} size="md" className="text-blue-500" />
                                )}

                            </HStack>
                        </TouchableOpacity>
                    ))}
                </VStack>
            </ActionsheetContent>
        </Actionsheet>
    );
};

export default WalletPickerSheet;
