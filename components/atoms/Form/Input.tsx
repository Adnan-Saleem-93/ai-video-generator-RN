import {Image, TextInput, View} from 'react-native'
import React from 'react'

type Props = {
  value: string
  onChangeText: (text: string) => void
  icon?: any
  [key: string]: any
}

const Input = (props: Props) => {
  return (
    <View className="relative">
      <TextInput
        className={`w-full py-3 px-2 bg-gray-800 ${
          props.error ? 'border-2 border-red-500' : 'border border-gray-700'
        } rounded-lg focus:border-2 focus:border-secondary text-white text-[17px] placeholder:tracking-widest ${
          props.classes
        }`}
        placeholderTextColor="#9ca3af"
        {...props}
      />
      {props.icon && <Image source={props.icon} className="w-4 h-4 absolute right-4 bottom-4" />}
    </View>
  )
}

export default Input
