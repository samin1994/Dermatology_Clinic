import React from 'react'
import styles from './page.module.css'
import { Typography, Box, Link } from '@mui/material'
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';

const SliderInfo = () => {
  return (
    <div className={styles.carousel_info}>
      <Typography color='primary.main' mb={2}>ساعات کاری و شماره تماس</Typography>
      <Typography color='primary.main'>شنبه از ساعت <Typography variant='number'>13</Typography> الی <Typography variant='number'>18</Typography></Typography>
      <Typography color='primary.main'>دوشنبه تا چهارشنبه ساعت <Typography variant='number'>9</Typography> الی <Typography variant='number'>13</Typography></Typography>
      <Box display='flex' justifyContent='center' alignItems='center' mt='10px'>
        <PhoneEnabledIcon color='primary' sx={{marginTop: '-6px', ml: '10px'}}/>
        <Box display='flex' flexDirection='column'>
          <Link underline="none" href="tel:9802122883028" color='primary.main' variant='number'>021-22883028</Link>
          <Link underline='none' href="tel:9802122882903" color='primary.main' variant='number'>021-22882903</Link>
        </Box>
        
      </Box>
    </div>
  )
}

export default SliderInfo