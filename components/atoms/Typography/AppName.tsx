import {View, Text} from 'react-native'
import React from 'react'

type Props = {}

const AppName = (props: Props) => {
  return (
    <Text className="text-3xl font-extrabold text-white">
      Reel
      <Text className="text-blue-400 italic tracking-widest underline">Forge</Text>
    </Text>
  )
}

export default AppName
