import React from 'react'
import styles from './page.module.css'
import { Box } from '@mui/material'
import Image from 'next/image'

const comingSoon = () => {
  return (
    <Box sx={{ position: 'relative', height: '800px', width: '100vw' }}>
      <Image src='./comingSoon.jpg' fill={true} style={{ objectFit: 'cover' }} />
    </Box>
  )
}

export default comingSoon