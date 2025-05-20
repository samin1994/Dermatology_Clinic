import React from 'react'
import { sharedMetadata } from '@/utils'
import IntroCard from '@/components/Pages/IntroCard/page'
import { ProsCard } from '@/components/Pages/IntroCard/page'
import { Container, Box } from '@mui/material'
import Image from 'next/image'

export const metadata = {
  title: 'کلینیک دکتر نگین صفدریان | میکرونیدلینگ و جوانسازی پوست',
  description: `مزوتراپی یک تکنیک غیر تهاجمی است که در آن با تزریق انواع
   داروهای مختلف از جمله هورمون، ویتامین، کافئین و… در نواحی مختلف بدن چون پوست
   ( به صورت سطحی ) یا بافت ( به صورت عمقی) موجب ترمیم و جوان سازی و یا حذف چربی می گردد.`,
  openGraph: {
    title: 'کلینیک دکتر نگین صفدریان | میکرونیدلینگ و جوانسازی پوست',
    siteName: 'کلینیک دکتر نگین صفدریان',
    type: 'article',
    description: `مزوتراپی یک تکنیک غیر تهاجمی است که در آن با تزریق انواع داروهای مختلف از جمله هورمون،
     ویتامین، کافئین و… در نواحی مختلف بدن چون پوست ( به صورت سطحی ) یا بافت 
    ( به صورت عمقی) موجب ترمیم و جوان سازی و یا حذف چربی می گردد.`,
    url: 'https://neginsafdarian.com/services/other/microneedling',
    images: [
      {
        url: './services/other/microneedling.jpg',
        width: 400,
        height: 400,
        alt: 'میکرونیدلینگ'
      },
    ]
  }
}

const Microneedling = () => {
  return (
    <>
      <Box width='100vw' height='200px' position='absolute'>
        <Image src='./services-header.png' fill={true} />
      </Box>
      <Container>
        <IntroCard data={{
          title: 'میکرونیدلینگ',
          description: `میکرونیدلینگ که به آن Collagen Induction Therapy 
            هم گفته می‌شود، یک درمان نسبتاً غیرتهاجمی می‌باشد. در این روش از سوزن‌های بسیار 
            ظریف برای ایجاد آسیب‌های بسیار جزئی و در نتیجه بالا بردن مکانیزم
             سلولی استفاده می‌شود. در این روش فرایند ترمیم پوست و سپس بازسازی
             سریع آسیب وارد شده به پوست سبب تولید کلاژن و در نتیجه جوانسازی و رفع چین و
             چروک می‌شود. در ضمن در حین انجام کار محلولی از کوکتل‌های ویتأمین سی و جوانسازی
             روی سطح پوست بسته به نیاز پوست هر فرد ریخته می‌شود چون جذب پوست در این حالت بیشتر
             است و جذب این محلول به رفع تیرگی و چین و چروک کمک می‌کند. بعد از یک جلسه درمان و
             گذشت چندروز نتایج خوبی قابل مشاهده می‌باشد. گرچه برای نتیجه مطلوب
             و واقعاً مؤثر شما به بیشتر از یک جلسه درمان 
            نیاز دارید تا کلاژن و الاستین بطور مداوم ساخته شوند.`,
          image: './services/other/microneedling-intro.png',

        }} />
        <ProsCard data={{
          pros: [
            {
              content: ``,
              title: 'جمع کردن منافذ پوست'
            },
            {
              content: ``,
              title: 'از بین بردن جای جوش'
            },
            {
              content: ``,
              title: 'جوانسازی صورت'
            },
            {
              content: ``,
              title: 'روشن کردن پوست'
            },
            {
              content: ``,
              title: 'بهبود چین و وچروک پوست'
            }
          ],
          prosTitle: 'اثرات و فواید میکرونیدلینگ'
        }} />
      </Container>
    </>
  )
}

export default Microneedling