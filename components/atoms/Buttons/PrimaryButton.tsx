import {Text, Pressable} from 'react-native'
import React, {ReactNode} from 'react'

type Props = {
  text: string | ReactNode
  onPress?: ((...args: any[]) => void) | null
  classes?: string
  Icon?: any
}

const PrimaryButton = ({text, onPress = null, classes = '', Icon = null}: Props) => {
  return (
    <Pressable
      android_ripple={{color: 'black-100'}}
      className={`bg-secondary-200 w-full ${classes} py-5 px-4 rounded-xl`}
      onPress={() => onPress && onPress()}
    >
      <Text className="text-black-100 font-bold text-center text-2xl">{text}</Text>
      {/* Add Icon Component Here */}
    </Pressable>
  )
}

export default PrimaryButton
