import { AppProvider } from '@/lib/providers'
import localFonts from 'next/font/local'

export const metadata = {
  title: 'InfluenTeens',
}

// const fonts = localFonts({
//   src: [
//     {
//       path: '../fonts/NetworkFreeVersion.woff2',
//     },
//     {
//       path: '../fonts/MabryPro-Bold.woff2',
//     },
//     {
//       path: '../fonts/MabryPro-Medium.woff2',
//     },
//     {
//       path: '../fonts/MabryPro-Light.woff2',
//     },
//     {
//       path: '../fonts/MabryPro-Regular.woff2',
//     },
//   ],
// })

// const fonts = localFonts({
//   src: '../fonts/NetworkFreeVersion.woff2',
// })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
