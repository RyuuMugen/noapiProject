'use client'
import { Carousel } from '@mantine/carousel'
import '@mantine/carousel/styles.css'
import { Grid, Flex } from '@mantine/core'
import Image from 'next/image'
import banner_01 from '@/assets/banner-01 3.png'
import thankU_1 from '@/assets/thankU_1.png'
import thankU_2 from '@/assets/thankU_2.png'
import thankU_3 from '@/assets/thankU_3.png'
import thankU_4 from '@/assets/thankU_4.png'
import style from './FooterCustomer.module.scss'

const FooterCustomer = () => {
  const images = [
    thankU_1,
    thankU_2,
    thankU_3,
    thankU_4,
    thankU_1,
    thankU_2,
    thankU_3,
    thankU_4,
  ]
  const slides = images.map((slide, index) => {
    return (
      <Carousel.Slide key={index}>
        <Image alt="" src={slide} />
      </Carousel.Slide>
    )
  })
  return (
    <div className={style.main}>
      <Flex>
        <div className={style.background1}>
          <Image src={banner_01} alt="banner_01" />
        </div>
        <div className={style.background2}>
          <Carousel
            slideSize="10%"
            slideGap="sm"
            align="start"
            loop
            style={{ flex: 1 }}
            classNames={style}
            controlsOffset={'0px'}
          >
            {slides}
          </Carousel>
        </div>
      </Flex>
    </div>
  )
}

export default FooterCustomer
