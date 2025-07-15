import HeaderComponent from "@/components/headerComponent"
import SafeAreaCustom from "@/components/safeArea"
import { View } from "@/components/ui/view"
import {
    IconCash,
    IconCoins,
    IconCreditCard,
    IconDeviceDesktop,
    IconMoneybag,
    IconPlant2,
    IconX
} from "@tabler/icons-react-native"
import { useRouter } from "expo-router"
import React, { useState } from "react"
import { ScrollView, TouchableOpacity } from "react-native"

interface IconItem {
    id: number
    component: React.ComponentType<any>
    color: string
    bgColor: string
    name: string
}

const IconPick: React.FC = () => {
    const router = useRouter()
    const [selectedIcon, setSelectedIcon] = useState<number | null>(1)

    const icons: IconItem[] = [
        { id: 1, component: IconCash, color: "#22c55e", bgColor: "#eefcf3", name: "cash" },
        { id: 2, component: IconCreditCard, color: "#3b82f6", bgColor: "#e0f0ff", name: "credit-card" },
        { id: 3, component: IconDeviceDesktop, color: "#6366f1", bgColor: "#e0e7ff", name: "desktop" },
        { id: 4, component: IconPlant2, color: "#22c55e", bgColor: "#e6fbe6", name: "plant" },
        { id: 5, component: IconMoneybag, color: "#f59e0b", bgColor: "#fff7db", name: "moneybag" },
        { id: 6, component: IconCoins, color: "#eab308", bgColor: "#fffbe6", name: "hand-coin" },
    ]

    const handleIconSelect = (icon: IconItem): void => {
        setSelectedIcon(icon.id)
        console.log("Selected icon:", icon.name)
    }

    const handleClose = (): void => {
        router.back()
    }

    return (
        <SafeAreaCustom>
            <View className="flex-1 ">

                <HeaderComponent iconLeft={IconX} title="Pilih Icon" handleLeft={handleClose} />

                <ScrollView className="flex-1 px-4 py-6">
                    <View className="flex-row flex-wrap justify-between">
                        {icons.map((icon) => {
                            const IconComponent = icon.component
                            const isSelected = selectedIcon === icon.id

                            return (
                                <TouchableOpacity
                                    key={icon.id}
                                    onPress={() => handleIconSelect(icon)}
                                    className={`w-20 h-20 mb-4 rounded-2xl items-center justify-center  shadow ${isSelected ? "border-2 border-blue-500" : ""
                                        }`}
                                >
                                    <View
                                        className="w-14 h-14 rounded-xl items-center justify-center"
                                        style={{ backgroundColor: icon.bgColor }}
                                    >
                                        <IconComponent size={32} color={icon.color} />
                                    </View>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </ScrollView>
            </View>
        </SafeAreaCustom>
    )
}

export default IconPick
