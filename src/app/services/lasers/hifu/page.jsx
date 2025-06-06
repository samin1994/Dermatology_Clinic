import React from 'react'
import { Container, Card, Box, Typography } from '@mui/material'
import Image from 'next/image'
import { sharedMetadata } from '@/utils'
import DoneIcon from '@mui/icons-material/Done';
import IntroCard from '@/components/Pages/IntroCard/page'
import { ProsCard } from '@/components/Pages/IntroCard/page'

export const metadata = {
  title: 'کلینیک دکتر نگین صفدریان | هایفوتراپی',
  description: `هایفو به عنوان یک لیفت صورت غیر تهاجمی عمل می‌کند. این روش پوست 
  را سفت و جمع می‌کند. چین و چروک‌ها و خطوط ریز را صاف می‌کند. منافذ را
   کوچک می‌کند وباعث زاویه‌سازی چانه و رفع پوست شل زیر خط فک می‌شود.`,
  openGraph: {
    title: 'کلینیک دکتر نگین صفدریان | هایفوتراپی',
    siteName: 'کلینیک دکتر نگین صفدریان',
    type: 'article',
    description: `هایفو به عنوان یک لیفت صورت غیر تهاجمی عمل می‌کند. این روش پوست 
  را سفت و جمع می‌کند. چین و چروک‌ها و خطوط ریز را صاف می‌کند. منافذ را
   کوچک می‌کند وباعث زاویه‌سازی چانه و رفع پوست شل زیر خط فک می‌شود.`,
    url: 'https://neginsafdarian.com/services/lasers/hifu',
    images: [
      {
        url: './services/other/HIFU.jpg',
        width: 400,
        height: 400,
        alt: 'هایفوتراپی'
      },
    ]
  }
}

const HIFU = () => {
  return (
    <>
      <Box width='100vw' height='200px' position='absolute'>
        <Image src='./services-header.png' fill={true} />
      </Box>
      <Container>
        <IntroCard data={{
          title: 'هایفوتراپی',
          description: `هایفو به عنوان یک لیفت صورت غیر تهاجمی عمل می‌کند. این روش پوست 
            را سفت و جمع می‌کند. چین و چروک‌ها و خطوط ریز را صاف می‌کند. منافذ را
            کوچک می‌کند وباعث زاویه‌سازی
             چانه و رفع پوست شل زیر خط فک می‌شود. 
             هایفو از انرژی متمرکز فراصوت برای هدف قرار دادن
              لایه های پوست درست زیر سطح پوست استفاده می کند. هایفو لایه‌ای به نام SMAS را بدون هیچ برش جراحی مورد هدف قرار می‌دهد. 
            این لایه SMAS همان ناحیه‌ای است که جراح پلاستیک تحت عمل جراحی می‌کشد و سفت می‌کند و این بدان معناست که شما می‌توانید
             نتایج عالی را بدون خطرات مرتبط با جراحی مانند عفونت،
             زخم، تورم و غیره به دست‌آورید. این نوع درمان سریعتر است و نتایج درمان 
            در بعضی افراد بسته به سطح شلی پوست در همان لحظه مشاهده می‌شود. `
          ,
          image: './services/HIFU-intro.jpg'
          ,

        }} />
        <ProsCard data={{
          pros: [
            {
              content: `
علاوه بر فواید سفت‌کننده پوست، هایفو همچنین تولید کلاژن را تقویت می‌کند که 
می‌تواند باعث ایجاد ظاهری جوان‌تر و درخشان‌تر شود. کلاژن پروتئینی است که به طور طبیعی توسط بدن تولید می‌شود و
 وظیفه کشسانی و استحکام پوست را بر عهده دارد. با افزایش سن، تولید کلاژن کاهش می‌یابد و منجر به ایجاد چین و چروک
 و افتادگی پوست می‌شود. هایفو می‌تواند با تحریک تولید الیاف کلاژن و الاستین جدید به معکوس کردن این فرآیند کمک کند.`,
              title: 'جلوگیری از پیری پوست و جوانسازی'
            },
            {
              content: `غبغب معمولا در اثر تجمع چربی در زیر پوست به وجود می‌آید. 
                    هر چند گاهی اوقات وجود غبغب ممکن است ارثی یا در اثر مشکلات ژنتیکی باشد.
                     اما هایفوتراپی می‌تواند در رفع غبغب بسیار موثر باشد. دستگاه هایفو با
                     ایجاد گرما در ناحیه غبغب، چربی‌های زیر پوست را می‌سوزاند و افتادگی پوست را از بین می‌برد.
                     امواج فراصوت در نهایت می‌توانند با تولید کلاژن پوست این ناحیه را لیفت و سفت کنند.`,
              title: 'رفع غبغب'
            },
            {
              content: '',
              title: 'زاویه‌سازی فک'
            },
            {
              content: '',
              title: 'سفت شدن پوست افتاده در ناحیه گردن'
            }
          ],
          prosTitle: 'اثرات و فواید هایفوتراپی'
        }} />
      </Container>
    </>
  )
}

export default HIFU