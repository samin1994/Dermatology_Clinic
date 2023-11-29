'use client'

import {TextField, Box, Card, Typography, 
  TextareaAutosize, Button} from '@mui/material'
import styles from './page.module.css'
import React, { use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { sharedMetadata } from '@/utils'
import {useState} from 'react'

// export const metadata = {
//   ...sharedMetadata,
//   title: 'تماس با ما',
// }

function createData(name, value) {
  return { name, value };
}

const rows = [
  createData('شنبه', '13 تا 18'),
  createData('دوشنبه تا چهارشنبه', '9 تا 13'),
];

const ContactUs = () => {

  const [inputValues, setInputValues] = useState({
    name: '',
    email: '',
    phone: '',
    message: '', 
    submitted: false
  })

  const onInputChange = (event) => {
    setInputValues({
      ...inputValues,
      [event.target.id]: event.target.value
    })
  }

  console.log(inputValues)
  return (
    <>
    <Box width='100vw' height='230px' position='relative'>
      <Image src='/contact-us.png' alt='contact-us' fill={true}/>
      
    </Box>
    <Box>
      <Card className={styles.contactUsCard}>
        <Typography variant='h5' color='primary.main'>تماس با ما</Typography>
        <Box className={styles.mainSection}>
          <Box className={styles.rightSection}>
            <Typography mb={5} variant='h6'>راه های ارتباطی</Typography>
            <Box mr={1} className={styles.contactInfos}>
              <Box mb={1.5} display='flex' alignItems='start'>
                <Image src='/contact-us/location.png' width={30} height={30} style={{marginLeft: '10px'}}/>
                <Typography>
                      تهران، خیابان پاسداران، بالاتر از گل نبی، بین
                      دشتستان <Typography variant='number'>7</Typography> و <Typography variant='number'>8</Typography>، ساختمان سینا، پلاک <Typography variant='number'>104</Typography>، طبقه
                        <Typography variant='number'>3</Typography>، واحد <Typography variant='number'>21</Typography>
                </Typography>
              </Box>
              <Box display='flex' alignItems='center' mb={1.5}>
                <Image src='/contact-us/phone-call.png' width={30} height={30} style={{marginLeft: '10px'}}/>
                <Link className={styles.link} href='tel:982122883028'>
                  <Typography variant='number'>02122883028</Typography>
                </Link>
                <span>&nbsp; - &nbsp;</span>
                <Link className={styles.link} href='tel:982122882903'>
                  <Typography variant='number'>02122882903</Typography>
                </Link>
              </Box>
              <Box display='flex' alignItems='center'>
                <Image src='/contact-us/instagram.png' width={30} height={30} style={{marginLeft: '10px'}}/>
                <Link className={styles.link} href='https://www.instagram.com/dr.neginsafdarian/'>www.instagram.com/dr.neginsafdarian</Link>
              </Box>
            </Box>
            <Typography variant='h6' mt={4} mb={3}>ساعات کاری</Typography>
            
            <Box className={styles.workingHours} >
                {rows.map((row) => (
                  <Box
                    key={row.name}
                    display='flex'
                    justifyContent='space-between'
                    className={styles.tableRow}
                  >
                    <Typography>
                      {row.name}
                    </Typography>
                    <Typography variant='number' align="right">{row.value}</Typography>
                  </Box>
                ))}
            </Box>
          
          </Box>
          <Box className={styles.leftSection}>
            <Typography mb={2} variant='h6'>فرم تماس</Typography>
            <Typography fontWeight='600'>
              در صورت داشتن سوال درباره خدمات کلینیک 
              دکتر نگین صفدریان می توانید از طریق فرم زیر با ما در ارتباط باشید
            </Typography>
            <form className={styles.form}>
              <TextField className={styles.input} onChange={(e) => onInputChange(e)} id="name" label="نام و نام خانوادگی" variant="outlined" />
              <TextField className={styles.input} onChange={(e) => onInputChange(e)} id="email" label="پست الکترونیکی" variant="outlined" type='email' />
              <TextField className={styles.input} onChange={(e) => onInputChange(e)} id="phone" label="شماره تماس" variant="outlined" type='number'/>
              <TextareaAutosize className={styles.textArea} onChange={(e) => onInputChange(e)} aria-label="message" minRows={5} placeholder="چگونه می توانیم به شما کمک کنیم؟" />
              <Button type='submit' variant='contained' color='primary' className={styles.sendButton}>
                <Typography fontWeight='600' fontSize='18px'>ارسال  پیام</Typography>
              </Button>
            </form>
          </Box>
        </Box>
      </Card>
      <div style={{width: '100%', height: '300px'}} suppressHydrationWarning>
        <iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Pasdaran%20Ave,%20Dr%20Safdarian+(Dr%20Safdarian%20Clinic)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
        </iframe>
      </div>
    </Box>
    </>
  )
}

export default ContactUs