import {Link} from 'expo-router'
import {StatusBar} from 'expo-status-bar'
import {Text, View} from 'react-native'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <StatusBar style="auto" />
      <View className="flex-1/5 items-center justify-center">
        <Text className="text-3xl">
          Reel
          <Text className="text-blue-600">Mind</Text>
        </Text>
      </View>
      <View className="flex-3/5 items-center justify-center">
        <Link href="/home" className="font-bold text-4xl border-3 border-red-500">
          Go To Home
        </Link>
        {/* <Image source={require('../assets/images/cards.png')} className="h-[600px] w-[600px]" /> */}
      </View>
    </View>
  )
}
