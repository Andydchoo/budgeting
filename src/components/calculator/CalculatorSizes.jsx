//To-do
  // Resolved: Fixing the useStates to update instantly

  // Resolved: an animated pie chart graph to visually show budget
    //-Event handler and data dont like eachother. Income+expenses dont display properly on piechart
    //Datatype for value of eventHandlers isnt same as wants+savings

  // Style the chart
    // Add different colors for each slice in piechart
    // Add title
    // Label the chart and its values
    // Make it larger

  // Build mobile variant
  // 
import React, { useState, useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Button, Grid, Card, CardActions, CardContent, Typography, InputAdornment, OutlinedInput, InputLabel, TextField} from '@mui/material';
import { AccountBoxIcon, CodeIcon, DescriptionIcon, LinkedInIcon, GitHubIcon, MenuIcon, MailIcon } from '@mui/icons-material';
import { PieChart, Pie, Legend, Tooltip, } from "recharts";

// Desktop variant of calculator component
export function CalculatorDesktop() {
    const [savings, setSavings] = useState(0)
    const [expenses, setExpenses] = useState(0)
    const [wants, setWants] = useState(0)
    const [income, setIncome] = useState(0)
    const [counter, setCounter] = useState(0)
    const [income01, setIncome01] = useState(0)
    const [expenses01, setExpenses01] = useState(0)

    //Issue with the event handler and the data. Income and expenses wont properly update on piechart
    const data =[
      {name: "income", value: income01},
      {name: "savings", value: savings},
      {name: "expenses", value: expenses01},
      {name: "wants", value: wants},
    ]
    //Event handler for income inputbox
    const handleIncome = event => {
      setIncome(event.target.value);
      console.log('income: ', event.target.value);
    };
    //Event handler for expenses inputbox
    const handleExpenses = event => {
      setExpenses(event.target.value);
      console.log('expense: ', event.target.value);
    };

    //Forcing the state to update
    useEffect(() =>{
        calculateBudget()
      }, [counter] )

    function calculateBudget() {
      setCounter( prevCounter => income-expenses )
      //Using seperate objects to avoid live updating of piechart
      //when typing into textboxes after generation

      //Turning the new objects into new datatypes to work with piechart
      setExpenses01(prevExpenses01 => (expenses) - 0 )
      setIncome01(prevIncome01 => (income) - 0 )

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
          padding={15}
          spacing={5}
          sx={{ 
            backgroundColor: '#14365D', 
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
                  What are your monthly expenses?
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

          <Grid item >
          <Card sx={{ backgroundColor: '#DEF2F0' }}>
            <CardContent >
              <PieChart width={400} height={400}>
                <Pie
                  dataKey="value"
                  isAnimationActive={false}
                  data={data}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#3A8E88"
                  label
                />
                <Tooltip />
              </PieChart>
            </CardContent>
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