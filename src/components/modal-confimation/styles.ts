'use client'
import styled, { css, keyframes } from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import { media } from '..'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translateX(50%)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const contentShowMobile = keyframes({
  '0%': { opacity: 0, transform: 'translateY(50%)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

export const DialogContent = styled(Dialog.Content)`
  ${({ theme }) => css`
    background: ${theme.colors.white.default};

    border-radius: 6;
    box-shadow:
      hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
      hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    position: fixed;
    inset: 2.4rem 2.4rem 2.4rem auto;
    width: 45.6rem;
    padding: 2.4rem;
    border-radius: 2.4rem;
    animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);

    z-index: 999999;

    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    ${media.lessThan.medium`
      width: 100% !important;
      inset: auto 0.8rem 0.8rem 0.8rem;
      max-height: 90vh;
    `}

    @media screen and (max-width: 768px) {
      animation: ${contentShowMobile} 150ms cubic-bezier(0.16, 1, 0.3, 1);
    }

    &:focus {
      outline: none;
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${theme.colors.orange.default};
        background: ${theme.colors.orange.default}10;
        padding: 4px 8px;
        border-radius: 0.4rem;
        width: 4rem;
        height: 4rem;
        border: 0;

        font-size: 2.4rem;

        transition: all 0.2s ease-in;

        &:hover {
          background: ${theme.colors.orange.default};
          color: ${theme.colors.white.default};
        }
      }
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
    }
  `}
`

export const DialogOverlay = styled(Dialog.Overlay)`
  ${({ theme }) => css`
    position: fixed;
    inset: 0;
    animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
    background: ${theme.colors.black.default}80;
    z-index: 99999;
  `}
`

export const DialogTitle = styled(Dialog.Title)`
  margin: 0;
`
