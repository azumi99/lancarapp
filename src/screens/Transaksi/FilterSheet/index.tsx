import { Actionsheet, ActionsheetBackdrop, ActionsheetContent } from "@/components/ui/actionsheet";
import { Button, ButtonText } from "@/components/ui/button";
import { Checkbox, CheckboxGroup, CheckboxIcon, CheckboxIndicator, CheckboxLabel } from "@/components/ui/checkbox";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { CheckIcon, CircleIcon, Icon } from "@/components/ui/icon";
import { Radio, RadioGroup, RadioIcon, RadioIndicator, RadioLabel } from "@/components/ui/radio";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { VStack } from "@/components/ui/vstack";
import {
    IconBook,
    IconBriefcase,
    IconCar,
    IconCoffee,
    IconDeviceGamepad2,
    IconGift,
    IconHeart,
    IconHome,
    IconHospital,
    IconMoneybag,
    IconMovie,
    IconMusic,
    IconPlane,
    IconSchool,
    IconShoppingBag,
    IconShoppingCart,
    IconTrain,
    IconTruck,
    IconX
} from "@tabler/icons-react-native";
import { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";

interface FilterSheetProps {
    showActionFilter: boolean;
    handleClose: () => void;
    titleActionsheet?: string;
    onFilterChange?: (count: number) => void;
}

const FilterSheet: React.FC<FilterSheetProps> = ({
    showActionFilter,
    handleClose,
    titleActionsheet = "Filters",
    onFilterChange
}) => {
    const [selectedPeriod, setSelectedPeriod] = useState("Total");
    const [selectedAccounts, setSelectedAccounts] = useState<string[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const periods = [
        { label: "Total", value: "Total" },
        { label: "Mingguan", value: "Mingguan" },
        { label: "Bulanan", value: "Bulanan" },
        { label: "Tahunan", value: "Tahunan" },
        { label: "Periode", value: "Periode" }
    ];

    const accounts = [
        { label: "Cash", value: "Cash" },
        { label: "Debit Card", value: "DebitCard" },
        { label: "Credit Card", value: "CreditCard" },
        { label: "E-Wallet", value: "EWallet" },
        { label: "Bank Account", value: "BankAccount" },
        { label: "PayPal", value: "PayPal" },
        { label: "Google Pay", value: "GooglePay" },
        { label: "Apple Pay", value: "ApplePay" },
        { label: "Samsung Pay", value: "SamsungPay" },
        { label: "Cryptocurrency", value: "Crypto" },
        { label: "Gift Card", value: "GiftCard" },
        { label: "Prepaid Card", value: "PrepaidCard" },
        { label: "Travel Card", value: "TravelCard" },
        { label: "Savings Account", value: "SavingsAccount" },
        { label: "Checking Account", value: "CheckingAccount" },
        { label: "Mobile Banking", value: "MobileBanking" },
        { label: "Loan Account", value: "LoanAccount" },
        { label: "Investment Account", value: "InvestmentAccount" },
        { label: "Other", value: "Other" }
    ];

    const categories = [
        { label: "Belanja", value: "Belanja", icon: IconShoppingBag },
        { label: "Minuman", value: "Minuman", icon: IconCoffee },
        { label: "Belanja 2", value: "Belanja2", icon: IconShoppingCart },
        { label: "Transportasi", value: "Transportasi", icon: IconTruck },
        { label: "Rumah Tangga", value: "RumahTangga", icon: IconHome },
        { label: "Kesehatan", value: "Kesehatan", icon: IconHeart },
        { label: "Mobil", value: "Mobil", icon: IconCar },
        { label: "Kereta", value: "Kereta", icon: IconTrain },
        { label: "Pesawat", value: "Pesawat", icon: IconPlane },
        { label: "Hiburan", value: "Hiburan", icon: IconDeviceGamepad2 },
        { label: "Pendidikan", value: "Pendidikan", icon: IconBook },
        { label: "Rumah Sakit", value: "RumahSakit", icon: IconHospital },
        { label: "Film", value: "Film", icon: IconMovie },
        { label: "Pekerjaan", value: "Pekerjaan", icon: IconBriefcase },
        { label: "Hadiah", value: "Hadiah", icon: IconGift },
        { label: "Sekolah", value: "Sekolah", icon: IconSchool },
        { label: "Keuangan", value: "Keuangan", icon: IconMoneybag },
        { label: "Musik", value: "Musik", icon: IconMusic }
    ];

    const getActiveFiltersCount = () => {
        let count = 0;
        if (selectedPeriod !== "Total") {
            count += 1;
        }
        count += selectedAccounts.length;
        count += selectedCategories.length;
        return count;
    };

    const handleCategoryToggle = (category: string) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    const handleClearAll = () => {
        setSelectedPeriod("Total");
        setSelectedAccounts([]);
        setSelectedCategories([]);
    };

    const handleApplyFilter = () => {
        const count = getActiveFiltersCount();
        console.log({
            period: selectedPeriod,
            accounts: selectedAccounts,
            categories: selectedCategories,
            totalFilters: count
        });
        onFilterChange?.(count);
        handleClose();
    };

    const activeFiltersCount = getActiveFiltersCount();

    return (
        <Actionsheet isOpen={showActionFilter} onClose={handleClose}>
            <ActionsheetBackdrop />
            <ActionsheetContent className="max-h-[90vh]">
                <HStack className="w-full items-center justify-between py-3">
                    <View className="w-5" />
                    <Heading className="text-center flex-1">{titleActionsheet}</Heading>
                    <TouchableOpacity onPress={handleClose} className="relative">
                        <Icon as={IconX} size="xl" />
                        {activeFiltersCount > 0 && (
                            <View className="absolute -top-1 -right-1 bg-red-500 rounded-full w-5 h-5 items-center justify-center">
                                <Text className="text-white text-xs font-semibold">
                                    {activeFiltersCount}
                                </Text>
                            </View>
                        )}
                    </TouchableOpacity>
                </HStack>

                <Divider className="my-0.5 w-[100vh]" />

                <ScrollView
                    className="w-full"
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 20 }}
                >
                    <VStack space="2xl" className="w-full py-5">
                        <VStack space="lg">
                            <Text size="md" className="font-bold">
                                Periode
                            </Text>
                            <RadioGroup value={selectedPeriod} onChange={setSelectedPeriod}>
                                <VStack space="md">
                                    {periods.map((period) => (
                                        <Radio
                                            key={period.value}
                                            value={period.value}
                                            className="justify-between w-full"
                                            size="md"
                                        >
                                            <RadioLabel>
                                                {period.label}
                                            </RadioLabel>
                                            <RadioIndicator>
                                                <RadioIcon as={CircleIcon} />
                                            </RadioIndicator>
                                        </Radio>
                                    ))}
                                </VStack>
                            </RadioGroup>
                        </VStack>

                        <Divider className="my-0.5 w-[100vh]" />

                        <VStack space="lg">
                            <Text size="md" className="font-bold">
                                Akun
                            </Text>
                            <CheckboxGroup
                                value={selectedAccounts}
                                onChange={setSelectedAccounts}
                            >
                                <VStack space="md">
                                    {accounts.map((account) => (
                                        <Checkbox
                                            key={account.value}
                                            value={account.value}
                                            size="md"
                                            className="justify-between w-full"
                                        >
                                            <CheckboxLabel>
                                                {account.label}
                                            </CheckboxLabel>
                                            <CheckboxIndicator>
                                                <CheckboxIcon as={CheckIcon} />
                                            </CheckboxIndicator>
                                        </Checkbox>
                                    ))}
                                </VStack>
                            </CheckboxGroup>
                        </VStack>

                        <Divider className="my-0.5 w-[100vh]" />

                        <VStack space="lg">
                            <Text size="md" className="font-semibold text-gray-900">
                                Kategori Transaksi
                            </Text>
                            <View className="flex-row flex-wrap gap-4">
                                {categories.map((category) => {
                                    const CategoryIcon = category.icon;
                                    const isSelected = selectedCategories.includes(category.value);

                                    return (
                                        <TouchableOpacity
                                            key={category.value}
                                            onPress={() => handleCategoryToggle(category.value)}
                                            className="items-center w-[22%] "
                                            activeOpacity={0.7}
                                        >
                                            <View
                                                className={`w-full h-20 aspect-square rounded-xl items-center justify-center ${isSelected ? "bg-blue-100" : "bg-gray-100"
                                                    }`}
                                            >
                                                <CategoryIcon
                                                    size={25}
                                                    color={isSelected ? "#2563eb" : "#6b7280"}
                                                    strokeWidth={1.5}
                                                />
                                                <Text
                                                    size="xs"
                                                    className={`mt-1 text-center w-full ${isSelected
                                                        ? "text-blue-600 font-medium"
                                                        : "text-gray-600"
                                                        }`}
                                                    numberOfLines={2}
                                                >
                                                    {category.label}
                                                </Text>
                                            </View>

                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                        </VStack>
                    </VStack>
                </ScrollView>

                <View className="w-full pb-4 items-center">
                    <Divider className="my-0.5 w-[100vh]" />
                    <HStack space="md" className="w-full pt-4">
                        <Button
                            variant="outline"
                            size="lg"
                            className="flex-1 rounded-xl border-gray-300"
                            onPress={handleClearAll}
                        >
                            <ButtonText className="text-gray-700">Clear all</ButtonText>
                        </Button>
                        <Button
                            size="lg"
                            className="flex-1 bg-blue-600 rounded-xl"
                            onPress={handleApplyFilter}
                        >
                            <ButtonText>Apply Filter</ButtonText>
                        </Button>
                    </HStack>
                </View>
            </ActionsheetContent>
        </Actionsheet>
    );
};

export default FilterSheet;