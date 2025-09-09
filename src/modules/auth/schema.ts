import { z } from 'zod'

export const authRegisterSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(63, "Username must be less then 63 characters")
    .regex(
      /^[a-z0-9][a-z-0-9-]*[a-z0-9]$/,
      "Username can only contain lowercase letters, numbers and hyphens. It must start and end with letter or number"
    )
    .refine(
      (value) => !value.includes("--"),
      "Username cannot contain consecutive hyphens"
    )
    .transform((value) => value.toLowerCase()),
});

export type authRegisterSchemaType = z.infer<typeof authRegisterSchema>;

export const authLoginSchema = z.object({ 
  email: z.string().email(),
  password: z.string()
})

export type authLoginSchemaType = z.infer<typeof authLoginSchema>