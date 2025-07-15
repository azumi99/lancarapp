import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Image, Text, View } from 'react-native';

export default function Splash() {
    const [isReady, setIsReady] = useState(false);
    const fadeAnim = useRef(new Animated.Value(1)).current;
    const router = useRouter();

    useEffect(() => {
        async function prepare() {
            try {
                await SplashScreen.preventAutoHideAsync();
                await new Promise(resolve => setTimeout(resolve, 2000));

                Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 800,
                    useNativeDriver: true,
                }).start(() => {
                    setIsReady(true);
                });
            } catch (e) {
                console.warn(e);
            }
        }

        prepare();
    }, []);

    useEffect(() => {
        if (isReady) {
            SplashScreen.hideAsync();
            setTimeout(() => {
                router.replace('/(FirstScreen)/book');
            }, 100);
        }
    }, [isReady]);

    return (
        <Animated.View
            style={{
                opacity: fadeAnim,
                flex: 1,
            }}
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={require('../assets/images/logo.png')}
                    style={{ width: 128, height: 128 }}
                    resizeMode="contain"
                />
            </View>
            <View style={{ paddingBottom: 40, alignItems: 'center' }}>
                <MaskedView
                    style={{ height: 40 }}
                    maskElement={
                        <Text style={{
                            fontSize: 28,
                            fontWeight: 'bold',
                            backgroundColor: 'transparent',
                            textAlign: 'center',
                        }}>
                            Lancar
                        </Text>
                    }
                >
                    <LinearGradient
                        colors={['#1E90FF', '#4169E1', '#0B46DC']}
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 0 }}
                        style={{ height: 40, justifyContent: 'center' }}
                    >
                        <Text style={{
                            fontSize: 28,
                            fontWeight: 'bold',
                            opacity: 0,
                            textAlign: 'center',
                        }}>
                            Lancar
                        </Text>
                    </LinearGradient>
                </MaskedView>
            </View>
        </Animated.View>
    );
}
