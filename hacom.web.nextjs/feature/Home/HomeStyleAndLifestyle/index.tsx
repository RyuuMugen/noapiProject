'use client'
import commonCategoryCard_4 from '@/assets/commonCategoryCard_1.png'
import commonCategoryCard_1 from '@/assets/commonCategoryCard_2.png'
import commonCategoryCard_2 from '@/assets/commonCategoryCard_3.png'
import commonCategoryCard_3 from '@/assets/commonCategoryCard_4.png'
import commonCategoryCard_5 from '@/assets/commonCategoryCard_5.png'
import commonCategoryCard_6 from '@/assets/commonCategoryCard_6.png'
import AppContainer from '@/common/AppContainer'
import CommonCategoryCard from '@/common/CommonCategoryCard'
import TopicName from '@/common/TopicName'
import { Carousel } from '@mantine/carousel'
import { Flex } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'
import { useEffect, useState } from 'react'

const dataCommonCategoryCard = [
  {
    title: 'Đời sống',
    image: commonCategoryCard_1,
    idCategory: 551,
    categoryCode: 'doi-song',
  },
  {
    title: 'Công sở',
    image: commonCategoryCard_2,
    idCategory: 552,
    categoryCode: 'cong-so',
  },
  {
    title: 'Game',
    image: commonCategoryCard_3,
    idCategory: 553,
    categoryCode: 'game',
  },
  {
    title: 'Doanh nhân',
    image: commonCategoryCard_4,
    idCategory: 554,
    categoryCode: 'doanh-nhan',
  },
  {
    title: 'Giải trí',
    image: commonCategoryCard_5,
    idCategory: 555,
    categoryCode: 'giai-tri',
  },
  {
    title: 'Thời trang',
    image: commonCategoryCard_6,
    idCategory: 556,
    categoryCode: 'thoi-trang',
  },
]

const HomeStyleAndLifestyle = () => {
  const { height, width } = useViewportSize()

  const slides = dataCommonCategoryCard.map((item: any, index: any) => (
    <Carousel.Slide key={index}>
      <CommonCategoryCard key={index} item={item} />
    </Carousel.Slide>
  ))

  return (
    <AppContainer>
      <Flex>
        <TopicName color="#1F67D2" topicName="PHONG CÁCH VÀ LỐI SỐNG" />
      </Flex>
      <Flex justify={'space-between'} style={{ paddingBottom: 50 }}>
        {width < 1700 ? (
          <div style={{ width: '100%' }}>
            <Carousel
              slideSize={width < 1460 ? '25%' : '20%'}
              loop
              align="start"
              controlSize={40}
              slideGap={20}
            >
              {slides}
            </Carousel>
          </div>
        ) : (
          dataCommonCategoryCard.map((item: any, index: any) => (
            <CommonCategoryCard item={item} key={index} />
          ))
        )}
      </Flex>
    </AppContainer>
  )
}

export default HomeStyleAndLifestyle
