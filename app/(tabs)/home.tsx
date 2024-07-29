import {View, Text} from 'react-native'
import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl text-red-500">Home</Text>
    </View>
  )
}

export default Home
