import { Tabs } from 'expo-router';
import React, { useRef } from 'react';
import { Animated, Pressable, View } from 'react-native';

import { Box } from '@/components/ui/box';
import { useColorScheme } from '@/hooks/useColorScheme';
import { TabBarContext } from '@/src/store/TabBarContext';
import { IconChartHistogram, IconFileAnalytics, IconPlus, IconSettings2, IconSmartHome } from '@tabler/icons-react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const tabBarTranslateY = useRef(new Animated.Value(0)).current;

  const showTabBar = () => {
    Animated.timing(tabBarTranslateY, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  const hideTabBar = () => {
    Animated.timing(tabBarTranslateY, {
      toValue: 100, // geser turun
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TabBarContext.Provider value={{ showTabBar, hideTabBar }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#2b7fff',
          headerShown: false,
          tabBarBackground: () => (
            <View style={{
              flex: 1,
              backgroundColor: isDark ? '#1c1c1e' : '#ffffff',
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: -4 },
              shadowOpacity: 2,
              shadowRadius: 10,
              elevation: 10,
            }} />
          ),
          tabBarStyle: {
            position: 'absolute',
            height: 80,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            backgroundColor: isDark ? '#1c1c1e' : '#ffffff',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -4 },
            shadowOpacity: isDark ? 0.4 : 0.1,
            shadowRadius: 10,
            elevation: 10,
            transform: [{ translateY: tabBarTranslateY }],
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '500',
            marginTop: 4,
          },
          tabBarButton: ({ children, onPress, accessibilityState, style }) => (
            <Pressable
              className="flex-1 items-center justify-center py-2"
              style={style}
              onTouchStart={onPress}
            >
              <View className="items-center justify-center">
                {children}
              </View>
            </Pressable>
          ),
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Beranda',
            tabBarIcon: ({ color, focused }) => <IconSmartHome size={24} color={color} strokeWidth={focused ? 2 : 1.5} />,
          }}
        />
        <Tabs.Screen
          name="grafik"
          options={{
            title: 'Grafik',
            tabBarIcon: ({ color, focused }) => <IconChartHistogram size={24} color={color} strokeWidth={focused ? 2 : 1.5} />,
          }}
        />
        <Tabs.Screen
          name="add"
          options={{
            title: 'Tambah',
            tabBarIcon: ({ color, focused }) => {
              const colorScheme = useColorScheme();
              const isDark = colorScheme === 'dark';

              return (
                <Box
                  className={`items-center justify-center w-14 h-14 absolute -top-6 ${isDark ? 'bg-gray-700' : 'bg-gray-300'
                    } rounded-[20px] shadow-xl`}
                >
                  <Box
                    className={`items-center justify-center w-14 h-14 absolute -top-1 ${isDark ? 'bg-blue-500' : 'bg-blue-500'
                      } rounded-[20px] border-4 ${isDark ? 'border-gray-900' : 'border-white'
                      } shadow-xl ${isDark ? 'shadow-black/40' : 'shadow-gray-300'
                      }`}
                  >
                    <IconPlus
                      size={24}
                      color={'white'}
                      strokeWidth={focused ? 2.5 : 2}
                    />
                  </Box>
                </Box>
              );
            },
          }}
        />
        <Tabs.Screen
          name="laporan"
          options={{
            title: 'Laporan',
            tabBarIcon: ({ color, focused }) => <IconFileAnalytics size={24} color={color} strokeWidth={focused ? 2 : 1.5} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color, focused }) => <IconSettings2 size={24} color={color} strokeWidth={focused ? 2 : 1.5} />,
          }}
        />
      </Tabs>
    </TabBarContext.Provider>
  );
}