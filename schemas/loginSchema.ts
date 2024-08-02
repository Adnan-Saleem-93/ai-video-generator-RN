import {z} from 'zod'

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required!')
    .email({message: 'Please provide a valid email address!'}),
  password: z
    .string()
    .min(1, 'Password is required!')
    .min(8, 'Password should be at least 8 characters long!')
})
