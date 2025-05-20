import React from 'react'
import Image from 'next/image'
import { Box, Container, Typography, Card } from '@mui/material'
import styles from './page.module.css'

const Facilities = () => {
  return (
    <>
      {/* <Box className={styles.coverImg}>
      <Image src='/facilities.png' alt='cover' fill='true' style={{objectFit: 'cover'}}/>
    </Box> */}
      <Box display='flex' flexDirection='column' alignItems='center' mb={'55px'}>
        <Image src='./neg_vector.png' width={110} height={137} />
        <Typography variant='h4' color='text.primary'>تجهیزات کلینیک دکتر نگین صفدریان</Typography>
      </Box>
      <Box className={styles.container}>
        <Card className={styles.facilityCard}>
          <Image className={styles.image} src='./facilities/alex-clarity.jpg' width={109} height={200} />
          <Typography mt={1} mb={1} variant='h6'>الکس لوترونیک کلاریتی</Typography>
          <Typography variant='body2' className={styles.text}>
            لیزر الکساندرایت کلاریتی شرکت لوترونیک در بین 5 دستگاه لیزر الکساندرایت برتر
            دنیا قرار گرفته است. این دستگاه با بهره‌گیری از طول موج دوگانه 755 نانومتر
            و 1064 نانومتر امکان درمان انواع مشکلات پوستی را در کنار لیزر موهای زائد فراهم کرده‌است.
            این دستگاه با قابلیت فرکشنال دوگانه در یک هندپیس و گزینه‌های درمانی مختلفی که دارد پرفروش‌ترین
            لیزر الکس است که در بازار ایران نیز طرفداران خاص خود را دارد.
          </Typography>
        </Card>
        <Card className={styles.facilityCard}>
          <Image className={styles.image} src='./facilities/CO2-fractional.png' width={109} height={200} />
          <Typography mt={1} mb={1} variant='h6'>لیزر CO2 فرکشنال لوترونیک</Typography>
          <Typography variant='body2' className={styles.text}>
            دستگاه لیزر فرکشنال (LUTRONIC) مجهز به سیستم اختراعی (patented) کنترل آشوب (CCTTM) است. این تکنیک در واقع الگوریتمی برای توزیع شبه رندم میکروموج­های لیزر است که در عین حال سعی در ماکزیمم کردن فاصله بین دو محل اصابت دو موج متوالی دارد. استفاده از این تکنیک از انتشار گرما بین نقاط اصابت لیزر به پوست جلوگیری می­کند و به پوست اجازه می­دهد بیشترین اتلاف گرما را بین دو شات لیزر داشته باشد. در نتیجه استفاده از این تکنیک ایمنی فرآیند درمانی افزایش و میزان ناراحتی بیمار و زمان بهبود وی کاهش چشمگیر می­یابد.
          </Typography>
        </Card>
      </Box>
    </>
  )
}

export default Facilities