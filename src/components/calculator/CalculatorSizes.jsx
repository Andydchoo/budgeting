//To-do
  //Fixing the useStates to update instantly
  //Add an animated pie chart graph to visually show budget
import React, { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Button, Grid, Card, CardActions, CardContent, Typography, InputAdornment, OutlinedInput, InputLabel, TextField} from '@mui/material';
import { AccountBoxIcon, CodeIcon, DescriptionIcon, LinkedInIcon, GitHubIcon, MenuIcon, MailIcon } from '@mui/icons-material';

// Desktop variant of calculator component
export function CalculatorDesktop() {
    const [savings, setSavings] = useState(0)
    const [expenses, setExpenses] = useState(0)
    const [wants, setWants] = useState(0)
    const [income, setIncome] = useState(0)
    const [counter, setCounter] = useState(0)

    const handleIncome = event => {
      setIncome(event.target.value);
      console.log('income: ', event.target.value);
    };

    const handleExpenses = event => {
      setExpenses(event.target.value);
      console.log('expense: ', event.target.value);
    };

    function calculateBudget() {
      setCounter(income-expenses)

      if ((counter) >= expenses) {
        console.log("rich");
        setWants(prevWants => (counter) / 100 * 60);
        setSavings(prevSavings => (counter) / 100 * 40);
        console.log(wants);
        console.log(savings);
      } else {
        console.log('poor');
        setWants(prevWants => (counter) / 100 * 60);
        setSavings(prevSavings => (counter) / 100 * 40);
        console.log(wants);
        console.log(savings);
      }
    }
  
    return(
        <Grid 
          container
          direction="column"
          alignItems="center"
          padding={10}
          spacing={5}
          sx={{ 
            backgroundColor: '#14365D', 
            height: '100vh', 
            color: '#DEF2F0',
          }}
        >

          <Grid item >
            <Typography variant="h4" sx={{ display: 'flex', justifyContent: 'center', color: '#DEF2F0' }}>
              Calculator
            </Typography>
          </Grid>

          {/* Card containing input fields for calculator */}
          <Grid item>
            <Card sx={{ minWidth: 600, maxWidth: 1000, backgroundColor: '#DEF2F0' }}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                {/* <Typography variant="h5" color="black" gutterBottom>
                  How much do you make a month?
                </Typography> */}
                <Typography variant="h4">
                  How much do you make in a month?
                </Typography>
                <InputLabel htmlFor="outlined-adornment-amount">Monthly income:</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  startAdornment={<InputAdornment position="start">$</InputAdornment>}
                  label="Amount"
                  placeholder="ex. $3000"
                  value={income}
                  onChange={handleIncome}
                />
                <Typography variant="h4">
                  How much are your monthly expenses?
                </Typography>
                <InputLabel htmlFor="outlined-adornment-amount">Monthly expenses:</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  startAdornment={<InputAdornment position="start">$</InputAdornment>}
                  label="Amount"
                  placeholder="ex. bills, food, etc..."
                  value={expenses}
                  onChange={handleExpenses}
                />
              </CardContent>
              <CardActions>
                <Button 
                  variant="outlined" 
                  size="large" 
                  onClick={calculateBudget}
                  sx={{ 
                    color: "#14365D", 
                    borderColor: '#14365D' 
                    }} 
                >Calculate
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
    )
}

// Mobile variant of calculator component
export function CalculatorMobile() {
    return(
        <div>
            Mobile in progress
        </div>
    )
}