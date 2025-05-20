import React from 'react'
import { Box, Container, Typography, Grid } from '@mui/material'
import Image from 'next/image'
import styles from './page.module.css'
import ServiceCard from '@/components/ServiceCard/ServiceCard'
import { sharedMetadata } from '@/utils'

export const metadata = {
  ...sharedMetadata,
  title: 'سایر خدمات',
}

const OtherServices = () => {
  return (
    <>
      <Box width='100vw' height='200px' position='absolute'>
        <Image src='./services-header.png' fill={true} />
      </Box>
      <Box className={styles.container}>
        <Box className={styles.mainTitle}>
          <Image src='./neg_vector.png' width={110} height={137} />
          <Typography variant='h4' color='text.secondary'>سایر خدمات</Typography>
        </Box>

        <Box container direction='row' justifyContent='center' className={styles.grid}>
          <Box item xs={6} md={4}>
            <ServiceCard text='میکرودرم' image='./services/other/microderm.jpg' url='/services/other/microderm' icons={''} />
          </Box>
          <Box item xs={6} md={4}>
            <ServiceCard text='کربوکسی تراپی' image='./services/other/carboxy.jpg' url='/services/other/carboxy' icons={''} />
          </Box>
          <Box item xs={6} md={4}>
            <ServiceCard text='مزوتراپی' image='./services/other/mesotherapy.jpg' url='/services/other/mesotherapy' icons={''} />
          </Box>
          <Box item xs={6} md={4} className={styles.lastItem}>
            <ServiceCard text='میکرونیدلینگ' image='./services/other/microneedling.jpg' url='/services/other/microneedling' icons={''} />
          </Box>
        </Box>

      </Box>
    </>
  )
}

export default OtherServices