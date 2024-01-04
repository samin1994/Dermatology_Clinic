
import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@mui/system'
import styles from './page.module.css'
import { motion } from 'framer-motion';


const AboutUs = () => {

  const duration = 1000; // ms
const delay = 500; // ms
var i = 0

const animStr = (i) => `fadeIn ${duration}ms ease-out ${delay * (i + 1)}ms forwards`;

  // console.log(inputValues)
  return (
    <Container sx={{pb: '70px'}}>
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
      <Box className={styles.bioDetails}>
        <Typography className={styles.bioTitle} variant='h6' color='text.secondary'>تحصیلات دانشگاهی</Typography>
        <Typography variant='number'>رتبه سوم بورد تخصصی پوست ایران در سال  1376 از دانشگاه علوم پزشکی تهران</Typography>
        <Typography variant='number'>پزشکی عمومی از دانشگاه علوم پزشکی تهران - سال 1364 تا 1370</Typography>

        <Typography className={styles.bioTitle} variant='h6' color='text.secondary'>تجربیات کاری</Typography>
        <Typography variant='number'>23 سال تجربه کاری در زمینه درماتولوژی (تخصص پوست و مو)</Typography>
        <Typography variant='number'>دارای تجربه در تمامی انواع لیزرهای درماتولوژی</Typography>
        <Typography variant='body1' mt={1} fontWeight='600'>تجربه تدریس :</Typography>
        <Typography variant='number'>تدریس دروس درماتولوژی به دانشجویان پزشکی به مدت 7 سال</Typography>
        <Typography variant='body1' mt={1} fontWeight='600'>محل‌های طبابت به طور حرفه ای : </Typography>
        <Typography variant='number'>مطب و کلینیک شخصی</Typography>
        <Typography variant='number'>کلینیک تخصصی پوست و مو به سیما</Typography>
        <Typography variant='body1' mt={1} fontWeight='600'>علاقه اصلی : </Typography>
        <Typography variant='number'>درماتولوژی زیبایی</Typography>

        <Typography className={styles.bioTitle} variant='h6' color='text.secondary'>تخصص ها</Typography>
        <Typography variant='body1'>درمان بیماریهای پوستی</Typography>
        <Typography variant='body1'>لیزر درمانی</Typography>
        <Typography variant='body1'>تزریق انواع ژل، مزوژل و بوتاکس</Typography>
        <Typography variant='body1'>تزریق چربی (گرفت چربی)</Typography>
        <Typography variant='body1'>جراحی‌های پوست</Typography>
        <Typography variant='body1'>لیفت با نخ</Typography>

        <Typography className={styles.bioTitle} variant='h6' color='text.secondary'>عضویت در مجامع حرفه ای</Typography>
        <Typography variant='number'>عضو انجمن متخصصین پوست اروپا (EADV) از سال 2010 میلادی</Typography>
        <Typography variant='number'>عضو انجمن متخصصین پوست ایران از سال 1376</Typography>

        <Typography className={styles.bioTitle} variant='h6' color='text.secondary'>تحقیقات علمی</Typography>
        <Typography variant='number'>شیوع PCO در بیمار زن مبتلا به آکنه در کنگره پوست استرالیا در سال 1376</Typography>

        <Typography className={styles.bioTitle} variant='h6' color='text.secondary'>کنفرانس‌های علمی</Typography>
        <Typography fontWeight='500' variant='body1'><b>Intense pulsed light therapy as an effective tool for reduction of pigmentation in macular amyloidosis patches</b>; EADV 2020</Typography>
        <Typography fontWeight='500' variant='body1'><b>Intense Pulsed light laser treatment of facial papules in frontal fibrosing alopecia</b>; EADV 2019</Typography>
        <Typography fontWeight='500'  variant='body1'><b>Post-inflammatory Hyperpigmentation Treatment with combination of fractional Q-switched laser plus carboxy therapy and glycolic peeling</b>; EADV 2018</Typography>
        <Typography fontWeight='500' variant='body1'><b>Fractional 1064 nm Q-switched Nd-yag laser therapy as a safe and effective tool for reducing pigmentation in macular amyloidosis patches</b>; EADV 2017</Typography>
        <Typography fontWeight='500' variant='body1'><b>Intense pulse light as a safe tool to remove melanocytic nevus</b>; EADV 2016</Typography>
        <Typography fontWeight='500' variant='body1'><b>Treatment of Becker’s nevus with Intense pulse light</b>; WCD Vancouver 2015</Typography>
        <Typography fontWeight='500' variant='body1'><b>Treatment of periorbital darkening with co2 fractional laser</b>; EADV 2013</Typography>

        <Typography className={styles.fadeItem}>meow</Typography>
        <Typography className={styles.fadeItem}>hi</Typography>

      </Box>
    </Container>
  )
}

export default AboutUs