// 'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "@/components/Layout/Navbar/Navbar"
import Footer from '@/components/Layout/Footer/Footer'
import ThemeRegistry from './ThemeRegistry'
import Breadcrumb from '@/components/Breadcrumb/breadcrumb'

export const metadata = {
  title: 'کلینیک دکتر نگین صفدریان',
  description: `در کلینیک دکتر نگین صفدریان متخصص پوست و مو جدیدترین متدهای جوانسازی پوست،
   تزریق ژل لب و بوتاکس و انواع لیزر ارائه می شوند`,
  authors: [{name: 'Samin Labbaf'}],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true, 
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1
    }
  },
  openGraph: {
    siteName: 'کلینیک دکتر نگین صفدریان',
    type: 'website',
    locale: 'fa_IR',
    images: [
      {
        url: '/doctor_image.webp',
        width: 400,
        height: 400,
      }
    ]
  }
}


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body dir='rtl' 
      style={{minHeight:'100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: 'white', paddingTop: '90px'}}>
        <ThemeRegistry options={{ key: 'mui' }}>
            <Navbar />
            
            {/* // <Box width='100vw' height='200px' position='relative'>
            //   <Image src='/services-header.png' fill={true}/>
            // </Box> */}
            
            <Breadcrumb
              homeElement={'خانه'}
              separator={<span> | </span>}
              activeClasses='text-amber-500'
              containerClasses='flex py-5 bg-gradient-to-r from-purple-600 to-blue-600' 
              listClasses='hover:underline mx-2 font-bold'
              capitalizeLinks
            />
            {children}
            <Footer />
          
        </ThemeRegistry>
      </body>
    </html>
  )
}
