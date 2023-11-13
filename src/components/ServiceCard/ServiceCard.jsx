import React from 'react'
import styles from './page.module.css'
import { Box, Typography, Card, CardMedia} from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

const ServiceCard = ({image, url, icons, text}) => {
  return (
    <Link href={url} style={{textDecoration: 'none'}}>
    <Card className={styles.container}>
        <Box className={styles.titleContainer}>
          <Image src={icons[0]} width={40} height={40} alt={text} className={styles.icon}/>
          <Image src={icons[1]} width={40} height={40} alt={text} className={styles.whiteIcon}/> {/*white icon */}
          <Typography className={styles.serviceTitle}
          variant='h5' color='text.secondary'>
            {text}
          </Typography>
        </Box>
        <CardMedia className={styles.imgContainer}>
            <Image src={image} fill={true} style={{objectFit: 'cover'}} />
        </CardMedia>
    </Card>
    </Link>
  )
}

export default ServiceCard