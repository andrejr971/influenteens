'use client'
import Image from 'next/image'
import {
  Container,
  Footer,
  FooterAdditional,
  Name,
  Social,
  Tag,
} from './styles'
import { CardProps } from './types'
import { FacebookLogo, InstagramLogo, TwitchLogo } from '@phosphor-icons/react'

export function Card({ data }: CardProps) {
  const hasSocialMedia =
    data.social.facebook || data.social.instagram || data.social.twitter

  return (
    <Container>
      <Image
        src={data.profile}
        alt={`preletor ${data.name}`}
        width={572}
        height={370}
      />

      <Footer>
        <Name>
          <span>{data.office}</span>
          <strong>{data.name}</strong>
        </Name>

        <FooterAdditional>
          {hasSocialMedia && (
            <Social>
              {data.social.instagram && (
                <a
                  href={`https://www.instagram.com/${data.social.instagram}`}
                  target="_blank"
                >
                  <InstagramLogo />
                </a>
              )}
              {data.social.facebook && (
                <a
                  href={`https://www.facebook.com/${data.social.facebook}`}
                  target="_blank"
                >
                  <FacebookLogo />
                </a>
              )}
              {data.social.twitter && (
                <a
                  href={`https://www.twitter.com/${data.social.twitter}`}
                  target="_blank"
                >
                  <TwitchLogo />
                </a>
              )}
            </Social>
          )}

          <Tag>
            {data.tag.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </Tag>
        </FooterAdditional>
      </Footer>
    </Container>
  )
}
