import Image from 'next/image'
import styles from './page.module.css'
import Slider from '@/components/Slider/Slider'
import Link from 'next/link'
import { Box, Divider, Typography } from '@mui/material'

export default function Home() {
  return (
    <main className={styles.main}>
      <Slider />
      {/* main content Box*/}
      <Box px='130px'>
        <Box className={styles.biography} flexDirection='row-reverse'>
          <Box className={styles.imgContainer}><Image style={styles.img} src='/doctor_image.webp' fill={true}/></Box>
          <Box sx={{direction: 'rtl'}}>
            <Typography variant='h3' color='text.primary'>دکتر نگین صفدریان</Typography>  
            <Divider />
            <p className={styles.bioText}>دکتر نگین صفدریان در سال <span>1371</span> از دانشکده پزشکی دانشگاه تهران با معدل عالی فارغ التحصیل شدند، و مجددا در سال <span>1373</span> دوره ی تخصصی پوست و مو را شروع، و در سال <span>1377</span> از دانشگاه تهران فارغ التحصیل شدند. ایشان رتبه سوم در بورد تخصصی در کل کشور بوده و &nbsp;...</p>
            <Link href='#' style={{textDecoration: 'none'}}><Typography color='disabled'>مطالعه بیشتر</Typography></Link>
          </Box>
        </Box>
      </Box>
    </main>
  )
}
