import {ScrollView, Text, View} from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import AppName from '@/components/atoms/Typography/AppName'
import Form from '@/components/molecules/Form'
import {Link, router} from 'expo-router'
import {SignupSchema} from '@/schemas/signupSchema'
import {FormField} from '@/utils/types'

type SignUpDataType = {
  email: string
  password: string
  confirm_password: string
}

const fields: FormField[] = [
  {name: 'email', placeholder: 'Provide an Email Address', type: 'email'},
  {name: 'password', placeholder: 'Create a Password', type: 'password'},
  {name: 'confirm_password', placeholder: 'Confirm Password', type: 'password'}
]

const SignUp = () => {
  const onSubmit = (data: SignUpDataType) => {
    // Register user and navigate to home page
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
            <Text className="text-white text-2xl uppercase mb-8">Sign Up</Text>
            <Form<SignUpDataType>
              fields={fields}
              onSubmit={onSubmit}
              buttonText="Sign Up"
              defaultValues={{email: '', password: '', confirm_password: ''}}
              showLabels={false}
              schema={SignupSchema}
            />
            <Text className="text-center text-white text-lg tracking-wider">
              Already have an account?
              <Link href="/log-in" className="font-extrabold text-secondary">
                {' '}
                Login
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp
