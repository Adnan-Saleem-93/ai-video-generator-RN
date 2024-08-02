import {z} from 'zod'

export const SignupSchema = z
  .object({
    email: z
      .string()
      .min(1, 'Email is required!')
      .email({message: 'Please provide a valid email address!'}),
    password: z
      .string()
      .min(1, 'Password is required!')
      .min(8, 'Password should be at least 8 characters long!'),
    confirm_password: z.string()
  })
  .superRefine(({password, confirm_password}, ctx) => {
    if (confirm_password !== password || !confirm_password) {
      return ctx.addIssue({
        code: 'custom',
        message: 'Passwords do not match!',
        path: ['confirm_password']
      })
    }
  })
