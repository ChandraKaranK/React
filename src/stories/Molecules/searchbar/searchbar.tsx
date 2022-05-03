import React from 'react';
import { Box, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';
import { InputAdornment } from '@mui/material';

function SearchBar(){
    return(
    <Box>
       <TextField sx={{width:'50%'}} placeholder="search by name or author" variant='standard' InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                    <Search/>
                  </InputAdornment>
                  ),
                  }}
                  />
    </Box>
    )
}
export default SearchBar