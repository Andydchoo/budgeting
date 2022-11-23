import * as React from 'react';
import { Button, Grid, Card, CardActions, CardContent, Container, AppBar, Box, Toolbar, Typography, IconButton, Menu, MenuItem} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import TextField from '@mui/material/TextField';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CodeIcon from '@mui/icons-material/Code';
import DescriptionIcon from '@mui/icons-material/Description';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';

// Desktop variant of calculator component
export function CalculatorDesktop() {
  
    return(
        <Container 
          sx={{ 
            backgroundColor: '#14365D', 
            height: '100vh', 
            color: '#DEF2F0',
          }}
        >
          <Typography variant="h4" sx={{ display: 'flex', justifyContent: 'center', color: '#DEF2F0' }}>
            Calculator
          </Typography>
          {/* Card containing input fields for calculator */}
          <Card sx={{ minWidth: 275, maxWidth: 1000, backgroundColor: '#DEF2F0' }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h5" color="black" gutterBottom>
                What is your monthly income?
              </Typography>
                <TextField id="standard-basic" label="ex. $5000" variant="standard" sx={{ maxWidth: '200px' }} />
              <Typography variant="h5" color="black" gutterBottom>
                How much are your monthly expenses?
              </Typography>
                <TextField id="standard-basic" label="ex. $1000" variant="standard" sx={{ maxWidth: '200px' }} />
            </CardContent>
            <CardActions>
              <Button size="large">Calculate</Button>
            </CardActions>
          </Card>
        </Container>
    )
}

// Mobile variant of calculator component
export function CalculatorMobile() {
    return(
        <div>
            Goodbye
        </div>
    )
}