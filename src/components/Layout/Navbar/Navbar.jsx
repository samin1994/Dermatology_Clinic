'use client'

import * as React from 'react';
import { Typography, Box, AppBar, Menu, MenuItem, Toolbar, Container,
IconButton, Button } from '@mui/material'
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link'
import {menu} from '@/Constants'
import styles from './navbar.module.css'

export default function Navbar() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position='fixed' color='background' sx={{direction:'ltr', zIndex: 3, top: 0, borderRadius: 0}}>
      <Box maxWidth="xl">
        <Toolbar disableGutters className={styles.container}>
          <Link href={'/'} passHref legacyBehavior>
              <Box sx={{ cursor: 'pointer', display: { xs: 'none', md: 'flex' }, alignItems:'center', direction: 'ltr' }}>
                <Image
                src='/neg_vector.png'
                alt="Dr Negin Safdarian"
                width={70}
                height={70}
              />
              <Typography ml={0.5} color='text.secondary'>Dr. </Typography>
              <Typography ml={0.5} color='secondary.main'>Negin</Typography>
              <Typography ml={0.5} color='text.secondary'>Safdarian</Typography>
            </Box>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', justifyContent: 'right' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            > 
            {/* dropdown menu that is opened when size is mobile */}
              {menu.map((menu) => { 
                return (
                  <Link href={`${menu.link}`} key={menu.name} className={styles.link}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography color='text.secondary' textAlign="center">{menu.name}</Typography>
                  </MenuItem>
                </Link>
                )
              })}
            </Menu>
          </Box>
          {/* logo that is shown in mobile size */}
          <Link href='/' className={styles.link}>
            <Box sx={{ cursor: 'pointer', flexDirection: 'row-reverse', display: { xs: 'flex', md: 'none', direction: 'ltr' }, alignItems: 'center'}} >
              <Box display='flex'>
                <Typography ml={0.5} color='text.secondary'>Dr. </Typography>
                <Typography ml={0.5} color='secondary.main'>Negin</Typography>
                <Typography ml={0.5} color='text.secondary'>Safdarian</Typography>
              </Box>
              <Image
                src='/neg_vector.png'
                alt="Dr Negin Safdarian"
                width={70}
                height={70}
              />
            </Box>
          </Link>
          <Box className={styles.menu} sx={{display: { xs: 'none', md: 'flex' }}}>

            {menu.map((menu) => (
              <Link
                href={`${menu.link}`}
                key={menu.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                className={styles.link}
              >
                <Typography ml={3} color='text.secondary' className={styles.menuItem}>{menu.name}</Typography>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Box>
    </AppBar>  
  )
}
