import * as React from 'react';
import { Button, AppBar, Box, Toolbar, Typography, IconButton} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import SavingsIcon from '@mui/icons-material/Savings';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export function NavbarDesktop() {
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed">
            <Toolbar 
              style={{
                backgroundColor: '#DEF2F0',
                color: '#14365d'
            }}>
              <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ mr: 1 }}
                >
                  <SavingsIcon sx={{ fontSize: '40px', color: '#3A8E88'}}/>
              </IconButton>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 800,
                color: '#3A8E88',
                textDecoration: 'none',
                }}
              >
                Budget Calculator
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      );
}

export function NavbarMobile() {
    return(
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed">
            <Toolbar
              style={{
                backgroundColor: '#DEF2F0',
                color: '#14365d'
              }}>
              <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ mr: 1 }}
              >
                <SavingsIcon sx={{ fontSize: '40px', color: '#3A8E88'}}/>
              </IconButton>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 800,
                color: '#3A8E88',
                textDecoration: 'none',
                }}
              >
                Budget Calculator
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
    )
}