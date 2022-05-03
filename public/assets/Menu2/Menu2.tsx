import React from 'react';
import './Menu2.css';
import {makeStyles} from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Grid,Box} from "@mui/material";
import { Typography } from '@mui/material';
import { Search } from '@mui/icons-material';




function Menu2(){

    return(
        <>
        <Grid >
                <Grid item flexDirection="row">
                    <Typography color="blue">Explore by category</Typography>
                </Grid>
                <Grid item>
                    <Typography>See recently added items</Typography>  
                </Grid>
                <Grid item>
                    <Typography>See popular titles</Typography>
                </Grid>
        </Grid>
        <Menu open={true}>
            <Box display='flex'  width="1200px" flexDirection='row' flexWrap='wrap' columnGap={5} rowGap={2}>
                <MenuItem ><Search/>Entrepreneurship</MenuItem>
                <MenuItem ><Search/>Science</MenuItem>
                <MenuItem><Search/>Economics</MenuItem>
                <MenuItem ><Search/>Corporate culture</MenuItem>
                <MenuItem><Search/>Psychology</MenuItem>
                <MenuItem ><Search/>Nature and environment</MenuItem>
                <MenuItem ><Search/>Politics</MenuItem>
                <MenuItem ><Search/>Health and Nutrition</MenuItem>
                <MenuItem ><Search/>History</MenuItem>
                <MenuItem ><Search/>Motivation & inspiration</MenuItem>
                <MenuItem ><Search/>Productivity</MenuItem>
                <MenuItem ><Search/>Career and Success</MenuItem>
                <MenuItem ><Search/>Entrepreneurship</MenuItem>
                <MenuItem ><Search/>Science</MenuItem>
                <MenuItem ><Search/>Economics</MenuItem>
                <MenuItem ><Search/>Corporate culture</MenuItem>
                <MenuItem ><Search/>Psychology</MenuItem>
            </Box>
        </Menu>
        </>
    )
    
}

export default Menu2