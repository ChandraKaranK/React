import React, { useEffect } from "react";
import Header2 from "../header2/header2";
import Footer from "../footer/Footer";
import { Grid, Typography } from "@mui/material";
import { AccessTime } from "@mui/icons-material";
import './BookDescription.css';
import { Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useState} from 'react';
import { Tab } from "@mui/material";
import { Tabs } from "@mui/material";
import {Box} from "@mui/material";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { lightGreen, grey, blue } from '@mui/material/colors';

type bookprops = {
details?:{
id:number
image:string
title:string
tag:string
author:string
readtime:string
}
bookid:number
}



export const theme = createTheme({
    palette: {
      primary:{
        main:grey[800],
      },
      secondary: {
        main: blue[800],
      },
    },
     typography: {
       h1:{
        fontFamily: 'Cera Pro',
        fontWeight: 700,
        fontSize: 36,
        color:'#03314B'
       },

       h3:{
        fontFamily: 'Cera Pro',
        fontWeight: 700,
        fontSize: 24,
        color:'#03314B'
       },

       h4:{
        fontFamily: 'Cera Pro',
        fontWeight: 700,
        fontSize: 36
       },

       h5:{
        fontFamily: 'Cera Pro',
        fontWeight: 400,
        fontSize: 20
       },
  
       subtitle1:{
        fontWeight: 700,
        fontSize: 18,
        color: '#03314B',
       
       },
       subtitle2:{
        fontWeight: 400,
        fontSize: 18,
        color: '#6D787E',
       },
  
       body1:{
        fontFamily: 'Cera Pro',
        fontWeight: 500,
        fontSize: 16,
        color:'#6D787E',
        lineHeight:'20px'
       },

       body2:{
        fontFamily: 'Cera Pro',
        fontWeight: 400,
        fontSize: 16,
        color: '#03314B'
       },
  
       caption:{
        fontFamily: 'Cera Pro',
        fontWeight: 400,
        fontSize: 14,
        color: '#6D787E',
        lineHeight:'17px',
        padding:0
       },
  
       button:{
        fontFamily:'Cera Pro',
        fontSize:16,
        fontWeight:500,
        textTransform:'capitalize'
       },
      fontFamily: 'Cera Pro',
   
      
    },
  
  });

const navigationlist = [
    {
        title:"Editorial",
        items:['Booklists','What is Nonfiction?','What to read next?','Benefits of reading']
    },
    {
        title:"Useful links",
        items:['Pricing','Blinkist business','Gift cards','Blinlist magaine','Contact and help']
    },
    {
        title:"Company",
        items:['About','Career','Partners','Code of Conduct']
    }
]
function BookDescription(props:bookprops){

    const {details,bookid} = props

    const[book,setBook] = useState<any>({});

    const bookID = bookid

    const [selectedTab ,setSelectedTab] = useState(0);
   

    const handleChange = (event:React.SyntheticEvent<Element, Event>,newValue:number)=>{
        setSelectedTab(newValue)
    };

    const navigate = useNavigate()

    const addBook = ()=>{
        axios.get(`http://localhost:8000/list/${bookID}`)
        .then(response=>{console.log(response);
           if(response.status===200)
           {
           response.data["finished"]=false;
           axios.put(`http://localhost:8000/list/${bookID}`,response.data)
           .then(response => {
               navigate('/')
                })
           }
       })
    }

    const addToFinished = ()=>{
        axios.get(`http://localhost:8000/list/${bookID}`)
             .then(response=>{console.log(response);
                if(response.status===200 && response.data["finished"]===false)
                {
                response.data["finished"]=true;
                axios.put(`http://localhost:8000/list/${bookID}`,response.data)
                .then(response => { 
                    navigate('/')
                })
                }
            })

    }

    useEffect(()=>{
        axios.get(`http://localhost:8000/list/${bookID}`)
        .then(response=>{
            setBook(response.data)
            console.log(response)
        })
        .catch(error=>console.log(error))
       
    },[])


return(
<>
<ThemeProvider theme={theme}>
<Header2/><br/>
<Box marginLeft='23%'marginRight='23%' marginTop="40px">
        <Grid container direction="row" spacing={25}> 
            <Grid item>
                <Grid container direction="column" spacing={3}>
            <Grid item> <Typography variant="body2">Get the key ideas from</Typography></Grid>
            <Grid item>  <Typography variant="h1">{book.title}</Typography></Grid>
            <Grid item>  <Typography variant="h5">{book.tag}</Typography></Grid>
            <Grid item> <Typography variant="body1">{book.author}</Typography></Grid>
            <Grid item>  <Typography variant="caption"><AccessTime  style={{fontSize:'medium'}}/> {book.readtime}-minute read</Typography></Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid><Grid item> <img alt="err" src={book.image} height={300} width={300}></img></Grid></Grid>
            </Grid>
        </Grid>

        <Grid container direction="row" spacing={5}>
            <Grid item><Button disabled={!book.finished} variant="outlined" sx={{width:'fit-content',color:'lightgreen',textTransform:'capitalize'}} onClick={addBook}>Read now</Button></Grid>
            <Grid item><Button disabled={book.finished} variant="contained" sx={{width:'fit-content',backgroundColor:"lightgreen",color:'black',textTransform:'capitalize',':hover':{bgcolor:'lightgreen'}}} onClick={addToFinished}> Finished reading</Button></Grid>
            <Grid item><Button variant="text" color="info" sx={{width:'fit-content',color:'black',textTransform:'capitalize'}} endIcon={<ArrowForwardIcon/>}> Send to kindle</Button></Grid>
            </Grid><br/>

        <Box width={'60%'}>
            <Box>
            <Tabs value={selectedTab} onChange={handleChange} TabIndicatorProps={{style:{backgroundColor:"#2CE080"}}}>
                            <Tab label="Synopsis" style={{textTransform:'capitalize',width:'200px'}}/>
                            <Tab label="Who is it for?" style={{textTransform:'capitalize',width:'200px'}}/>
                            <Tab label="About the author" style={{textTransform:'capitalize',width:'200px'}}/>
            </Tabs>
            </Box>
            <br/>
            <Box>
                        {selectedTab === 0 && <Typography> Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today.
                            This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.</Typography>}
                        {selectedTab === 1 && <></>}
                        {selectedTab === 2 && <></>}
            </Box>
        </Box>
</Box><br/><br/>
            
<Footer navlist={navigationlist}/>
</ThemeProvider>
</>
)
}

export default BookDescription