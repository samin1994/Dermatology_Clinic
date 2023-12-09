import React from 'react'
import {Container, Card, Box, Typography} from '@mui/material'
import Image from 'next/image'
import { sharedMetadata } from '@/utils'
import DoneIcon from '@mui/icons-material/Done';
import IntroCard from '@/components/Pages/IntroCard/page'

export const metadata = {
  title: 'کلینیک دکتر نگین صفدریان | لیزر کیوسوئیچ',
  description: `لیزر Q-Switch برای درمان رنگدانه ها، ملاسما و آسیب های ناشی 
  از نور خورشید بر روی صورت استفاده می شود. این لیزر همه کاره را می توان با
   تنظیمات مختلف برای پاک کردن خالکوبی نیز مورد استفاده قرار داد`,
  openGraph: {
    title: 'کلینیک دکتر نگین صفدریان | لیزر کیوسوئیچ',
    siteName: 'کلینیک دکتر نگین صفدریان',
    type: 'article',
    description: `لیزر Q-Switch برای درمان رنگدانه ها، ملاسما و آسیب های ناشی
     از نور خورشید بر روی صورت استفاده می شود. این لیزر همه کاره را می توان
     با تنظیمات مختلف برای پاک کردن خالکوبی نیز مورد استفاده قرار داد`,
    url: 'https://neginsafdarian.com/services/lasers/Q-Switch',
    images: [
      {
        url: '/services/QSwitch.jpg',
        width: 400,
        height: 400,
        alt: 'لیزر کیوسوئیچ'
      },
    ]
  }
}

const QSwitch = () => {
  return (
    <>
    <Box width='100vw' height='200px' position='absolute'>
      <Image src='/services-header.png' fill={true}/>
    </Box>
    
        <IntroCard data={{
            title: 'لیزر کیوسوئیچ',
            description: `
لیزر Q-Switched (Nd YAG) دارای چند فرکانس 
انرژی شامل ۵۳۲، ۷۵۵ و ۱۰۶۴ نانومتر است. این امواج برای کاربرد‌های مختلف مانند
 هدف قرار دادن لایه‌های عمیق‌تر پوست و همچنین برای رفع تیرگی ناحیه‌ای پوست (hyperpigmentation) 
 و درمان در لایه‌های سطحی‌تر پوست مورد استفاده قرار می‌گیرند.
  این لیزر پالس‌های سریعی را تولید می‌کند که می‌تواند به طور مؤثر جوهر خالکوبی یا
   ملانین (در برخی از انواع لک‌های پوست) را خرد کند. این لیزر با استفاده از پرتوی نور جوهر
   یا ملانین را بدون آسیب رساندن به پوست و بافت اطراف هدف قرار می‌دهد و آن را تجزیه می‌کند که بعداً توسط
   بدن به طور طبیعی دفع می‌شود. همچنین این نوع لیزر ناراحتی وعوارض جانبی کمی دارد. اگرچه ممکن 
  است بیماران برای دستیابی به نتایج دلخواه خود به تعداد بیشتری جلسات درمانی نیاز داشته باشند،
   اما اثر و ماندگاری این درمان طولانی مدت خواهد بود.`
            ,
            image: '/services/Q-switched-intro.jpg'
            ,
            pros: [
                {
                    content: `لیزر‌های سوئیچ کیو در طول موج‌های مختلفی تولید می‌شوند. لیزر‌هایی با طول موج ۱۰۶۴ نانومتر (nm) 
                    برای پاک کردن خالکوبی‌های آبی تیره یا سیاه استفاده می‌شود، در حالی
                     که لیزر‌هایی با طول موج ۵۳۲ نانومتر می‌توانند رنگ‌های قرمز، آبی آسمانی و سبز را حذف کنند. لیزر
                     کیو سوئیچ با نفوذ به داخل پوست و سپس حرارت دادن جوهر تتو و در نهایت خرد کردن آن، خالکوبی‌ها
                     را پاک می‌کند. سپس جوهر از طریق سیستم لنفاوی از بدن خارج می‌شود. در صورت استفاده صحیح، لیزر‌های Q-switch 
                     جوهر خالکوبی را بدون آسیب رساندن یا زخمی شدن پوست اطراف تجزیه می‌کنند. تجربه‌ها نشان می‌دهند
                      که مهم‌ترین پیشرفت‌ها در خالکوبی‌هایی که حداقل ۱۰ سال قبل انجام شده بودند مشاهده شده است.`,
                    title: 'از بین بردن تتو و خالکوبی'
                },
                {
                  content: `
              ضایعات عروقی که معمولاً به آن‌ها ورید‌های عنکبوتی نیز گفته می‌شود، یکی دیگر از لک‌های رایج پوستی
              هستند که با لیزر‌های کیوسوئیچ قابل درمان هستند. ضایعات عروقی نتیجه عروق متعدد یا بزرگی هستند که مستقیماً
              در زیر پوست ظاهر می‌شوند. آن‌ها معمولاً قرمز یا بنفش هستند و در تمام اشکال و اندازه‌ها در تمام قسمت‌های بدن 
              (بیشتر روی صورت و پاها) شکل می‌گیرند. اگرچه ضایعات عروقی بی‌ضرر هستند، بسیاری از بیماران به دلایل زیبایی 
              خواهان برداشتن آن‌ها هستند. لیزر‌های کیوسوئیچ از انرژی نوری برای فروپاشی سیاهرگ‌ها و مویرگ‌ها استفاده می‌کنند و در عین
              حال به بافت پوست اطراف آسیبی نمی‌زنند. تنها چند نوبت درمان لازم است تا رگ شکسته شود و پوست شفاف ظاهر شود.`,
                  title: 'بهبود ضایعات عروقی'
                },
                {
                    content: `زمانی که پالس لیزر کیوسوییچ به پوست تابانده می‌شود،
                     لایه شاخی پوست، دیواره‌های منافذ بدون آنکه ساختارهای اطراف آسیب ببینند، تحت تاثیر قرار می‌گیرند.
                     در نتیجه لیزر با تحریک کلاژن سازی باعث از بین رفتن منافذ، سفت شدن پوست و شادابی عمومی‌پوست
                     می‌شود. در حقیقت این لیزر عمل خود را از طریق تحریک تشکیل کلاژن در درم رتیکولار 
                    یا درم پاپیلاری سطحی انجام می‌دهد. تشکیل کلاژن در این نواحی می‌تواند منافذ را کوچک کند.`,
                    title: 'درمان منافذ باز پوست'
                },
                {
                    content: ``,
                    title: 'درمان کک مک'
                },
                {
                    content: ``,
                    title: 'درمان لک‌های حاملگی یا ملاسما'
                },
                {
                    content: ``,
                    title: 'رفع هایپرپیگمنتیشن یا تیرگی پوست'
                }
                ],
            prosTitle: 'اثرات و فواید لیزر کیوسوئیچ'
        }}/>
    
    </>
  )
}

export default QSwitch