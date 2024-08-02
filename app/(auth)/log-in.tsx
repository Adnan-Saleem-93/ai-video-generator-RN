import {ScrollView, Text, View} from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import AppName from '@/components/atoms/Typography/AppName'
import Form from '@/components/molecules/Form'
import {LoginSchema} from '@/schemas/loginSchema'
import {Link, router} from 'expo-router'

type LoginDataType = {
  email: string
  password: string
}

const LogIn = () => {
  const onSubmit = (data: LoginDataType) => {
    // Authenticate user and navigate to home page
    router.navigate('/home')
  }
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView
        contentContainerStyle={{
          height: '100%',
          width: '100%'
        }}
      >
        <View className="px-4 w-full h-full max-h-full">
          <View className="justify-center h-full w-full gap-y-4">
            <AppName />
            <Text className="text-white text-2xl uppercase mb-8">Log In</Text>
            <Form<LoginDataType>
              fields={[
                {name: 'email', placeholder: 'Email Address'},
                {name: 'password', placeholder: 'Password'}
              ]}
              onSubmit={onSubmit}
              buttonText="Log In"
              defaultValues={{email: '', password: ''}}
              showLabels={false}
              schema={LoginSchema}
            />
            <Text className="text-center text-white text-lg tracking-wider">
              Don’t have an account?
              <Link href="/sign-up" className="font-extrabold text-secondary">
                {' '}
                Sign Up
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default LogIn
