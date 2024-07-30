import PrimaryButton from '@/components/atoms/Buttons/PrimaryButton'
import {APP_NAME, images} from '@/constants'
import {StatusBar} from 'expo-status-bar'
import {Image, ScrollView, Text, View} from 'react-native'
import {router} from 'expo-router'
import {SafeAreaView} from 'react-native-safe-area-context'
import AppName from '@/components/atoms/Typography/AppName'

export default function App() {
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView
        contentContainerStyle={{
          height: '100%'
        }}
      >
        <View className="w-full justify-center items-center h-full px-6 gap-y-4">
          {/* Section 1 */}
          <View className="items-center justify-center">
            <AppName />
          </View>
          {/* Section 2 */}
          <View className="items-center justify-center w-full">
            <Image
              source={images.cards}
              className="h-96 w-auto"
              resizeMode="contain"
              resizeMethod="resize"
            />
          </View>
          {/* Section 3 */}
          <View className="items-center justify-center w-full gap-y-6">
            {/* Bold Highlight Text */}
            <View className="items-center justify-center w-full">
              <Text className="text-3xl font-bold text-center text-white">
                Discover Endless Possibilities with {/* <View className=""> */}
                <Text className="text-2xl text-center text-secondary-100">{APP_NAME}</Text>
              </Text>
              <Image
                source={images.path}
                className="w-[100px] h-[15px] absolute right-1 -bottom-1.5"
                resizeMode="cover"
              />
            </View>
            {/* Small Descriptive Text */}
            <View className="items-center justify-center w-full">
              <Text className="text-white text-center text-[16px] leading-6">
                Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with{' '}
                {APP_NAME}
              </Text>
            </View>
            {/* Button */}
            <View className="block items-center justify-center w-full">
              <PrimaryButton
                text={`Continue to ${APP_NAME}`}
                onPress={() => router.navigate('/log-in')}
                // Add Icon Prop
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
