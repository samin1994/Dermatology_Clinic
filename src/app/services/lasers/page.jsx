import React from 'react'
import { sharedMetadata } from '@/utils'
import { Typography, Container, Box, Grid} from '@mui/material'
import Image from 'next/image'
import styles from './page.module.css'
import ServiceCard from '@/components/ServiceCard/ServiceCard'

export const metadata = {
  title: 'کلینیک دکتر نگین صفدریان - لیزرها',
  openGraph: {
    title: 'لیزرها',
    siteName: 'کلینیک دکتر نگین صفدریان',
    type: 'website',
    description: `لیست انوع لیزرهایی که در کلینیک دکتر نگین صفدریان انجام میشوند.`,
    url: 'https://neginsafdarian.com/lasers',
    images: [
      {
        url: '/services/alex.jpg',
        width: 400,
        height: 400,
        alt: 'لیزر الکس'
      },
      {
        url: '/services/endolift.jpg',
        width: 400,
        height: 400,
        alt: 'لیزر اندولیفت'
      },
      {
        url: '/services/fractional.jpg',
        width: 400,
        height: 400,
        alt: 'لیزر فرکشنال CO2'
      },
      {
        url: '/services/HIFU.jpg',
        width: 400,
        height: 400,
        alt: 'هایفوتراپی'
      },
      {
        url: '/services/IPL.jpg',
        width: 400,
        height: 400,
        alt: 'لیزر IPL'
      },
      {
        url: '/services/IPL-bipolar.png',
        width: 400,
        height: 400,
        alt: 'لیزر فرکشنال بایپولار'
      },
      {
        url: '/services/QSwitch.jpg',
        width: 400,
        height: 400,
        alt: 'لیزر کیوسوئیچ'
      },
      {
        url: '/services/RF-Fractional.jpg',
        width: 400,
        height: 400,
        alt: 'لیزر RF فرکشنال'
      },
      {
        url: '/services/tixel.jpg',
        width: 400,
        height: 400,
        alt: 'لیزر تیکسل'
      },
    ]
  }
}

const LasersList = () => {
  return (
    <>
    <Box width='100vw' height='200px' position='absolute'>
      <Image src='/services-header.png' fill={true}/>
    </Box>
    <Container>
        <Box display='flex' flexDirection='column' alignItems='center' mb={'55px'}>
          <Image src='/neg_vector.png' width={110} height={137}/>
          <Typography variant='h4' color='text.primary' className={styles.title}>انواع لیزرها</Typography>
        </Box>
        
        <Box container direction='row' justifyContent='center' className={styles.grid}>
          <Box item xs={6} md={4}>
            <ServiceCard text='لیزر کیوسوئیچ' image='/services/QSwitch.jpg' url='#' icons={''}/>
          </Box>
          <Box item xs={6} md={4}>
            <ServiceCard text='هایفوتراپی' image='/services/HIFU.jpg' url='/services/lasers/hifu' icons={''}/>
          </Box>
          <Box item xs={6} md={4}>
            <ServiceCard text='tixel (تیکسل)' image='/services/tixel.jpg' url='#' icons={''}/>
          </Box>
          <Box item xs={6} md={4}>
            <ServiceCard text='IPL' image='/services/IPL.jpg' url='#' icons={''}/>
          </Box>
          <Box item xs={6} md={4}>
            <ServiceCard text='فرکشنال CO2' image='/services/fractional.jpg' url='#' icons={''}/>
          </Box>
          <Box item xs={6} md={4}>
            <ServiceCard text='Alex' image='/services/alex.jpg' url='#' icons={''}/>
          </Box>
          <Box item xs={6} md={4}>
            <ServiceCard text='RF فرکشنال' image='/services/RF-Fractional.jpg' url='#' icons={''}/>
          </Box>
          <Box item xs={6} md={4}>
            <ServiceCard text='اندولیفت' image='/services/endolift.jpg' url='#' icons={''}/>
          </Box>
          <Box item xs={6} md={4}>
            <ServiceCard text='Fractional Bipolar' image='/services/IPL-bipolar.png' url='#' icons={''} className={styles.ipl}/>
          </Box>
        </Box>
        
    </Container>
    </>
  )
}

export default LasersList