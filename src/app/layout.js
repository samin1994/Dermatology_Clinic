// 'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "@/components/Layout/Navbar/Navbar"
import Footer from '@/components/Layout/Footer/Footer'
import ThemeRegistry from './ThemeRegistry'

export const metadata = {
  title: 'کلینیک دکتر نگین صفدریان',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body dir='rtl' 
      style={{minHeight:'100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: 'white', paddingTop: '90px'}}>
        <ThemeRegistry options={{ key: 'mui' }}>
            <Navbar />
            {children}
            <Footer />
          
        </ThemeRegistry>
      </body>
    </html>
  )
}
