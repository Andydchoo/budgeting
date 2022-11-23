import * as React from 'react';
import { Button, Grid, Container, AppBar, Box, Toolbar, Typography, IconButton, Menu, MenuItem} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CodeIcon from '@mui/icons-material/Code';
import DescriptionIcon from '@mui/icons-material/Description';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import SavingsIcon from '@mui/icons-material/Savings';

export function NavbarDesktop() {
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
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
              <Box>
                <Button color="inherit" sx={{ padding: '20px' }}>
                  <Typography variant="h6">
                    Button1
                  </Typography>
                </Button>
                <Button color="inherit" sx={{ padding: '20px' }}>
                  <Typography variant="h6">
                    Button2
                  </Typography>
                </Button>
                <Button color="inherit" sx={{ padding: '20px' }}>
                  <Typography variant="h6">
                    Button3
                  </Typography>
                </Button>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      );
}

export function NavbarMobile() {
    return(
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar
              style={{
                backgroundColor: '#b6c199',
              }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Budget Calculator
              </Typography>
              <Button color="inherit">
                <GitHubIcon />
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
    )
}