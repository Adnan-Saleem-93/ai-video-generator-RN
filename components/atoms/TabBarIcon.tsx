import {View, Text, Image} from 'react-native'
import React from 'react'

type Props = {name: string; color: string; focused: boolean; icon: any}

const TabBarIcon = ({name, color, focused, icon}: Props) => {
  return (
    <View className="flex items-center justify-center gap-1.5">
      <Image source={icon} resizeMode="contain" tintColor={color} className="h-6 w-6" />
      <Text
        className={`${focused ? 'text-blue-500 font-bold' : 'text-gray-400 font-semibold'} text-xs`}
        style={{color: color}}
      >
        {name}
      </Text>
    </View>
  )
}

export default TabBarIcon
