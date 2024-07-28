import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {StatusBar} from 'expo-status-bar'

const Profile = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <StatusBar style="auto" />
      <Text className="text-3xl text-red-500 font-pbold">Profile</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})
