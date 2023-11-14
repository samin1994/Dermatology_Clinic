import React from 'react'
import { sharedMetadata } from '@/utils'
import { Typography, Container, Box, Grid} from '@mui/material'
import Image from 'next/image'
import styles from './page.module.css'
import ServiceCard from '@/components/ServiceCard/ServiceCard'

export const metadata = {
  ...sharedMetadata,
  title: 'لیزرها',
}

const LasersList = () => {
  return (
    <Container>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Image src='/neg_vector.png' width={110} height={137}/>
          <Typography variant='h4' color='text.primary' className={styles.title}>انواع لیزرها</Typography>
        </Box>
        <Box className={styles.services}>
          <Grid container direction='row' justifyContent='center' columnSpacing={4} rowSpacing={7}>
            <Grid item xs={6} md={4}>
              <ServiceCard text='لیزر کیوسوئیچ' image='/services/QSwitch.jpg' url='#' icons={''}/>
            </Grid>
            <Grid item xs={6} md={4}>
              <ServiceCard text='هایفوتراپی' image='/services/HIFU.jpg' url='#' icons={''}/>
            </Grid>
            <Grid item xs={6} md={4}>
              <ServiceCard text='tixel (تیکسل)' image='/services/tixel.jpg' url='#' icons={''}/>
            </Grid>
            <Grid item xs={6} md={4}>
              <ServiceCard text='IPL' image='/services/IPL.jpg' url='#' icons={''}/>
            </Grid>
            <Grid item xs={6} md={4}>
              <ServiceCard text='فرکشنال CO2' image='/services/fractional.jpg' url='#' icons={''}/>
            </Grid>
            <Grid item xs={6} md={4}>
              <ServiceCard text='Alex' image='/services/alex.jpg' url='#' icons={''}/>
            </Grid>
            <Grid item xs={6} md={4}>
              <ServiceCard text='RF فرکشنال' image='/services/RF-fractional.gif' url='#' icons={''}/>
            </Grid>
          </Grid>
        </Box>
    </Container>
  )
}

export default LasersList