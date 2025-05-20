import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import styles from './page.module.css'
import Image from 'next/image'
import { sharedMetadata } from '@/utils'
import ServiceCard from '@/components/ServiceCard/ServiceCard'

export const metadata = {
  title: 'کلینیک دکتر نگین صفدریان - خدمات',
  openGraph: {
    title: 'خدمات',
    siteName: 'کلینیک دکتر نگین صفدریان',
    type: 'website',
    description: `لیست خدمات ارایه شده در کلینیک دکتر نگین صفدریان`,
    url: 'https://neginsafdarian.com/services',
    images: [
      {
        url: './laser.jpg',
        width: 400,
        height: 400,
        alt: 'لیزر'
      },
      {
        url: './injection.jpg',
        width: 400,
        height: 400,
        alt: 'تزریقات'
      },
      {
        url: './thread-lift.webp',
        width: 400,
        height: 400,
        alt: 'لیفت با نخ'
      },
      {
        url: './miscellaneous.jpg',
        width: 400,
        height: 400,
        alt: 'سایر خدمات'
      }
    ]
  }
}

const page = () => {
  return (
    <>
      <Box width='100vw' height='200px' position='absolute'>
        <Image src='./services-header.png' fill={true} />
      </Box>
      <Box className={styles.container}>
        <Box display='flex' flexDirection='column' alignItems='center' mb={'55px'}>
          <Image src='./neg_vector.png' width={110} height={137} />
          <Typography variant='h4' color='text.primary' className={styles.title}>خدمات کلینیک دکتر نگین صفدریان</Typography>
        </Box>
        {/* <Box className={styles.services}> */}
        <Box container direction='row' justifyContent='center' className={styles.grid}>
          <Box item xs={12} md={6} lg={4} className={styles.gridItem}>
            <ServiceCard text='تزریقات' image='./injection.jpg' url='/services/injections' icons={['/injection.png', '/injection-white.png']} />
          </Box>
          <Box xs={12} md={6} lg={4} className={styles.gridItem}>
            <ServiceCard text='لیفت با نخ' image='./thread-lift.webp' url='/services/thread-lift' icons={['/lift-icon.png', '/lift-icon-white.png']} />
          </Box>
          <Box xs={12} md={6} lg={4} className={styles.gridItem}>
            <ServiceCard text='لیزرها' image='./laser.jpg' url='/services/lasers' icons={['laser 1.svg', '/laser-icon-white.svg']} />
          </Box>
          <Box xs={12} md={6} lg={4} className={styles.gridItem}>
            <ServiceCard text='تزریق چربی' image='./fat-grafting.jpg' url='/services/fat-grafting' icons={['/injection.png', '/injection-white.png']} />
          </Box>
          <Box xs={12} md={6} lg={4} className={styles.gridItem}>
            <ServiceCard text='سایر خدمات' image='./miscellaneous.png' url='/services/other' icons={['/miscellaneous-icon.png', '/miscellaneous-white.png']} />
          </Box>
        </Box>
        {/* </Box> */}
      </Box>
    </>
  )
}

export default page