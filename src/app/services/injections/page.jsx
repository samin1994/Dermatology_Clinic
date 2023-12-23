import React from 'react'
import { sharedMetadata } from '@/utils'
import { Typography, Container, Box, Grid} from '@mui/material'
import Image from 'next/image'
import styles from './page.module.css'
import ServiceCard from '@/components/ServiceCard/ServiceCard'

export const metadata = {
  title: 'کلینیک دکتر نگین صفدریان - تزریقات',
  openGraph: {
    title: 'انواع تزریق ها',
    siteName: 'کلینیک دکتر نگین صفدریان',
    type: 'website',
    description: `لیست انوع تزریقاتی که در کلینیک دکتر نگین صفدریان انجام میشوند.`,
    url: 'https://neginsafdarian.com/services/injection',
    images: [
      {
        url: '/services/injection.webp',
        width: 400,
        height: 400,
        alt: 'تزریق فیلر'
      },
    ]
  }
}

const Injections = () => {
  return (
    <>
    <Box width='100vw' height='200px' position='absolute'>
      <Image src='/services-header.png' fill={true}/>
    </Box>
        <Box display='flex' flexDirection='column' alignItems='center' mb={'55px'}>
          <Image src='/neg_vector.png' width={110} height={137}/>
          <Typography variant='h4' color='text.primary' className={styles.title}>انواع تزریقات</Typography>
        </Box>
        
        <Box container direction='row' justifyContent='center' className={styles.grid}>
          <Box item xs={6} md={4}>
            <ServiceCard text='تزریق فیلر' image='/services/injection/filler.webp' url='/services/injections' icons={''}/>
          </Box>
          <Box item xs={6} md={4}>
            <ServiceCard text='تزریق مزوژل' image='/services/injection/mesogel.png' url='/services/injections' icons={''}/>
          </Box>
          <Box item xs={6} md={4}>
            <ServiceCard text='تزریق بوتاکس' image='/services/injection/botox.jpg' url='/services/injections' icons={''}/>
          </Box>
        </Box>
    </>
  )
}

export default Injections