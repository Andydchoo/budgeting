//To-do
  // Resolved: Fixing the useStates to update instantly

  // Resolved: an animated pie chart graph to visually show budget
    //Event handler and data dont like eachother. Income+expenses dont display properly on piechart
    //Datatype for value of eventHandlers isnt same as wants+savings

  // Resolved: Style the chart
    // Add different colors for each slice in piechart
    // Add title
    // Label the chart and its values
    // Make it larger

  // Resolved: Build mobile variant

  // Resolved: Edge cases for text inputs
    // Accept only numbers

import React, { useState, useEffect } from 'react';
import { Button, Grid, Card, CardActions, CardContent, Typography, InputAdornment, OutlinedInput, InputLabel } from '@mui/material';
import { PieChart, Pie, Tooltip, } from "recharts";

// Desktop variant of calculator component
export function CalculatorDesktop() {
    const [savings, setSavings] = useState(0)
    const [expenses, setExpenses] = useState(1000)
    const [wants, setWants] = useState(0)
    const [income, setIncome] = useState(5000)
    const [counter, setCounter] = useState(0)
    const [income01, setIncome01] = useState(0)
    const [expenses01, setExpenses01] = useState(0)
    const num = /^[0-9\b]+$/;

    //Issue with the event handler and the data. Income and expenses werent updating on piechart properly
    //Created new objects for expenses+income
    //Setting the datatype to be the same as other objects, which fixed the issue of income and expenses not displaying properly on piechart
    const data =[
      {name: "Savings", value: savings},
      {name: "Expenses", value: expenses01},
      {name: "Wants", value: wants},
    ];

    //Event handler for income inputbox + expenses inputbox
    const handleIncome = event => {
      if (event.target.value === '' || num.test(event.target.value)){
        setIncome(event.target.value);
        console.log('income: ', event.target.value);
      }
    };
    const handleExpenses = event => {
      if (event.target.value === '' || num.test(event.target.value)){
        setExpenses(event.target.value);
        console.log('expense: ', event.target.value);
      }
    };

    let renderLabel = function(entry) {
      return entry.name;
    };

    //Forcing the state to update
    useEffect(() =>{
        calculateBudget()
      }, [counter] );

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
      } else {
        console.log('poor');
        setWants(prevWants => (counter) / 100 * 60);
        setSavings(prevSavings => (counter) / 100 * 40);
      }
    };
  
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
            <Typography variant="h4">
              Calculator
            </Typography>
          </Grid>
          {/* Card containing input fields for calculator */}
          <Grid item>
            <Card sx={{ minWidth: 600, maxWidth: 1000, backgroundColor: '#DEF2F0' }}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h4">
                  Please enter your monthly income:
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
                  Enter your monthly expeses:
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
                  variant="contained" 
                  size="large" 
                  onClick={calculateBudget}
                  sx={{ 
                    color: "white",  
                    backgroundColor: '#3A8E88',
                    margin: 'auto'
                    }} 
                >
                  <Typography variant="h6">
                    Calculate
                  </Typography>
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item >
          <Card sx={{ minWidth: 600, maxWidth: 1000, backgroundColor: '#DEF2F0' }}>
            <CardContent sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
              <Typography variant="h4" padding="10px">
                Budget Chart:
              </Typography>
              <Typography variant="h6">
                (Hover each segment for numbers)
              </Typography>
              <PieChart width={500} height={500}>
                <Pie
                  dataKey="value"
                  isAnimationActive={false}
                  data={data}
                  cx="50%"
                  cy="50%"
                  outerRadius={150}
                  fill="#3A8E88"
                  label={renderLabel}
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
    const [savings, setSavings] = useState(0)
    const [expenses, setExpenses] = useState(1000)
    const [wants, setWants] = useState(0)
    const [income, setIncome] = useState(5000)
    const [counter, setCounter] = useState(0)
    const [income01, setIncome01] = useState(0)
    const [expenses01, setExpenses01] = useState(0)
    const num = /^[0-9\b]+$/;

    const data =[
      {name: "Savings", value: savings},
      {name: "Expenses", value: expenses01},
      {name: "Wants", value: wants},
    ];

    const handleIncome = event => {
      if (event.target.value === '' || num.test(event.target.value)){
        setIncome(event.target.value);
        console.log('income: ', event.target.value);
      }
    };
    const handleExpenses = event => {
      if (event.target.value === '' || num.test(event.target.value)){
        setExpenses(event.target.value);
        console.log('expense: ', event.target.value);
      }
    };

    let renderLabel = function(entry) {
      return entry.name;
    };

    useEffect(() =>{
        calculateBudget()
      }, [counter] );

    function calculateBudget() {
      setCounter( prevCounter => income-expenses )

      setExpenses01(prevExpenses01 => (expenses) - 0 )
      setIncome01(prevIncome01 => (income) - 0 )

      if ((counter) >= expenses) {
        console.log("rich");
        setWants(prevWants => (counter) / 100 * 60);
        setSavings(prevSavings => (counter) / 100 * 40);
      } else {
        console.log('poor');
        setWants(prevWants => (counter) / 100 * 60);
        setSavings(prevSavings => (counter) / 100 * 40);
      }
    };
  
    return(
        <Grid 
          container
          display="block"
          direction="column"
          alignItems="center"
          padding={3}
          spacing={3}
          sx={{ 
            backgroundColor: '#14365D', 
            color: '#DEF2F0',
          }}
        >

          <Grid item >
            <Typography variant="h4" sx={{ display: 'flex', justifyContent: 'center', paddingTop: '15%'}}>
              Calculator
            </Typography>
          </Grid>
          <Grid item>
            <Card sx={{ minWidth: '300', maxWidth: '700', backgroundColor: '#DEF2F0' }}>
              <CardContent sx={{ display: 'block', flexDirection: 'column' }}>
                <Typography variant="h4">
                  Enter monthly income:
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
                  Enter monthly expenses:
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
                  variant="contained" 
                  size="large" 
                  onClick={calculateBudget}
                  sx={{ 
                    color: "white",  
                    backgroundColor: '#3A8E88',
                    margin: 'auto',
                    }} 
                >
                  <Typography variant="h6">
                    Calculate
                  </Typography>
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item >
          <Card sx={{ minWidth: '200', maxWidth: '700', backgroundColor: '#DEF2F0' }}>
            <CardContent sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
              <Typography variant="h4" padding="10px">
                Budget Chart:
              </Typography>
              <Typography variant="h6">
                (Tap each segment for data)
              </Typography>
              <PieChart width={350} height={400}>
                <Pie
                  dataKey="value"
                  isAnimationActive={false}
                  data={data}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#3A8E88"
                  label={renderLabel}
                />
                <Tooltip />
              </PieChart>
            </CardContent>
          </Card>
          </Grid>
        </Grid>
    )
}