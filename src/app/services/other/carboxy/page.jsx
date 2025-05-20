import React from 'react'
import { Container, Card, Box, Typography } from '@mui/material'
import Image from 'next/image'
import styles from './page.module.css'
import { sharedMetadata } from '@/utils'
import DoneIcon from '@mui/icons-material/Done';
import IntroCard from '@/components/Pages/IntroCard/page'
import { ProsCard } from '@/components/Pages/IntroCard/page'

export const metadata = {
  title: 'کلینیک دکتر نگین صفدریان | کربوکسی تراپی',
  description: `کربوکسی تراپی روشی برای جوانسازی بدن و صورت است. تزریق دی‌اکسید کربن باعث 
  درمان زخم، از بین رفتن سلولیت، ترک پوستی، تیرگی زیر چشم و چین و چروک می‌شود.`,
  openGraph: {
    title: 'کلینیک دکتر نگین صفدریان | کربوکسی تراپی',
    siteName: 'کلینیک دکتر نگین صفدریان',
    type: 'article',
    description: `کربوکسی تراپی روشی برای جوانسازی بدن و صورت است. تزریق دی‌اکسید کربن باعث 
  درمان زخم، از بین رفتن سلولیت، ترک پوستی، تیرگی زیر چشم و چین و چروک می‌شود.`,
    url: 'https://neginsafdarian.com/services/other/carboxy',
    images: [
      {
        url: './services/other/carboxy.jpg',
        width: 400,
        height: 400,
        alt: 'کربوکسی تراپی'
      },
    ]
  }
}

const Carboxy = () => {
  return (
    <>
      <Box width='100vw' height='200px' position='absolute'>
        <Image src='./services-header.png' fill={true} />
      </Box>
      <Container>
        <IntroCard data={{
          title: 'کربوکسی تراپی',
          description: `کربوکسی تراپی یا درمان با کربن دی اکسید یک روش بدون جراحی است که در آن کربن دی اکسید
             را به صورت جلدی و زیر جلدی تزریق می‌کنند. کربوکسی تراپی در واقع همان تزریق
             دی اکسید کربن است و به دلیل اینکه که مکانیسم کربن دی اکسید به طور طبیعی
             در بدن ما وجود دارد؛ با تزریق مقدار کمی از گاز دی اکسید کربن
             درست در زیر سطح پوست، ما آن ناحیه را در افزایش گردش خون 
            تحریک میکند و از آنجا که در اغلب موارد سیاهی زیر چشم، سلولیت و
             علائم کششی به دلیل گردش خون ضعیف ایجاد می‌شود. این روش می تواند مفید باشد.
            تزریق کربن دی اکسید به این صورت است که 
            مخزن گاز دی اکسید کربن با لوله های پلاستیکی به یک تنظیم کننده جریان متصل می شود و گاز بعد از حذف ناخالصی 
            ها از طریق یک سوزن بسیار کوچک به پوست تزریق می‌شود. این روش تقریباً بدون درد است 
            و در صورت لزوم از کرم های موضعی بی حسی میتوان استفاده کرد . کربوکسی تراپی یک روش سرپایی است .`,
          image: './services/other/carboxy-intro.jpg'
          ,

        }} />
        <ProsCard data={{
          pros: [
            {
              content: '',
              title: ' برطرف کردن خطوط اطراف چشم و پف و تیرگی دور چشم'
            },
            {
              content: '',
              title: 'مکمل درمان لیپوساکشن برای صاف نمودن ناهمواری‌های پوستی'
            },
            {
              content: '',
              title: 'برطرف نمودن خطوط چاقی و لاغری'
            },
            {
              title: 'برطرف کردن افتادگی پوست',
              content: ''
            },
            {
              title: 'درمان اسکارهای هایپرتروفیک و قرمز بعد از زخم',
            },
            {
              title: 'از بین بردن سلولیت های بدن'
            },
            {
              title: 'درمان چروک های پشت دست'
            },
            {
              title: 'درمان چروک های دور دهان'
            },
            {
              title: 'درمان جای جوش، سوختگی، آکنه و جراحی'
            },
            {
              title: 'درمان اگزمای پوستی'
            },
            {
              title: 'درمان ‌پسوریازیس یا صدف'
            },
            {
              title: 'درمان قرمزی های بعد از لیزر '
            },
            {
              title: 'درمان زخم های مزمن'
            }
          ],
          prosTitle: 'اثرات و فواید کربوکسی تراپی'
        }} />
      </Container>
    </>
  )
}

export default Carboxy