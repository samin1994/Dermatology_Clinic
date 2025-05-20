'use client'

import {
  TextField, Box, Card, Typography,
  Snackbar, Button, Alert, AlertTitle, IconButton
} from '@mui/material'
import styles from './page.module.css'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { sharedMetadata } from '@/utils'
import { Formik } from 'formik';
import CloseIcon from '@mui/icons-material/Close';


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

  // on success alert for form
  const [open, setOpen] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);


  const handleClick = () => {
    setOpen(true);
  };

  const handleErrorClick = () => {
    setOpenError(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleErrorClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenError(false);
  };

  const submitHandler = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      //alert(JSON.stringify(values, null, 2));
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        // JSON.stringify(values, null, 2)
        body: JSON.stringify(values, null, 2)
      }).then((res) => {
        console.log('Response Retreived')
        if (res.status === 200) {
          console.log('Response Succeeded!')
          handleClick()
        }
        else handleErrorClick()
      })
      setSubmitting(false);
      resetForm({ values: '' })
    }, 400);

  }

  // console.log(inputValues)
  return (
    <>
      <Box width='100vw' height='230px' position='relative'>
        <Image src='./contact-us.png' alt='contact-us' fill={true} />

      </Box>
      <Box>
        <Card className={styles.contactUsCard}>
          <Typography variant='h5' color='primary.main'>تماس با ما</Typography>
          <Box className={styles.mainSection}>
            <Box className={styles.rightSection}>
              <Typography mb={5} variant='h6'>راه های ارتباطی</Typography>
              <Box mr={1} className={styles.contactInfos}>
                <Box mb={1.5} display='flex' alignItems='start'>
                  <Image src='./contact-us/location.png' width={30} height={30} style={{ marginLeft: '10px' }} />
                  <Typography>
                    تهران، خیابان پاسداران، بالاتر از گل نبی، بین
                    دشتستان <Typography variant='number'>7</Typography> و <Typography variant='number'>8</Typography>، ساختمان سینا، پلاک <Typography variant='number'>104</Typography>، طبقه
                    <Typography variant='number'>3</Typography>، واحد <Typography variant='number'>21</Typography>
                  </Typography>
                </Box>
                <Box display='flex' alignItems='center' mb={1.5}>
                  <Image src='./contact-us/phone-call.png' width={30} height={30} style={{ marginLeft: '10px' }} />
                  <Link className={styles.link} href='tel:982122883028'>
                    <Typography variant='number'>02122883028</Typography>
                  </Link>
                  <span>&nbsp; - &nbsp;</span>
                  <Link className={styles.link} href='tel:982122882903'>
                    <Typography variant='number'>02122882903</Typography>
                  </Link>
                </Box>
                <Box display='flex' alignItems='center'>
                  <Image src='./contact-us/instagram.png' width={30} height={30} style={{ marginLeft: '10px' }} />
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
              <Formik
                initialValues={{ name: '', email: '', phone: '', message: '' }}
                validate={values => {
                  const errors = {};
                  if (!values.name) {
                    errors.name = 'وارد کردن این فیلد الزامی است';
                  }
                  if (!values.phone) {
                    errors.phone = 'وارد کردن این فیلد الزامی است';
                  } else if (
                    !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i.test(values.phone)
                  ) {
                    errors.phone = 'شماره همراه نامعتبر است'
                  }
                  if (!values.message) {
                    errors.message = 'وارد کردن این فیلد الزامی است';
                  }
                  if (!values.email) {
                    errors.email = 'وارد کردن این فیلد الزامی است';
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                  ) {
                    errors.email = 'آدرس ایمیل نامعتبر است';
                  }
                  return errors;
                }}
                onSubmit={submitHandler}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <form className={styles.form} onSubmit={handleSubmit}>
                    <TextField className={styles.input}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      id="name" label="نام و نام خانوادگی" variant="outlined"
                    />
                    <Typography mb={2} color='error'>{errors.name && touched.name && errors.name}</Typography>
                    <TextField className={styles.input}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      id="email" label="پست الکترونیکی" variant="outlined" type='email'
                    />
                    <Typography mb={2} color='error'>{errors.email && touched.email && errors.email}</Typography>
                    <TextField className={styles.input}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                      id="phone" label="شماره تماس" variant="outlined" type='number'
                    />
                    <Typography mb={2} color='error'>{errors.phone && touched.phone && errors.phone}</Typography>
                    <textarea rows={5} className={styles.textArea}
                      id='message'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.message}
                      placeholder="چگونه می توانیم به شما کمک کنیم؟"
                    />
                    <Typography mb={2} color='error'>{errors.message && touched.message && errors.message}</Typography>
                    <Button disabled={isSubmitting} type='submit' variant='contained' color='primary' className={styles.sendButton}>
                      <Typography fontWeight='600' fontSize='18px'>ارسال  پیام</Typography>
                    </Button>
                  </form>
                )}
              </Formik>
            </Box>
          </Box>
        </Card>
        <div style={{ width: '100%', height: '300px' }} suppressHydrationWarning>
          <iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Pasdaran%20Ave,%20Dr%20Safdarian+(Dr%20Safdarian%20Clinic)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
          </iframe>
        </div>
      </Box>
      <Snackbar open={open} onClose={handleClose}>
        <Alert icon={false} severity="success"
          sx={{ direction: 'ltr' }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <AlertTitle><Typography fontWeight='600'>پیام شما با موفقیت ارسال شد</Typography></AlertTitle>
          <Typography> پاسخ را در اسرع وقت به ایمیل شما ارسال خواهیم کرد</Typography>
        </Alert>
      </Snackbar>
      <Snackbar open={openError} onClose={handleErrorClose}>
        <Typography>خطایی پیش آمد!</Typography>
      </Snackbar>
    </>
  )
}

export default ContactUs