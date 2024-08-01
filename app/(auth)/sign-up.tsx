import {ScrollView, Text, View} from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import AppName from '@/components/atoms/Typography/AppName'
import Form from '@/components/molecules/Form'
import {LoginSchema} from '@/schemas/loginSchema'
import {Link, router} from 'expo-router'
import {SignupSchema} from '@/schemas/signupSchema'

type SignUpDataType = {
  email: string
  password: string
  confirmPassword: string
}

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
              fields={[
                {name: 'email', placeholder: 'Provide an Email Address'},
                {name: 'password', placeholder: 'Create a Password'},
                {name: 'confirmPassword', placeholder: 'Confirm Password'}
              ]}
              onSubmit={onSubmit}
              buttonText="Sign Up"
              defaultValues={{email: '', password: '', confirmPassword: ''}}
              showLabels={false}
              // schema={SignupSchema}
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
