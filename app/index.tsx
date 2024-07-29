import PrimaryButton from '@/components/atoms/Buttons/PrimaryButton'
import {APP_NAME, images} from '@/constants'
import {Link} from 'expo-router'
import {StatusBar} from 'expo-status-bar'
import {Image, Text, View} from 'react-native'
import {router} from 'expo-router'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-primary gap-4 p-4">
      <StatusBar style="auto" />
      {/* Section 1 */}
      <View className="flex-1/7 items-center justify-center">
        <Text className="text-3xl font-bold text-white">
          Reel
          <Text className="text-blue-400">Mind</Text>
        </Text>
      </View>
      {/* Section 2 */}
      <View className="flex-3/7 items-center justify-center">
        <Image
          source={images.cards}
          className="h-96 w-auto"
          resizeMode="contain"
          resizeMethod="resize"
        />
      </View>
      {/* Section 3 */}
      <View className="flex-1/7 items-center justify-center">
        <Text className="text-2xl text-center text-white">
          Discover Endless Possibilities with {/* <View className=""> */}
          <Text className="text-2xl text-center text-secondary-100">{APP_NAME}</Text>
        </Text>
      </View>
      {/* Section 4 */}
      <View className="flex-1/7 items-center justify-center">
        <Text className="text-white text-center text-[17px] leading-6">
          Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with{' '}
          {APP_NAME}
        </Text>
      </View>
      {/* Section 5 */}
      <View className="flex-1/7 block items-center justify-center w-full">
        <PrimaryButton
          text={`Continue to ${APP_NAME}`}
          onPress={() => router.navigate('/log-in')}
          // Add Icon Prop
        />
      </View>
    </View>
  )
}
