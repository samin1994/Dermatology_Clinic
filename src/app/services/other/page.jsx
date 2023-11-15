import React from 'react'
import {Box, Container, Typography, Grid} from '@mui/material'
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
    <Box width='100vw' height='200px' position='relative'>
      <Image src='/services-header.png' fill={true}/>
    </Box>
    <Container className={styles.container}>
        <Box className={styles.mainTitle}>
          <Image src='/neg_vector.png' width={110} height={137}/>
          <Typography variant='h4' color='text.secondary'>سایر خدمات متفرقه</Typography>
        </Box>
        <Box className={styles.services}>
          <Grid container direction='row' justifyContent='center' columnSpacing={4} rowSpacing={7}>
            <Grid item xs={6} md={4}>
              <ServiceCard text='میکرودرم' image='/services/other/microderm.jpg' url='/services/other/microderm' icons={''}/>
            </Grid>
            <Grid item xs={6} md={4}>
              <ServiceCard text='کربوکسی تراپی' image='/services/other/carboxy.jpg' url='/services/other/carboxy' icons={''}/>
            </Grid>
          </Grid>
        </Box>
    </Container>
    </>
  )
}

export default OtherServices