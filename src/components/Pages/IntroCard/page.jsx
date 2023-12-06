import React from 'react'
import styles from './page.module.css'
import {Card, Box, Typography, Container} from '@mui/material'
import Image from 'next/image'
import DoneIcon from '@mui/icons-material/Done';

const IntroCard = ({data}) => {
  return (
    <Container>
    <Card className={styles.imageCard}>
        <Box className={styles.imgContainer}>
            <Image src={data.image} style={{borderRadius:'10px'}} fill={true}/>
        </Box>
        <Box>
            <Typography mb={1.5} variant='h5' className={styles.introTitle}>{data.title}</Typography>
            <Typography variant='body1' className={styles.text}>
                {data.description}
            </Typography>
            {/* {data.descLong ? 
                <Typography mb={2} mt={1} variant='body1' className={styles.text}>
                    {data.descLong}
                </Typography>
                : null
            } */}
        </Box>
    </Card>
    <Card className={styles.textCard}>
        <Typography variant='h5' mb={2.5} className={styles.introTitle}>
            {data.prosTitle}
        </Typography>
        {data.pros.map((value) => {
            return (
                <Box key={data.title}>
                    <Box display='flex'>
                        <DoneIcon color='primary' sx={{ml: 1, mt: 0.5}}/>
                        <Typography variant='h6' mb={1} color='#852b7d'>
                            {value.title}
                        </Typography>
                    </Box>
                    <Typography mb={2} pr={2}>{value.content ? value.content : ''}</Typography>
                </Box>
            )
        })}
    </Card>
    </Container>
  )
}

export default IntroCard