import {z} from 'zod'

export const LoginSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required!',
      invalid_type_error: 'Please provide a valid email address!'
    })
    .email(),
  password: z
    .string({
      required_error: 'Password is required!',
      invalid_type_error: 'Password should be at least 8 characters long!'
      // too_short_error: (val) =>
      //   : 'Password should be at least 8 characters long!'
    })
    .min(8)
})
