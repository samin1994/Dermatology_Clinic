'use client'

import React from 'react'
import {Breadcrumbs, Typography} from '@mui/material'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from './breadcrumb.module.css'

const Breadcrumb = ({homeElement, capitalizeLinks}) => {

    const paths = usePathname()
    const pathNames = paths.split('/').filter( path => path )
    
// pathNames[pathNames.length - 1] === ''

   let item = ''
   if (pathNames[0] !== undefined) {
       item = capitalizeLinks ? pathNames[0][0].toUpperCase() + pathNames[0].slice(1, pathNames[0].length) : pathNames[0]
   }
   console.log('item: ', item)
    return (
        <Breadcrumbs separator="›" aria-label="breadcrumb" 
        sx={{mr: '50px', display: item !== 'Services' ? 'none' : 'flex', mt: item === 'Services' ? '220px' : '20px'}}
        >
                <Link className={styles.link} href={'/'}><Typography color='text.secondary'>{homeElement}</Typography></Link>
            {
                pathNames.map( (link, index) => {
                    let href = `/${pathNames.slice(0, index + 1).join('/')}`
                    let itemLink = capitalizeLinks ? link[0].toUpperCase() + link.slice(1, link.length) : link
                    switch (itemLink) {
                        case 'Services':
                            itemLink = 'خدمات'
                            break
                        case 'Other': 
                            itemLink = 'سایر خدمات'
                            break
                        case 'Lasers': 
                            itemLink = 'لیزرها'
                            break
                        case 'Microderm':
                            itemLink = 'میکرودرم'
                            break
                        case 'Mesotherapy':
                            itemLink = 'مزوتراپی'
                            break
                        case 'Carboxy':
                            itemLink = 'کربوکسی'
                            break
                        case 'Tixel': 
                            itemLink = 'تیکسل'
                            break
                        case 'Hifu': 
                            itemLink = 'هایفوتراپی'
                            break
                        case 'Q-Switch':
                            itemLink = 'کیوسوئیچ'
                            break
                        case 'RF-bipolar':
                            itemLink = 'آر اف (RF)'
                            break
                        case 'Alex':
                            itemLink = 'لیزر موی زائد الکس'
                            break
                        case 'Microneedling':
                            itemLink = 'میکرونیدلینگ'
                            break
                    }
                    return (    
                        <Link key={index} className={styles.link} href={href}>
                            <Typography color='text.secondary'>{itemLink}</Typography>
                        </Link>
                    )
                })
            }
        </Breadcrumbs>
    )
}

export default Breadcrumb
