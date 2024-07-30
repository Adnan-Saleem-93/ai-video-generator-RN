import {View, Text} from 'react-native'
import React from 'react'
import {StatusBar} from 'expo-status-bar'
import {Stack} from 'expo-router'
import {COLORS} from '@/constants'

type Props = {}

const AuthLayout = (props: Props) => {
  return (
    <>
      <Stack>
        <Stack.Screen name="log-in" options={{headerShown: false}} />
        <Stack.Screen name="sign-up" options={{headerShown: false}} />
      </Stack>
      <StatusBar style="light" backgroundColor={COLORS.PRIMARY} />
    </>
  )
}

export default AuthLayout
