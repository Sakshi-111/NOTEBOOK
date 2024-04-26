
import React from 'react'
import Add from '../components/Add'
import List from '../components/List'
import Header from '../../../Shared/Component/Header'


import { Container, Grid, Paper } from '@mui/material';
import Sidebar from '../../../Shared/Component/Sidebar';


const  Notepage=()=> {
  return (
  <div>
    <Header/>
    <br/>
    
    <Container  maxWidth="fixed">
      <Grid container spacing={2}>

        <Grid item xs={2}>

      <Sidebar/>  
        </Grid>
        <Grid item xs={10}>
          <Paper>
          <Add/>
          </Paper>
          <List/>
            
          
        </Grid>
      </Grid>
    </Container>

   
  </div>
  );
}
export default Notepage;
