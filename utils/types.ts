export type FormField = {
  label?: string
  name: string
  placeholder: string
  type?: TextFieldTypes
}

export type TextFieldTypes = 'text' | 'email' | 'password' | 'number'
