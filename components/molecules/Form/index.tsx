import React from 'react'
import {useForm, Controller, FieldValues} from 'react-hook-form'
import {View, Text} from 'react-native'
import Input from '@/components/atoms/Form/Input'
import PrimaryButton from '@/components/atoms/Buttons/PrimaryButton'
import {zodResolver} from '@hookform/resolvers/zod'
import {FormInteface} from '@/utils/interfaces'

const Form = <T extends FieldValues>(props: FormInteface<T>) => {
  const {fields, onSubmit, buttonText, schema, showLabels = true} = props
  const {
    control,
    handleSubmit,
    formState: {errors}
  } = useForm<T>({
    defaultValues: props.defaultValues,
    resolver: zodResolver(schema)
  })

  console.log('errors', errors)

  return (
    <View className="flex w-full gap-y-8">
      {fields.map(({label, name, placeholder}) => (
        <View className="flex flex-col gap-y-2" key={name}>
          {showLabels && <Text className="text-lg text-gray-500">{label}</Text>}
          {/* Use Controller to integrate custom Input component with react-hook-form */}
          <Controller
            control={control}
            render={({field: {onChange, value}}) => (
              <Input onChangeText={onChange} value={value} placeholder={placeholder} />
            )}
            name={name}
          />
          {errors[name]?.message && (
            <Text className="text-red-300 text-sm">{errors[name]?.message || 'Required'}</Text>
          )}
        </View>
      ))}
      {/* Render submit button */}
      <View>
        <PrimaryButton text={buttonText} onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  )
}

export default Form
