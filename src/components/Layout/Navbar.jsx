'use client'

import * as React from 'react';
import { Typography, Box, AppBar, Menu, MenuItem, Toolbar, Container,
IconButton, Button } from '@mui/material'
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link'
import {menu} from '@/Constants'

export default function Navbar() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{direction:'ltr'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', flexDirection: 'row'}}>
          <Link href={'/'} passHref legacyBehavior>
              <Box sx={{ cursor: 'pointer', display: { xs: 'none', md: 'flex' }, alignItems:'center', direction: 'ltr' }}>
                <Image
                src='/neg_vector.png'
                alt="Dr Negin Safdarian"
                width={70}
                height={70}
              />
              <Typography ml={0.5} color='text.primary'>Dr. </Typography>
              <Typography ml={0.5} color='secondary.main'>Negin</Typography>
              <Typography ml={0.5} color='text.primary'>Safdarian</Typography>
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
              {menu.map((menu) => (
                <MenuItem key={menu} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{menu}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ cursor: 'pointer', display: { xs: 'flex', md: 'none', direction: 'ltr' }}} >
            <Typography color='text.primary'>Dr. </Typography>
            <Typography color='secondary.main'>Negin</Typography>
            <Typography color='text.primary'>Safdarian</Typography>
            <Image
              src='/neg_vector.png'
              alt="Dr Negin Safdarian"
              width={70}
              height={70}
            />
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent:'right', mr: '40px', flexDirection: 'row-reverse' }}>

            {menu.map((menu) => (
              <Button
                key={menu}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Typography ml={3} color='text.primary'>{menu}</Typography>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>  
  )
}
