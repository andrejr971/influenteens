import { AppProvider } from '@/lib/providers'
import localFonts from 'next/font/local'

export const metadata = {
  title: 'InfluenTeens',
}

const fonts = localFonts({
  src: [
    {
      path: '../fonts/NetworkFreeVersion.ttf',
      style: 'Regular',
      weight: '300',
    },
    {
      path: '../fonts/MabryPro-Bold.ttf',
      style: 'Bold',
      weight: '600',
    },
    {
      path: '../fonts/MabryPro-Medium.ttf',
      style: 'Medium',
      weight: '500',
    },
    {
      path: '../fonts/MabryPro-Light.ttf',
      style: 'Light',
      weight: '300',
    },
    {
      path: '../fonts/MabryPro-Regular.ttf',
      style: 'Regular',
      weight: '400',
    },
  ],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={fonts.className}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
