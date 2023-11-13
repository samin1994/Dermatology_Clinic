import React from 'react'
import {Container, Card, Box, Typography, List, ListItem, ListItemIcon, ListItemText} from '@mui/material'
import Image from 'next/image'
import styles from './page.module.css'
import { sharedMetadata } from '@/utils'
import DoneIcon from '@mui/icons-material/Done';

export const metadata = {
  ...sharedMetadata,
  title: 'میکرودرم',
}


 const m =  [
    {
         content: `تمیز کردن و پاکسازی پوست
        پس از درمان، پوست به طور ناباورانه ای تمیز به نظر می رسد زیرا
        پروسه تراشیدن با کریستال ها یا سرهای الماسی تمام
        اضافات پوست (شامل: سلول های مرده، چربی اضافه
            و آلودگی ها) را از سطح آن تراشیده و پاک می کند.
        پوست تمیز برای چشمگیری از ایجاد ناصافی ها و 
        ضایعات ساختاری پوست لازم است. تمیز کردن پوست یکی از
        اجزای برنامه های مراقبت های پوستی می باشد.`,
        title: 'تمیز کردن و پاکسازی پوست'
    },
    {
        content: `یکی از اثرات مفید میکرودرم ابریژن، تحریک فعالیت بازسازی طبیعی پوست بدن می باشد.
         با تحریک افزایش جریان خون به پوست، میکرودرم
         ابریژن سبب تسریع در تولید سلول های جدید پوست می شود
         و سرعت حرکت آنها را به سمت پوست افزایش می دهد
        . بنابراین پوست جوان و باطرا وت به نظر می رسد .کلاژن
         به پوست قوام و انعطاف پذیری می دهد، اما، با 
        افزایش سن کاهش میزان آن سبب چین و چروک و افتادگی پوست می شود.)`,
        title: 'تسریع در بازسازی پوست'
    },
    {
        content: `میکروم بخصوص به رفع و بسته شدن منافذ پوستی کمک میکند.`,
        title: 'رفع منافذ پوست'
    },
    {
        title: 'کمک به درمان لک و ملاسما ولکه های افتابی',
        content: 'با لایه برداری از لکه ها امکان نفوذ داروهای ضد لک به ناحیه لک بیشتر می‌شود در عین حال اثر نفوذ لیزرهای ضد لک نیز بیشتر می‌شود. '
    }
    
    ]

const Microderm = () => {
  return (
    <Container>
        <Card className={styles.imageCard}>
            <Box className={styles.imgContainer}>
                <Image src='/services/other/microderm-intro.jpg' style={{borderRadius:'10px'}} fill={true}/>
            </Box>
            <Box>
                <Typography variant='h5' className={styles.introTitle}>میکرودرم ابریژن</Typography>
                <Typography variant='body1' className={styles.text}>
                    میکرودرم ابریژن به معنای برداشتن قسمتی از پوست (درم) به وسیله ی تکه های بسیار
                     ریز (میکرو) تراش دهنده (ابریژن) می باشد. این روش همانند پرداخت کردن 
                    یک چوب بوسیله یک کاغذ سمباده ظریف می باشد تا سطح آن صاف و صیقلی شود.
                    در این روش، پزشک می‌کوشد با سایش فیزیکی (یا با مواد شیمیایی)
                    ، لایه‌های سطحی و حتی بخشی از لایه‌های میانیِ اپیدرم را که 
                    اغلب ناهموار و حاوی سلول‌های فرسوده و مرده‌است، بردارد تا پوست جدیدی که 
                    جوان‌تر و مسطح‌تر است جایگزین آن‌ها شود. معمولاً از برس یا پودرهای ساینده
                     مانند اکسید آلومینیوم استفاده می‌شود. قبل از لایه برداری گاه از بی‌حسی
                     موضعی استفاده می‌شود و پس از آن به بیمار توصیه می‌شود تا چند روز 
                    از مواجهه با نور خورشید اجتناب نموده و از پمادهای ترمیم‌کننده استفاده کند.
                </Typography>
            </Box>
        </Card>
        <Card className={styles.textCard}>
            <Typography variant='h5' className={styles.introTitle}>
                اثرات و فواید میکرودرم ابریژن
            </Typography>
            {m.map((value) => {
                return (
                    <Box>
                        <Box display='flex'>
                            <DoneIcon color='primary' sx={{ml: 1, mt: 0.5}}/>
                            <Typography variant='h6' mb={1} color='#852b7d'>
                                {value.title}
                            </Typography>
                        </Box>
                        <Typography mb={2} pr={2}>{value.content}</Typography>
                    </Box>
                )
            })}
        </Card>
    </Container>
  )
}

export default Microderm