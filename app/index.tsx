import PrimaryButton from '@/components/atoms/Buttons/PrimaryButton'
import {APP_NAME, images} from '@/constants'
import {StatusBar} from 'expo-status-bar'
import {Image, ScrollView, Text, View} from 'react-native'
import {router} from 'expo-router'
import {SafeAreaView} from 'react-native-safe-area-context'

export default function App() {
  return (
    <SafeAreaView className="h-full bg-primary w-full">
      <StatusBar hidden />
      <ScrollView
        className="gap-y-4"
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          flex: 1,
          height: '100%',
          width: '100%',
          padding: 16
        }}
      >
        {/* Section 1 */}
        <View className="flex-1/7 items-center justify-center">
          <Text className="text-3xl font-bold text-white">
            Reel
            <Text className="text-blue-400">Mind</Text>
          </Text>
        </View>
        {/* Section 2 */}
        <View className="flex-3/7 items-center justify-center w-full">
          <Image
            source={images.cards}
            className="h-96 w-auto"
            resizeMode="contain"
            resizeMethod="resize"
          />
        </View>
        {/* Section 3 */}
        <View className="flex-3/7 items-center justify-center w-full gap-y-6">
          <View className="flex-1/7 items-center justify-center w-full">
            <Text className="text-3xl font-bold text-center text-white">
              Discover Endless Possibilities with {/* <View className=""> */}
              <Text className="text-2xl text-center text-secondary-100">{APP_NAME}</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[150px] h-[15px] absolute -right-8 -bottom-1.5"
              resizeMode="contain"
            />
          </View>
          {/* Section 4 */}
          <View className="flex-1/7 items-center justify-center w-full">
            <Text className="text-white text-center text-[16px] leading-6">
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
      </ScrollView>
    </SafeAreaView>
  )
}
