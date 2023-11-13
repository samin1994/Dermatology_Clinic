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
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', flexDirection: 'row'}}>
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

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
              {menu.map((menu) => {
                return (
                  <Link href={`${menu.link}`} key={menu.name}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{menu.name}</Typography>
                  </MenuItem>
                </Link>
                )
              })}
            </Menu>
          </Box>
          <Box sx={{ cursor: 'pointer', display: { xs: 'flex', md: 'none', direction: 'ltr' }}} >
            <Typography color='text.secondary'>Dr. </Typography>
            <Typography color='secondary.main'>Negin</Typography>
            <Typography color='text.secondary'>Safdarian</Typography>
            <Image
              src='/neg_vector.png'
              alt="Dr Negin Safdarian"
              width={70}
              height={70}
            />
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent:'right', mr: '40px', flexDirection: 'row-reverse' }}>

            {menu.map((menu) => (
              <Link
                href={`${menu.link}`}
                key={menu.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                className={styles.link}
              >
                <Typography ml={3} color='text.secondary'>{menu.name}</Typography>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Box>
    </AppBar>  
  )
}
