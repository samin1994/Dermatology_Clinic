import React from 'react'
import { Box, Container, Grid, Typography} from '@mui/material'
import styles from './page.module.css'
import Image from 'next/image'
import { sharedMetadata } from '@/utils'
import ServiceCard from '@/components/ServiceCard/ServiceCard'

export const metadata = {
  ...sharedMetadata,
  title: 'خدمات',
}

const page = () => {
  return (
    <>
    <Box width='100vw' height='200px' position='relative'>
      <Image src='/services-header.png' fill={true}/>
    </Box>
    <Container className={styles.container}>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Image src='/neg_vector.png' width={110} height={137}/>
          <Typography variant='h4' color='text.primary' className={styles.title}>خدمات کلینیک دکتر نگین صفدریان</Typography>
        </Box>
        <Box className={styles.services}>
          <Grid container direction='row' justifyContent='center' columnSpacing={4} rowSpacing={7}>
            <Grid item xs={6} md={4}>
              <ServiceCard text='تزریقات' image='/injection.jpg' url='#' icons={['/injection.png', '/injection-white.png']}/>
            </Grid>
            <Grid item xs={6} md={4}>
              <ServiceCard text='لیفت با نخ' image='/lift.jpg' url='#' icons={['/lift-icon.png', '/lift-icon-white.png']}/> 
            </Grid>
            <Grid item xs={6} md={4}>
              <ServiceCard text='لیزرها' image='/laser.jpg' url='/services/lasers' icons={['laser 1.svg', '/laser-icon-white.svg']}/>
            </Grid>
            <Grid item xs={6} md={4}>
              <ServiceCard text='سایر خدمات' image='/miscellaneous.png' url='/services/other' icons={['/miscellaneous-icon.png', '/miscellaneous-white.png']}/>
            </Grid>
          </Grid>
        </Box>
    </Container>
    </>
  )
}

export default page