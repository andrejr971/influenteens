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
      <head>
        <title>InfluenTeens - 2023</title>

        <meta
          name="description"
          content="E aí, galera! Estamos empolgados por fazer parte deste Influenteens. Vai ser uma experiência incrível! Estamos com grandes expectativas no que o Senhor vai fazer em nós e através de nós. Se você quer fortalecer sua conexão com Deus e comungar com seus irmãos, aqui é o lugar perfeito! Junte-se a nós e a muitos outros jovens nesse congresso."
        />
        <meta
          name="image"
          content="https://influenteens.vercel.app/images/banner.jpeg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="InfluenTeens - 2023" />
        <meta name="theme-color" content="#FAFAFA" />
        <meta name="google" content="notranslate" />
        <meta property="og:url" content="https://influenteens.vercel.app/" />
        <meta
          property="og:image"
          content="https://influenteens.vercel.app/images/banner.jpeg"
        />
        <meta
          property="og:image:secure_url"
          content="https://influenteens.vercel.app/images/banner.jpeg"
        />
        <meta property="og:image:alt" content="InfluenTeens" />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1080" />
        <meta property="og:image:height" content="1350" />

        <meta
          property="twitter:image"
          content="https://influenteens.vercel.app/images/banner.jpeg"
        />
        <meta property="twitter:image" content="1080" />
        <meta property="twitter:title" content="InfluenTeens" />
        <meta
          name="twitter:description"
          content="E aí, galera! Estamos empolgados por fazer parte deste Influenteens. Vai ser uma experiência incrível! Estamos com grandes expectativas no que o Senhor vai fazer em nós e através de nós. Se você quer fortalecer sua conexão com Deus e comungar com seus irmãos, aqui é o lugar perfeito! Junte-se a nós e a muitos outros jovens nesse congresso."
        />
      </head>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
