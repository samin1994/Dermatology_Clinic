import Image from 'next/image'
import styles from './page.module.css'
import Slider from '@/components/Slider/Slider'
import Link from 'next/link'
import { Box, Divider, Typography, Button, Container} from '@mui/material'
import ServiceCard from '@/components/ServiceCard/ServiceCard'
import { sharedMetadata } from '@/utils'

export const metadata = {
  title: 'کلینیک دکتر نگین صفدریان',
  openGraph: {
    title: 'خانه',
    siteName: 'کلینیک دکتر نگین صفدریان',
    type: 'website',
    description: `در کلینیک دکتر نگین صفدریان متخصص پوست و مو جدیدترین متدهای جوانسازی پوست،
   تزریق ژل لب و بوتاکس و انواع لیزر ارائه می شوند`,
    locale: 'fa_IR',
    url: 'https://neginsafdarian.com',
    images: [
      {
        url: '/doctor_image.webp',
        width: 400,
        height: 400,
      }
    ]
  }
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Slider />
      {/* main content Box*/}
      <Container className={styles.container} maxWidth='xl'>

        {/* bio part */}
        <Box className={styles.biography}>
          <Box className={styles.imgContainer}><Image style={styles.img} src='/doctor_image.webp' fill={true}/></Box>
          <Box sx={{direction: 'rtl'}}>
            <Typography variant='h3' color='text.secondary' className={styles.bioTitle}>دکتر نگین صفدریان</Typography>  
            <Divider />
            <p className={styles.bioText}>دکتر نگین صفدریان در سال <span>1371</span> از دانشکده پزشکی دانشگاه تهران با معدل عالی فارغ التحصیل شدند، و مجددا در سال <span>1373</span> دوره ی تخصصی پوست و مو را شروع، و در سال <span>1377</span> از دانشگاه تهران فارغ التحصیل شدند. ایشان رتبه سوم در بورد تخصصی در کل کشور بوده و &nbsp;...</p>
            <Link href='/aboutUs' style={{textDecoration: 'none'}}><Typography color='disabled'>مطالعه بیشتر</Typography></Link>
          </Box>
        </Box>

        {/* services part */}
        <Box container direction='row' className={styles.grid}>
          <ServiceCard className={styles.gridItem} text='تزریقات' image='/injection.jpg' url='#' icons={['/injection.png', '/injection-white.png']}/>
          <ServiceCard className={styles.gridItem} text='لیفت با نخ' image='/lift.jpg' url='#' icons={['/lift-icon.png', '/lift-icon-white.png']}/>
          <Box className={`${styles.gridItem} ${styles.lastGridItem}`} >
            <ServiceCard text='لیزرها' image='/laser.jpg' url='/services/lasers' icons={['laser 1.svg', '/laser-icon-white.svg']}/>
          </Box>
        </Box>
        <Box className={styles.lastItem}>
          <ServiceCard text='لیزرها' image='/laser.jpg' url='/services/lasers' icons={['laser 1.svg', '/laser-icon-white.svg']}/>
        </Box>
        <Box display='flex' justifyContent='center' mb={10}>
          <Link href='/services'>
            <Button variant='contained' color='primary' className={styles.moreButton}>
              مشاهده تمام خدمات
            </Button>
          </Link>
        </Box>
      </Container>
    </main>
  )
}
