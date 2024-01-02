
import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@mui/system'
import styles from './page.module.css'


const AboutUs = () => {

  // console.log(inputValues)
  return (
    <Container>
      <Box className={styles.main}>
        <Box className={styles.imgContainer}>
          <Image className={styles.bio_image} width={300} height={300} src='/bio_image.png' sizes={'100vw'} alt='dr negin safdarian'/>
        </Box>
        <Box className={styles.bioText}>
          <Typography variant='h5' color='#852b7d'>دکتر نگین صفدریان</Typography>
          <hr className={styles.divider} color='#a22f97'/>
          <Typography variant='h6' color='#ba52b0'>متخصص پوست، مو و زیبایی</Typography>
          <Typography mt={2} variant='body1'>           
دکتر نگین صفدریان در سال ۱۳۷۱ از دانشکده پزشکی دانشگاه تهران با معدل عالی فارغ التحصیل شدند، و مجدداً در سال ۱۳۷۳ دوره‌ی تخصصی پوست و مو را شروع، و 
در سال ۱۳۷۷ از دانشگاه تهران فارغ التحصیل شدند. ‌ایشان رتبه سوم در بورد تخصصی در کل کشور بوده و از « زمان تا کنون اقدام به
 درمان موفقیت‌آمیز بسیاری از بیماران نموده‌اند. ‌ایشان همچنین هرساله با شرکت در کنگره‌های جهانی گوناگون در حوزه پوست و مو در
 تلاش هستند با بهره‌گیری از علوم و فنون جدید در خدمت بیماران و زیباجویان عزیز باشند. خانم دکتر عضو انجمن متخصصین پوست اروپا
 می‌باشند و همه ساله به ارائه مقالات جدید و نتیجه تجربیات درمانی خود و لیزر در زمینه پوست در کنگره‌های اروپایی می‌پردازند.
          </Typography>
        </Box>
      </Box>

    </Container>
  )
}

export default AboutUs