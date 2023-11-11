'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "@/components/Layout/Navbar"
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme'


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <div>
            <Navbar />
            {children}
            
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
