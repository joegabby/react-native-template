import React, { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { View,Text,SafeAreaView, StatusBar } from 'react-native';
import StackNav from './navigators/stackNavigator';
// import StackNav from './navigators/stackNavigation';
import OnboardingStack from './navigators/onboardNavigator';
SplashScreen.preventAutoHideAsync(); // Keep the splash screen visible while we fetch resources

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded] = useFonts({
    Niramit_Bold: require('./assets/fonts/Niramit-Bold.ttf'),
    Niramit_SemiBold: require('./assets/fonts/Niramit-SemiBold.ttf'),
    Niramit_Light: require('./assets/fonts/Niramit-Light.ttf'),
    Niramit_Medium: require('./assets/fonts/Niramit-Medium.ttf'),
    Niramit_Regular: require('./assets/fonts/Niramit-Regular.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      try {
        if (fontsLoaded) {
          await new Promise(resolve => setTimeout(resolve, 1000));
          await SplashScreen.hideAsync();
          setAppIsReady(true);
        }
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, [fontsLoaded]);

  if (!appIsReady) {
    return null;
  }

  return ( 
    <SafeAreaView className='flex-1'>
      <StatusBar barStyle="dark-content" translucent/>
      {/* <StackNav/> */}
      <OnboardingStack/>
    </SafeAreaView>
  );
}
