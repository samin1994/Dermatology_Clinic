import React from 'react'
import styles from './page.module.css'
import { Box, Typography, Card, CardMedia} from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

const ServiceCard = ({image, url, icons, text, objectFit}) => {
  return (
    <Link href={url} className={styles.linkContainer}>
    <Card className={styles.container}>
        <Box className={styles.titleContainer}>
          {icons !== '' ? 
          <>
          <Image src={icons[0]} width={40} height={40} alt={text} className={styles.icon}/>
          <Image src={icons[1]} width={40} height={40} alt={text} className={styles.whiteIcon}/> {/*white icon */}
          </>
          :
          null
          }
          <Typography mr={1} className={styles.serviceTitle}
          variant='h5' color='text.secondary'>
            {text}
          </Typography>
        </Box>
        <CardMedia className={styles.imgContainer}>
            <Image src={image} fill={true} style={{objectFit: objectFit ? objectFit : 'cover'}} />
        </CardMedia>
    </Card>
    </Link>
  )
}

export default ServiceCard