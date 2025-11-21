import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { useColorScheme } from '@/hooks/useColorScheme';
import { TouchableOpacity } from "react-native";

interface IconItem {
    handleLeft?: () => void;
    handleRight?: () => void;
    title?: string;
    iconLeft?: React.ComponentType<any>;
    iconRight?: React.ComponentType<any>;
    boorderless?: boolean;
    roundedIconLeft?: boolean;
    roundedIconRight?: boolean;
    styleLeft?: string;
    styleRight?: string;
    iconRightActive?: boolean;
    customRightElement?: React.ReactNode;
}
const HeaderComponent: React.FC<IconItem> = ({ handleLeft, handleRight, title, iconLeft, iconRight, boorderless, roundedIconLeft, roundedIconRight, styleLeft, styleRight, iconRightActive, customRightElement }) => {
    const colorScheme = useColorScheme();
    return (
        <View className={`flex-row items-center justify-between px-4 py-3 ${boorderless ? '' : 'border-b border-gray-200'}`}>
            {iconLeft ? <TouchableOpacity onPress={handleLeft} className={styleLeft ? styleLeft : `${roundedIconLeft ? `p-2 rounded-full padding-5  ${colorScheme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}` : 'pr-5'} `}>
                <Icon as={iconLeft} size={"xl"} />
            </TouchableOpacity> : <View className="w-8" />}

            <Text className="text-lg font-semibold text-center flex-1">{title}</Text>
            {iconRight ? <TouchableOpacity onPress={handleRight} className={styleRight ? styleRight : `${roundedIconRight ? `p-2 rounded-full padding-5  ${colorScheme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}` : 'pl-5'} `}>
                {iconRightActive ? customRightElement : <Icon as={iconRight} size={"xl"} />}
            </TouchableOpacity> : <View className="w-8" />}
        </View>
    )
}

export default HeaderComponent;