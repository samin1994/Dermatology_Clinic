import React from 'react'
import {Container, Card, Box, Typography} from '@mui/material'
import Image from 'next/image'
import { sharedMetadata } from '@/utils'
import DoneIcon from '@mui/icons-material/Done';
import IntroCard from '@/components/Pages/IntroCard/page'
import {ProsCard} from '@/components/Pages/IntroCard/page'

export const metadata = {
  title: 'کلینیک دکتر نگین صفدریان | لیزر IPL',
  description: `
نور‌های متمرکز شده (IPL) یک درمان زیبایی پوست است که برای کاهش علائم پیری، حذف مو‌های زائد، روشن کردن لکه‌های 
تیره‌تر پوست، رفع چین و چروک، درمان روزاسه و همچنین خشک کردن آکنه به کار می‌رود.`,
  openGraph: {
    title: 'کلینیک دکتر نگین صفدریان | لیزر IPL',
    siteName: 'کلینیک دکتر نگین صفدریان',
    type: 'article',
    description: `
نور‌های متمرکز شده (IPL) یک درمان زیبایی پوست است که برای کاهش علائم پیری، حذف مو‌های زائد، روشن کردن
 لکه‌های تیره‌تر پوست، رفع چین و چروک، درمان روزاسه و همچنین خشک کردن آکنه به کار می‌رود.`,
    url: 'https://neginsafdarian.com/services/lasers/IPL',
    images: [
      {
        url: '/services/IPL.jpg',
        width: 400,
        height: 400,
        alt: 'لیزر IPL'
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
            title: 'لیزر IPL',
            description: `
            لیزر IPL (آی پی ال) مخفف عبارت intense pulse light است. این تکنولوژی دقیقاً لیزر نیست. در واقع یک سیستم درمانی
            است که با پالس‌های نوری کار می‌کند، که امکان درمان بسیاری
            از بیماری‌های پوستی را فراهم کرده است. دستگاه IPL با توجه به طول موج‌های مختلف و
            انتخاب فیلتر‌های مناسب کارایی‌های متفاوتی می‌تواند داشته.
            از این دستگاه همچنین جهت حذف مو‌های زائد، بخصوص مو‌هایی که نرم و نازک 
            و روشن‌تر هستند و امکان جوابدهی به وسیله‌ی دستگاه‌های لیزر برای
            آن‌ها وجود ندارد، استفاده می‌شود. این روش درمانی عوارض 
            جانبی بسیار محدودی دارد و یک درمان کاملاً غیر تهاجمی می‌باشد.`
            ,
            image: '/services/IPL-intro.jpg'
            ,
            
        }}/>
        <ProsCard data={{pros: [
                {
                    content: ``,
                    title: 'جوانسازی پوست'
                },
                {
                    content: ``,
                    title: 'روشن کردن لکه‌های قهوه ای'
                },
                {
                    content: ``,
                    title: 'درمان لک‌های حاملگی یا ملاسما'
                },
                {
                    content: ``,
                    title: 'رفع چین و چروک ناشی از افزایش سن و خشکی پوست'
                },
                {
                    content: ``,
                    title: 'درمان روزاسه'
                },
                {
                    content: ``,
                    title: 'بازسازی پوست‌های خشک و مرده'
                },
                {
                    content: ``,
                    title: 'درمان کوپروز'
                },
                {
                    content: ``,
                    title: 'خشک کردن آکنه'
                },
                {
                    content: ``,
                    title: `فروکش کردن التهاب ناشی از بیماری‌های خودایمنی پوستی مثل لیکن پلان، پسوریازیس و...`
                }
                ],
            prosTitle: 'اثرات و فواید لیزر IPL'}}/>
    </Container>
    </>
  )
}

export default IPL