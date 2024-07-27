import {Link} from 'expo-router'
import {StatusBar} from 'expo-status-bar'
import {Text, View} from 'react-native'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <StatusBar style="auto" />
      <Link href="/profile" className="text-3xl text-blue-700">
        Go To Profile
      </Link>
    </View>
  )
}
