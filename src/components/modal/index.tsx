'use client'
import * as Dialog from '@radix-ui/react-dialog'
import { DialogContent, DialogOverlay, DialogTitle } from './styles'
import { ModalProps } from './types'
import { Button } from '..'
import { MapPin, X } from '@phosphor-icons/react'
import Image from 'next/image'

export function Modal({ buttonTrigger }: ModalProps) {
  function handleMap() {
    window.location.href = 'https://maps.app.goo.gl/Yx9QzFmEH5mT57eE9'
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{buttonTrigger}</Dialog.Trigger>

      <Dialog.Portal>
        <DialogOverlay />

        <DialogContent>
          <header>
            <DialogTitle>Como chegar</DialogTitle>

            <Dialog.Close asChild>
              <button>
                <X />
              </button>
            </Dialog.Close>
          </header>

          <div>
            <Image
              src="/images/sede.png"
              alt="sede ad ferreira"
              width={572}
              height={370}
            />

            <p>Av. Prof. Francisco Morato, 5311, São Paulo - SP, 05521-300</p>
            <Button size="full" onClick={handleMap}>
              Como chegar
              <MapPin />
            </Button>
          </div>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
