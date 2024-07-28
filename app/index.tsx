import {Link} from 'expo-router'
import {StatusBar} from 'expo-status-bar'
import {Image, Text, View} from 'react-native'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <StatusBar style="auto" />
      <View className="flex-1/5 items-center justify-center">
        <Text className="font-pblack text-3xl">
          Reel
          <Text className="text-blue-600">Mind</Text>
        </Text>
      </View>
      <View className="flex-3/5 items-center justify-center">
        {/* <Image source={require('../assets/images/cards.png')} className="h-[600px] w-[600px]" /> */}
      </View>
    </View>
  )
}
