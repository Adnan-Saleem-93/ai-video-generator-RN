// import {useFonts} from 'expo-font'
import {COLORS} from '@/constants'
import {Stack} from 'expo-router'
import {StatusBar} from 'expo-status-bar'
// import {useEffect} from 'react'
// import {
//   useFonts,
//   Poppins_900Black,
//   Poppins_700Bold,
//   Poppins_800ExtraBold,
//   Poppins_200ExtraLight,
//   Poppins_300Light,
//   Poppins_500Medium,
//   Poppins_400Regular,
//   Poppins_600SemiBold,
//   Poppins_100Thin
// } from '@expo-google-fonts/poppins'

// SplashScreen.preventAutoHideAsync()

const RootLayout = () => {
  // const [fontsLoaded, error] = useFonts({
  //   Poppins_900Black,
  //   Poppins_700Bold,
  //   Poppins_800ExtraBold,
  //   Poppins_200ExtraLight,
  //   Poppins_300Light,
  //   Poppins_500Medium,
  //   Poppins_400Regular,
  //   Poppins_600SemiBold,
  //   Poppins_100Thin
  // })

  // useEffect(() => {
  //   if (error) {
  //     throw error
  //   }
  //   if (fontsLoaded) SplashScreen.hideAsync()
  // }, [fontsLoaded, error])

  // if (!fontsLoaded && !error) return null

  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{headerShown: false}} />
        <Stack.Screen name="(auth)" options={{headerShown: false}} />
        <Stack.Screen name="(tabs)" options={{headerShown: false}} />
      </Stack>
      <StatusBar backgroundColor={COLORS.PRIMARY} style="light" />
    </>
  )
}

export default RootLayout
