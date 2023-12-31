import React from 'react'
import {Container, Card, Box, Typography} from '@mui/material'
import Image from 'next/image'
import { sharedMetadata } from '@/utils'
import DoneIcon from '@mui/icons-material/Done';
import IntroCard from '@/components/Pages/IntroCard/page'
import {ProsCard} from '@/components/Pages/IntroCard/page'

export const metadata = {
  title: 'کلینیک دکتر نگین صفدریان | تزریق چربی با کمترین عوارض',
  description: `لیفت با نخ یک درمان زیبایی غیر تهاجمی است که پوست شما
 را لیفت و سفت می‌کند تا ظاهری جوان‌تر داشته باشید. لیفت با نخ همچنین تولید کلاژن بدن شما را تحریک می‌کند،
 تا پوستی سفت‌تر و انعطاف پذیرتر داشته باشید. روش لیفت با نخ بهبودی سریع و کمترین عوارض را دارد.`,
  openGraph: {
    title: 'کلینیک دکتر نگین صفدریان | تزریق چربی با کمترین عوارض',
    siteName: 'کلینیک دکتر نگین صفدریان',
    type: 'article',
    description: `لیفت با نخ یک درمان زیبایی غیر تهاجمی است که پوست شما
 را لیفت و سفت می‌کند تا ظاهری جوان‌تر داشته باشید. لیفت با نخ همچنین تولید کلاژن بدن شما را تحریک می‌کند،
 تا پوستی سفت‌تر و انعطاف پذیرتر داشته باشید. روش لیفت با نخ بهبودی سریع و کمترین عوارض را دارد.`,
    url: 'https://neginsafdarian.com/services/fat-grafting',
    images: [
      {
        url: '/thread-lift.webp',
        width: 400,
        height: 400,
        alt: 'تزریق چربی'
      },
    ]
  }
}

const FatGrafting
 = () => {
  return (
        <>
        <Box width='100vw' height='200px' position='absolute'>
          <Image src='/services-header.png' fill={true}/>
        </Box>
        
        <Container>
          <IntroCard data={{
            title: 'تزریق چربی',
            description: `
با افزایش سن، لایه چربی زیر پوست به تدریج کاهش می‌یابد و باعث شل شدن و افتادگی پوست و
 ایجاد چروک‌ها و کاهش استحکام بافت پوست می‌شود. تزریق چربی به صورت یکی از مؤثرترین و ماندگارترین روش‌های جوانسازی و جبران حجم 
از دست رفته چربی پوست است. وجود حفره‌های متعدد در صورت، فرو رفتگی گونه و حتی اصلاح فرم لب‌ها از جمله مواردی است که می‌تواند با
 تزریق چربی بهبود یابند. پیوند چربی روشی است که سلول‌های چربی اضافی را از یک ناحیه از بدن که حاوی فاکتور‌های رشد و سلول‌های بنیادی (Stem Cell - Growth Factor)
  می‌باشند خارج می‌کند. این سلول‌ها زنده‌مانی خود را حفظ می‌کنند و می‌توان آن‌ها را به نواحی مورد نیاز مانند گونه‌ها،
   زیر چشم، زاویه‌ی فک، چانه و خط خنده تزریق کرد. چربی مورد استفاده برای انتقال چربی، از شکم یا ران خارج شده و به ناحیه
   دیگری تزریق می‌شود. مزیت پیوند چربی این است که چربی اتولوگ است (از بدن شما می‌آید)، بنابراین واکنش‌های آلرژیک رخ نمی‌دهد.`,
            image: '/services/fat-grafting-intro.jpg',
            pros: [
    {
        content: ``,
        title: 'برطرف کردن اسکار‌ها و جای زخم‌های صورت و بدن مانند اسکار آکنه'
    },
    {
         content: ``,
        title: 'رفع فرورفتگی‌های ناشی از لوپوس پانیکولیت'
    },
    {
        content: ``,
        title: 'رفع زخم‌های ناشی از تصادف'
    },
    {
        content: ``,
        title: 'جبران کاهش حجم صورت در بیماری‌هایی مانند آتروفی hemifacial'
    },
    {
        content: ``,
        title: 'جوانسازی ناحیه تناسلی بانوان'
    }
    ],
    prosTitle: 'اثرات و فواید تزریق چربی'
        }}/>

    <ProsCard data={{
            pros: [
    {
        content: ``,
        title: 'برطرف کردن اسکار‌ها و جای زخم‌های صورت و بدن مانند اسکار آکنه'
    },
    {
         content: ``,
        title: 'رفع فرورفتگی‌های ناشی از لوپوس پانیکولیت'
    },
    {
        content: ``,
        title: 'رفع زخم‌های ناشی از تصادف'
    },
    {
        content: ``,
        title: 'جبران کاهش حجم صورت در بیماری‌هایی مانند آتروفی hemifacial'
    },
    {
        content: ``,
        title: 'جوانسازی ناحیه تناسلی بانوان'
    }
    ],
    prosTitle: 'اثرات و فواید تزریق چربی'
        }} />
    </Container>
        
    </>
  )
}

export default FatGrafting