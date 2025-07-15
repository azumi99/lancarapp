import { View } from '@/components/ui/view';
import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface SafeAreaCustomProps {
  children: React.ReactNode;
  bacgroundHeader?: boolean;
  bgColor?: string;
  customBg?: boolean;
  colorBg?: string;
}

const SafeAreaCustom: React.FC<SafeAreaCustomProps> = ({
  children,
  bacgroundHeader,
  bgColor,
  customBg,
  colorBg,
}) => {
  const colorMode = useColorScheme();
  const insets = useSafeAreaInsets();

  const statusBarBg =
    customBg && colorBg
      ? colorBg
      : colorMode === 'light'
        ? 'white'
        : 'black';

  return (
    <>
      {/* Status bar background (for Android or manual control) */}
      <View
        style={{
          height: insets.top,
          backgroundColor: bacgroundHeader ? 'rgb(59 130 246)' : statusBarBg, // blue-500 or theme-based
        }}
      />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: bacgroundHeader ? 'rgb(59 130 246)' : statusBarBg,
        }}>
        {children}
      </SafeAreaView>
    </>
  );
};

export default SafeAreaCustom;
