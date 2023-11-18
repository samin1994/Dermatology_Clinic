import { redirect } from 'next/navigation'

import React from 'react'

const Facilities = () => {
  redirect('/comingSoon')
}

export default Facilities


// import React from 'react'
// import Image from 'next/image'
// import { Box, Container } from '@mui/material'
// import styles from './page.module.css'

// const Facilities = () => {
//   return (
//     <>
//     <Box className={styles.coverImg}>
//       <Image src='/facilities.png' alt='cover' fill='true' style={{objectFit: 'cover'}}/>
//     </Box>
//     </>
//   )
// }

// export default Facilities