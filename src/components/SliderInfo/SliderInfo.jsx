import React from 'react'
import styles from './page.module.css'
import { Typography, Box, Link } from '@mui/material'
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';

const SliderInfo = () => {
  return (
    <div className={styles.carousel_info}>
      <Typography className={`${styles.text} ${styles.title}`} color='text' >ساعات کاری و شماره تماس</Typography>
      <Typography className={styles.text} color='text'>شنبه از ساعت <Typography variant='number'>13</Typography> الی <Typography variant='number'>18</Typography></Typography>
      <Typography className={styles.text} color='text'>دوشنبه تا چهارشنبه ساعت <Typography variant='number'>9</Typography> الی <Typography variant='number'>13</Typography></Typography>
      <Box className={styles.phone}>
        <PhoneEnabledIcon color='text' className={`${styles.text} ${styles.phoneIcon}`}/>
        <Box display='flex' flexDirection='column'>
          <Link className={styles.text} underline="none" href="tel:982122883028" color='text.primary' variant='number'>021-22883028</Link>
          <Link className={styles.text} underline='none' href="tel:982122882903" color='text.primary' variant='number'>021-22882903</Link>
        </Box>
        
      </Box>
    </div>
  )
}

export default SliderInfo