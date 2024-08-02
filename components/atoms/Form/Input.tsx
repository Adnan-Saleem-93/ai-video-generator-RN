import {Image, Pressable, TextInput, View} from 'react-native'
import React, {useMemo, useState} from 'react'
import {icons} from '@/constants'
import {TextFieldTypes} from '@/utils/types'

type Props = {
  value: string
  onChangeText: (text: string) => void
  icon?: any
  type?: TextFieldTypes
  [key: string]: any
}

const Input = (props: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const isPasswordField = useMemo(() => props.type === 'password', [props])
  return (
    <View
      className={`flex-row bg-gray-800/75 items-center w-full ${
        props.error ? 'border-2 border-red-500' : 'border border-gray-700/70'
      } rounded-lg py-3 px-2 focus:border-secondary`}
    >
      <TextInput
        className={`flex-1 text-white text-[17px] placeholder:tracking-widest ${props.classes}`}
        secureTextEntry={isPasswordField && !showPassword}
        placeholderTextColor="#9ca3af"
        {...props}
      />
      {props.icon ||
        (isPasswordField && (
          <Pressable onPress={() => (isPasswordField ? setShowPassword(!showPassword) : null)}>
            <Image
              source={isPasswordField ? (showPassword ? icons.eyeHide : icons.eye) : props.icon}
              className="w-6 h-6"
            />
          </Pressable>
        ))}
    </View>
  )
}

export default Input
