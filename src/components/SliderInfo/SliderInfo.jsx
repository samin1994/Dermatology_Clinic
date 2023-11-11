import React from 'react'
import styles from './page.module.css'
import { Typography, Box, Link } from '@mui/material'
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';

const SliderInfo = () => {
  return (
    <div className={styles.carousel_info}>
      <Typography color='primary.main'>ساعات کاری و شماره تماس</Typography>
      <Typography color='primary.main'>شنبه ظهر تا عصر</Typography>
      <Typography color='primary.main'>یکشنبه تا چهارشنبه صبح تا ظهر</Typography>
      <Box display='flex' justifyContent='center' alignItems='center' mt={2}>
        <Box display='flex' flexDirection='column'>
          <Link underline="none" href="tel:9802122883028" color='primary.main' variant='number'>021-22883028</Link>
          <Link underline='none' href="tel:9802122882903" color='primary.main' variant='number'>021-22882903</Link>
        </Box>
        <PhoneEnabledIcon color='primary' sx={{marginTop: '-6px', ml: '10px'}}/>
      </Box>
    </div>
  )
}

export default SliderInfo