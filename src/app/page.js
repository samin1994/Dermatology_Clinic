import Image from 'next/image'
import styles from './page.module.css'
import Slider from '@/components/Slider/Slider'
import Link from 'next/link'
import { Box, Divider, Typography, Button} from '@mui/material'
import ServiceCard from '@/components/ServiceCard/ServiceCard'
import { sharedMetadata } from '@/utils'

export const metadata = {
  ...sharedMetadata,
  title: 'کلینیک دکتر صفدریان',
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Slider />
      {/* main content Box*/}
      <Box px='130px'>

        {/* bio part */}
        <Box className={styles.biography} flexDirection='row'>
          <Box className={styles.imgContainer}><Image style={styles.img} src='/doctor_image.webp' fill={true}/></Box>
          <Box sx={{direction: 'rtl'}}>
            <Typography variant='h3' color='text.secondary'>دکتر نگین صفدریان</Typography>  
            <Divider />
            <p className={styles.bioText}>دکتر نگین صفدریان در سال <span>1371</span> از دانشکده پزشکی دانشگاه تهران با معدل عالی فارغ التحصیل شدند، و مجددا در سال <span>1373</span> دوره ی تخصصی پوست و مو را شروع، و در سال <span>1377</span> از دانشگاه تهران فارغ التحصیل شدند. ایشان رتبه سوم در بورد تخصصی در کل کشور بوده و &nbsp;...</p>
            <Link href='#' style={{textDecoration: 'none'}}><Typography color='disabled'>مطالعه بیشتر</Typography></Link>
          </Box>
        </Box>

        {/* services part */}
        <Box className={styles.services}>
          <ServiceCard text='تزریقات' image='/injection.jpg' url='#' icons={['/injection.png', '/injection-white.png']}/>
          <ServiceCard text='لیفت با نخ' image='/lift.jpg' url='#' icons={['/lift-icon.png', '/lift-icon-white.png']}/>
          <ServiceCard text='لیزرها' image='/laser.jpg' url='#' icons={['laser 1.svg', '/laser-icon-white.svg']}/>
        </Box>
        <Box display='flex' justifyContent='center' mb={10}>
          <Link href='/services'>
            <Button variant='contained' color='primary' className={styles.moreButton}>
              مشاهده تمام خدمات
            </Button>
          </Link>
        </Box>
      </Box>
    </main>
  )
}
