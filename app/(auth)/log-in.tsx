import {ScrollView, Text, View} from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import AppName from '@/components/atoms/Typography/AppName'
import Form from '@/components/molecules/Form'
import {LoginSchema} from '@/schemas/loginSchema'

type LoginDataType = {
  email: string
  password: string
}

const LogIn = () => {
  const onSubmit = (data: LoginDataType) => {
    console.log(data)
  }
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView
        contentContainerStyle={{
          height: '100%',
          width: '100%'
        }}
      >
        <View className="px-4 w-full h-full">
          <View className="justify-center h-full w-full gap-y-8">
            <AppName />
            <Text className="text-white text-2xl uppercase mb-8">Log In</Text>
            <Form<LoginDataType>
              fields={[
                {name: 'email', label: 'Email', placeholder: 'Email Address'},
                {name: 'password', label: 'Password', placeholder: 'Password'}
              ]}
              onSubmit={onSubmit}
              buttonText="Log In"
              defaultValues={{email: '', password: ''}}
              showLabels={false}
              schema={LoginSchema}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default LogIn
