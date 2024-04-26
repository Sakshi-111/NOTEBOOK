import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

 const Add=()=> {
  return (
    <Box sx={{
      margin:5, flexDirection:'column', display:'flex'
    }}
   
   
  >
    <TextField id="standard-basic"
     label="NOTE"
      variant="standard" />
   <TextField id="standard-basic"
    label="TITLE"
     variant="standard" />
   <TextField id="standard-basic" 
   label="DESCRIPTION"
    multiline 
    maxRows={4} 
    variant="standard" />.
  </Box>
   
   
  );
}
export default Add;

