import {Text, Pressable} from 'react-native'
import React, {ReactNode} from 'react'

type Props = {
  text: string | ReactNode
  onPress?: ((...args: any[]) => void) | null
  btnClasses?: string
  textClasses?: string
  Icon?: any
  isDisabled?: boolean
}

const PrimaryButton = ({
  text,
  onPress = null,
  btnClasses = '',
  textClasses = '',
  Icon = null,
  isDisabled = false
}: Props) => {
  return (
    <Pressable
      // disabled={isDisabled}
      android_ripple={{color: 'black-100'}}
      className={`bg-secondary w-full ${btnClasses} py-4 px-4 rounded-xl`}
      onPress={() => onPress && onPress()}
    >
      <Text className={`text-black-100 font-extrabold text-center text-xl ${textClasses}`}>
        {text}
      </Text>
      {/* Add Icon Component Here */}
    </Pressable>
  )
}

export default PrimaryButton
