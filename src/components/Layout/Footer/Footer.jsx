import styles from './footer.module.css'
import React from 'react'
import { Typography, Box, Divider } from '@mui/material'
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
// import InstagramIcon from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import { menu } from '@/Constants'

const Footer = () => {
    return (
        <Box className={styles.container}>
            <Box className={styles.upperPart}> {/* upper part of footer*/}
                <Box className={styles.rightSection}>
                    <Box display='flex' alignItems='center'>
                        {/* <LocationOnIcon sx={{ml:'7px'}}/> */}
                        <Image src='./contact-us/location.png' width={20} height={20} style={{ marginLeft: '7px' }} />
                        <Typography variant='h6'>آدرس</Typography>

                    </Box>
                    <Typography className={styles.address}>
                        تهران، خیابان پاسداران، بالاتر از گل نبی، بین
                        دشتستان <Typography variant='number'>7</Typography> و <Typography variant='number'>8</Typography>، ساختمان سینا، پلاک <Typography variant='number'>104</Typography>، طبقه
                        <Typography variant='number'>3</Typography>، واحد <Typography variant='number'>21</Typography></Typography>
                    <Box mt={2} display='flex' alignItems='center' className={styles.phone}>
                        <Box display='flex'>
                            {/* <PhoneInTalkIcon className={styles.phoneIcon} sx={{ml:'7px', mt: '3px'}}/> */}
                            <Image src='./contact-us/phone-call.png' width={20} height={20} style={{ marginLeft: '7px', marginTop: '6px' }} />
                            <Typography variant='h6'>تلفن</Typography>
                        </Box>
                        <Typography mr={1} mt={0.5} variant='number'>22883028 - 22882903</Typography>
                    </Box>
                </Box>
                <Box className={styles.leftSection}>
                    <Box display='flex' alignItems='center'>
                        <Typography variant='h5' ml={1}>کلینیک دکتر نگین صفدریان</Typography>
                        <Image src='./neg_vector.png' width={75} height={95} alt='logo' />
                    </Box>
                    <Typography className={[styles.description]}>کلینیک دکتر نگین صفدریان با مجموعه ای کامل
                        از برترین تجهیزات و تکنولوژی روز دنیا و با متخصصین مجرب و کارآمد
                        و پرسنل دوره دیده در کلیه خدمات زیبایی و پوست و مو، تجربیات موفقییت آمیزی
                        در کارنامه فعالیت خود ثبت کرده است. در طی فعالیت چندین ساله خود، به دنبال بهترین
                        و برترین تکنیک های موجود بوده که مورد تایید وزارت بهداشت ایران و اتحادیه اروپا می باشند.</Typography>
                </Box>
            </Box>
            <Box className={styles.lowerSection}>
                <Box sx={{ display: 'flex', justifyContent: 'right' }}>
                    {menu.map((menu) => (
                        <Link href={`${menu.link}`} className={styles.link} key={menu.name}>
                            <Typography variant='body2' className={styles.menuItem} ml={3}>{menu.name}</Typography>
                        </Link>
                    ))}
                </Box>
                <Box>
                    {/* <Link href='tel:982122883028' className={styles.socialIcon}>
                    <WhatsAppIcon />
                </Link> */}
                    <Link target='_blank' href='https://www.instagram.com/dr.neginsafdarian/' className={styles.socialIcon}>
                        <Image src='./contact-us/instagram.png' width={30} height={30} style={{ marginLeft: '10px' }} />
                        {/* <InstagramIcon /> */}
                    </Link>
                </Box>
            </Box>
            <Divider sx={{ mt: '10px', mb: '10px' }} />
            <Box display='flex' alignItems='center' flexDirection='column'>
                <Typography variant='caption' fontWeight='600'>
                    © تمامی حقوق برای کلینیک دکتر نگین صفدریان محفوظ می باشد.
                </Typography>
                <Typography variant='caption'>
                    طراحی و بهینه سازی : <strong>ثمین لباف</strong>
                </Typography>
            </Box>
        </Box>
    )
}

export default Footer