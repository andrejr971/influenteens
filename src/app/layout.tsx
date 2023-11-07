import { AppProvider } from '@/lib/providers'

export const metadata = {
  title: 'InfluenTeens',
}

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
