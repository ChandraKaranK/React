import React from 'react';
import { Tab } from "@mui/material";
import { Tabs } from "@mui/material";
import { useState } from 'react';
import Current from '../../Pages/current/current';
import Finished2 from '../../Pages/finished2/finished2';
import './Tab.css';
import { Typography } from '@mui/material';

function BooksTab(){

    const [selectedTab ,setSelectedTab] = useState(0);

    const handleChange = (event:React.SyntheticEvent<Element, Event>,newValue:number)=>{
        setSelectedTab(newValue)
    };


    


    return(
        <div className="content1">
        <Tabs value={selectedTab} onChange={handleChange} TabIndicatorProps={{style:{backgroundColor:"#2CE080"}}}>
            <Tab label={<Typography style={{fontSize:'18px',color:selectedTab===0?'#22C870':'#6D787E'}}>Curently reading </Typography>}/>
            <Tab label={<Typography style={{fontSize:'18px',color:selectedTab===0?'#6D787E':'#22C870'}}>Finished</Typography>} />
        </Tabs>
        {selectedTab === 0 && <Current></Current>}
        {selectedTab === 1 && <Finished2></Finished2>}
    </div>
    )
}

export default BooksTab