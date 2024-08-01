import {ZodObject} from 'zod'
import {FormField} from './types'

export interface FormInteface<T> {
  fields: FormField[]
  onSubmit: (data: T) => void
  buttonText: string
  showLabels?: boolean
  schema?: ZodObject<any, any, any>
  [x: string]: any
}
