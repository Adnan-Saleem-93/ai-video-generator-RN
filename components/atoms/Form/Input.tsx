import {TextInput} from 'react-native'
import React from 'react'

const Input = (props: {[key: string]: any}) => {
  return (
    <TextInput
      className={`w-full py-3 px-2 ${
        props.error ? 'border-2 border-red-500' : 'border border-gray-500'
      } rounded-lg focus:border-2 focus:border-secondary text-white text-[17px] text-gray-400/ placeholder:tracking-widest`}
      {...props}
      placeholderTextColor="#9ca3afcc"
    />
  )
}

export default Input
