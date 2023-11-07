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
        Lorem ipsum dolor sit amet consectetur. Mattis adipiscing leo nunc at
        quam eleifend. In maecenas eu enim at mattis magna dolor vitae cursus.
        Sit imperdiet ornare placerat mattis. Vulputate augue malesuada sed sed
        dolor sed auctor mauris. Porttitor natoque at ac tempor tristique amet
        cum mauris id. Elit lacinia et morbi libero amet vel nisl blandit. Risus
        massa amet elit sed sapien.
      </p>
    </Container>
  )
}
