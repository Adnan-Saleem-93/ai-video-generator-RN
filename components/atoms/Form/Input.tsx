import {TextInput} from 'react-native'
import React from 'react'
import {COLORS} from '@/constants'

const Input = (props) => {
  return (
    <TextInput
      className="w-full py-3 px-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-sky-500 text-white text-[17px]"
      {...props}
      placeholderTextColor={COLORS.GRAY[100]}
    />
  )
}

export default Input
