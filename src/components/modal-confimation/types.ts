import { ReactNode } from 'react'
import { z } from 'zod'

export const schemaValidation = z.object({
  name: z.string({
    required_error: 'Name is required',
  }),
  mail: z
    .string()
    .email({
      message: 'Only email',
    })
    .nullable(),
})

export type Validation = z.infer<typeof schemaValidation>

export interface ModalProps {
  buttonTrigger: ReactNode
}
