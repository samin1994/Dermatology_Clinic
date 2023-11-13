'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "@/components/Layout/Navbar/Navbar"
import Footer from '@/components/Layout/Footer/Footer'
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme'


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} dir='rtl' 
      style={{minHeight:'100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: 'white', paddingTop: '90px'}}>
        <ThemeProvider theme={theme}>
            <Navbar />
            {children}
            <Footer />
          
        </ThemeProvider>
      </body>
    </html>
  )
}
