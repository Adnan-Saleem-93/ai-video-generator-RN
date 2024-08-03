import React, {useEffect} from 'react'
import {useForm, Controller, FieldValues} from 'react-hook-form'
import {View, Text} from 'react-native'
import Input from '@/components/atoms/Form/Input'
import PrimaryButton from '@/components/atoms/Buttons/PrimaryButton'
import {zodResolver} from '@hookform/resolvers/zod'
import {FormInteface} from '@/utils/interfaces'

const Form = <T extends FieldValues>(props: FormInteface<T>) => {
  const {fields, onSubmit, buttonText, schema, disableSubmit = false, showLabels = true} = props
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm<T>({
    defaultValues: props.defaultValues,
    ...(schema && {resolver: zodResolver(schema)})
  })

  useEffect(() => {
    return () => {
      reset()
    }
  }, [])

  return (
    <View className="flex w-full gap-y-8">
      {fields.map(({label, name, placeholder, type}) => (
        <View className="flex flex-col gap-y-2" key={name}>
          {showLabels && label && <Text className="text-lg text-gray-500">{label}</Text>}
          {/* Use Controller to integrate custom Input component with react-hook-form */}
          <Controller
            control={control}
            render={({field: {onChange, value}}) => (
              <Input
                onChangeText={onChange}
                value={value}
                placeholder={placeholder}
                error={errors[name]?.message ? true : false}
                name={name}
                type={type || 'text'}
              />
            )}
            name={name}
          />
          {errors && errors[name]?.message ? (
            <Text className="text-orange-400 text-sm">{errors[name].message.toString()}</Text>
          ) : null}
        </View>
      ))}
      {/* Render submit button */}
      <View>
        <PrimaryButton
          text={buttonText}
          onPress={handleSubmit(onSubmit)}
          // isDisabled={disableSubmit}
        />
      </View>
    </View>
  )
}

export default Form
