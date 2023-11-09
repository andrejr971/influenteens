'use client'
import Image from 'next/image'

import { Container } from './styles'
import { LogotypeInfluenteens } from '..'

export function About() {
  return (
    <Container>
      <div>
        <Image
          src="/images/background-about.png"
          alt="grupo influenteens"
          width={1216}
          height={420}
        />

        <LogotypeInfluenteens />
      </div>

      <p>
        E aí, galera! Estamos empolgados por fazer parte deste Influenteens. Vai
        ser uma experiência incrível! Estamos com grandes expectativas no que o
        Senhor vai fazer em nós e através de nós. Se você quer fortalecer sua
        conexão com Deus e comungar com seus irmãos, aqui é o lugar perfeito!
        Junte-se a nós e a muitos outros jovens nesse congresso. <br />
      </p>
    </Container>
  )
}
