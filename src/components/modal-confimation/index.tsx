'use client'
import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { DialogContent, DialogOverlay, DialogTitle } from './styles'
import { ModalProps, Validation, schemaValidation } from './types'
import { Button, Input } from '..'
import { Check, Envelope, User, X } from '@phosphor-icons/react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '@/services'
import { useRouter } from 'next/navigation'

export function ModalConfirmation({ buttonTrigger }: ModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<Validation>({
    resolver: zodResolver(schemaValidation),
    mode: 'all',
  })

  const navigation = useRouter()

  async function handleSubmitForm({ mail, name }: Validation) {
    setIsLoading(true)
    try {
      const data = new FormData()
      data.append('name', name)
      if (mail) data.append('mail', mail)

      await api.post('/api/confirmation', data)

      navigation.push('success')
    } catch (error) {
      console.log(error)
    } finally {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setIsLoading(false)
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{buttonTrigger}</Dialog.Trigger>

      <Dialog.Portal>
        <DialogOverlay />

        <DialogContent>
          <header>
            <DialogTitle>Confirmar presença</DialogTitle>

            <Dialog.Close asChild>
              <button>
                <X />
              </button>
            </Dialog.Close>
          </header>

          <form onSubmit={handleSubmit(handleSubmitForm)}>
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <Input
                  label="Nome"
                  icon={User}
                  isRequired
                  placeholder="Digite o seu nome"
                  {...field}
                  errorText={errors.name?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="mail"
              render={({ field }) => (
                <Input
                  label="E-mail"
                  icon={Envelope}
                  placeholder="Digite o seu e-mail"
                  {...field}
                  value={field.value || ''}
                  errorText={errors.mail?.message}
                />
              )}
            />

            <Button size="full" type="submit" disabled={isLoading}>
              {isLoading ? (
                <>salvando...</>
              ) : (
                <>
                  Confirmar
                  <Check />
                </>
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
