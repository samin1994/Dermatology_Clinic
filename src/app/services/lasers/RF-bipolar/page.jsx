import React from 'react'
import {Container, Card, Box, Typography} from '@mui/material'
import Image from 'next/image'
import { sharedMetadata } from '@/utils'
import DoneIcon from '@mui/icons-material/Done';
import IntroCard from '@/components/Pages/IntroCard/page'
import {ProsCard} from '@/components/Pages/IntroCard/page'

export const metadata = {
  title: 'کلینیک دکتر نگین صفدریان | لیزر RF Bipolar',
  description: `آر اف یا رادیوفرکانسی درمانی تائید شده در برطرف کردن 
  چین و چروک‌های پوست و بهبود و ترمیم بافت پوست است که با ایجاد حرارت در لایه‌ی درم (derm) 
  پوست و تحریک فایبربلاست‌ها به کلاژن‌سازی، سبب رفع چین و چروک و سفت شدن پوست می‌گردد.`,
  openGraph: {
    title: 'کلینیک دکتر نگین صفدریان | لیزر RF Bipolar',
    siteName: 'کلینیک دکتر نگین صفدریان',
    type: 'article',
    description: `آر اف یا رادیوفرکانسی درمانی تائید شده در برطرف کردن
     چین و چروک‌های پوست و بهبود و ترمیم بافت پوست است که با ایجاد حرارت در لایه‌ی درم (derm) 
     پوست و تحریک فایبربلاست‌ها به کلاژن‌سازی، سبب رفع چین و چروک و سفت شدن پوست می‌گردد.`,
    url: 'https://neginsafdarian.com/services/lasers/RF-bipolar',
    images: [
      {
        url: '/services/RF-bipolar.png',
        width: 400,
        height: 400,
        alt: 'لیزر RF Bipolar'
      },
    ]
  }
}

const IPL = () => {
  return (
    <>
    <Box width='100vw' height='200px' position='absolute'>
      <Image src='/services-header.png' fill={true}/>
    </Box>
    <Container>
        <IntroCard data={{
            title: 'لیزر RF - آر اف',
            description: `آر اف یا رادیوفرکانسی درمانی تائید شده در برطرف کردن چین
             و چروک‌های پوست و بهبود و ترمیم بافت پوست است که با ایجاد حرارت در لایه‌ی درم (derm) 
             پوست و تحریک فایبربلاست‌ها به کلاژن‌سازی، سبب رفع چین
              و چروک و سفت شدن پوست می‌گردد. دستگاه‌های آر اف (RF) در شکل‌های تک قطبی و دو قطبی وجود دارد که در نوع تک قطبی 
              آن امواج گرمایی در لایه‌ی عمیق پوست (هیپودرم) نفوذ می‌کنند
               و اصولاً برای لاغری و کاهش سلولیت بکار می‌رود.
               در آر اف دوقطبی امواج در لایه‌ی سطحی و میانی 
              پوست (اپیدرم و درم) پوست نفوذ کرده و سبب ساخت کلاژن
               و الاستین شده و خاصیت کشسانی پوست را افزایش می‌دهد.
درمان پوست با RF یک روش بدون درد و کاملاً غیر تهاجمی است که موجب کاهش خطوط
 ظریف پوستی، افتادگی پوست و افزایش خاصیت ارتجاعی پوست می‌شود. همچنین این روش جریان گردش لنف را بهبود
 بخشیده و باعث دفع سموم و در نتیجه اکسیژن‌رسانی به پوست می‌شود و در نهایت پوستی شاداب‌تر خواهید داشت.
`
            ,
            image: '/services/RF-bipolar-intro.jpg'
            ,
            
        }}/>
        <ProsCard data={{pros: [
                {
                    content: ``,
                    title: 'رفع شلی پوست'
                },
                {
                    content: ``,
                    title: 'رفع چین و چروک و خطوط صورت و گردن'
                },
                {
                    content: ``,
                    title: 'جوانسازی'
                },
                {
                    content: ``,
                    title: 'کوچک کردن غبغب'
                },
                {
                    content: ``,
                    title: 'بازسازی پوست‌'
                },
                {
                    content: ``,
                    title: 'زاویه‌سازی صورت'
                },
                {
                    content: ``,
                    title: 'رفع پف پلک'
                },
                {
                    content: ``,
                    title: `درمان افتادگی پلک`
                }
                ],
            prosTitle: 'اثرات و فواید لیزر RF'}} />
    </Container>
    </>
  )
}

export default IPL