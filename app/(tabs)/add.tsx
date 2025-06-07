import { useTabBar } from '@/app/(tabs)/TabBarContext.tsx';
import { Button, SafeAreaView } from "react-native";
const AddScreen = () => {
    const { hideTabBar, showTabBar } = useTabBar();
    return (
        <SafeAreaView className="flex-1 items-center justify-center">
            <Button title="Hide Tab Bar" onPress={hideTabBar} />
            <Button title="Show Tab Bar" onPress={showTabBar} />
        </SafeAreaView>
    )
}

export default AddScreen;