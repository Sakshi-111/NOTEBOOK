
import React from 'react'
import Add from '../components/Add'
import List from '../components/List'
import Header from '../../../Shared/Component/Header'

import { Container, Grid, Paper } from '@mui/material';

const  Notepage=()=> {
  return (
  <div>
    <Header/>
    <br/>
    
    <Container  maxWidth="auto">
      <Grid container spacing={2}>
        <Grid item xs={3}>

        <Paper>Left Content</Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper>
          <Add/>
             <List/>
            
          </Paper>
        </Grid>
      </Grid>
    </Container>

   
  </div>
  );
}
export default Notepage;
