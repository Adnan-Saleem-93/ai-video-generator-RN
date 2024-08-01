import {View, Text, ScrollView, Image} from 'react-native'
import React, {useState} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import Input from '@/components/atoms/Form/Input'
import {icons, images} from '@/constants'

type Props = {}

const Home = (props: Props) => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const changeSearchQuery = (newValue: string) => {
    setSearchQuery(newValue)
  }
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView contentContainerStyle={{height: '100%', width: '100%'}} style={{flex: 1}}>
        <View className="h-full w-full">
          <View className="p-5 flex gap-y-4">
            <Text className="text-xl text-gray-100">
              Welcome!
              <Text className="font-bold text-sky-500"> Adnan</Text>
            </Text>

            <Input
              onChangeText={changeSearchQuery}
              value={searchQuery}
              placeholder="Search for a video topic"
              classes="border-0 bg-gray-700/80 placeholder:text-white"
              icon={icons.search}
            />
          </View>

          <View className="p-0 w-full items-start justify-center">
            <Text className="text-sm text-gray-400 px-5">Trending Videos</Text>

            {/* // TODO: REPLACE this image with carousel of videos */}
            <Image source={images.cards} className="h-[400px] w-full" resizeMode="contain" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
