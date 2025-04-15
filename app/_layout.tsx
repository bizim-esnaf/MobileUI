import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();



export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/acre-medium.otf'),
});

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      console.log('Fonts loaded');
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <Stack  screenOptions={{ headerShown: false }}/>;
}
