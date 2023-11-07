'use client'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'

import 'keen-slider/keen-slider.min.css'
import { Container, ContentSlider } from './styles'

const gallery = [
  {
    path: '/images/gallery/image-01.png',
    id: 1,
  },
  {
    path: '/images/gallery/image-02.png',
    id: 2,
  },
  {
    path: '/images/gallery/image-03.png',
    id: 3,
  },
  {
    path: '/images/gallery/image-04.png',
    id: 4,
  },
  {
    path: '/images/gallery/image-05.png',
    id: 5,
  },
  {
    path: '/images/gallery/image-06.png',
    id: 6,
  },
]

const animation = { duration: 5000, easing: (t: any) => t }

export function Gallery() {
  const [sliderRef] = useKeenSlider(
    {
      slides: {
        perView: 5.3,
        spacing: 24,
        origin: 'auto',
      },
      loop: true,
      drag: true,
      renderMode: 'performance',
      breakpoints: {
        '(max-width: 1366px)': {
          slides: { perView: 4.5, spacing: 24 },
        },
        '(max-width: 1280px)': {
          slides: { perView: 4, spacing: 24 },
        },
        '(max-width: 960px)': {
          slides: { perView: 3.1, spacing: 24 },
        },
        '(max-width: 640px)': {
          slides: { perView: 2.1, spacing: 12 },
        },
      },
    },
    [
      (slider: any) => {
        let timeout: any
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 1000)
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      },
    ]
  )

  return (
    <Container>
      <ContentSlider ref={sliderRef} className="keen-slider">
        {gallery.map((image) => (
          <Image
            key={image.id}
            src={image.path}
            alt="gallery"
            width={320}
            height={180}
            className="keen-slider__slide"
          />
        ))}
      </ContentSlider>
    </Container>
  )
}
