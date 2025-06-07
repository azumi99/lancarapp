import { View } from '@/components/ui/view';
import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';
import { Platform, SafeAreaView } from 'react-native';
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
  return (
    <>
      {bacgroundHeader
        ? Platform.OS === 'ios' && (
          <View

            className={`
                  ${bacgroundHeader
                ? 'bg-blue-500'
                : colorMode === 'light'
                  ? 'bg-white'
                  : 'bg-black'
              }
                  p-4 rounded-lg h-${insets.top}
                `}

          />
        )
        : null}
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor:
            colorMode === 'light' ? (customBg ? colorBg : 'white') : 'black',
        }}>
        {children}
      </SafeAreaView>
    </>
  );
};

export default SafeAreaCustom;
