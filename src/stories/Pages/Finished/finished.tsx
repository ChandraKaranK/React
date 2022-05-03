import React from "react";
import Header2 from "../../Organisms/header2/header2";
import Banner from "../../Organisms/banner/banner";
import SearchBar from "../../Molecules/searchbar/searchbar";
import { Container, Typography } from "@mui/material";
import { Grid ,Paper} from "@mui/material";
import Card3 from '../../Molecules/card3/card3';
import Footer from "../../Organisms/footer/Footer";
import './finished.css';
import { Box } from "@mui/material";
import { Details } from "@mui/icons-material";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { lightGreen, grey, blue } from '@mui/material/colors';


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

type BooksProp = {
    bookslist:{
        id:number
        image:string
        title:string
        author:string
        readtime:string
        reads:string
    }[]
    justAddedList:{
        id:number
        image:string
        title:string
        author:string
        readtime:string
        reads:string
    }[]
    FeaturedList:{
        id:number
        image:string
        title:string
        author:string
        readtime:string
        reads:string
    }[]
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

       h2:{
        fontFamily: 'Cera Pro',
        fontWeight: 500,
        fontSize: 24,
        color:'#0365F2'
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

       h6:{
        fontFamily: 'Cera Pro',
        fontWeight: 400,
        fontSize: 16
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

function FinishedPage(props:BooksProp){

    const {bookslist,justAddedList,FeaturedList} = props

    return(
        <>
        <ThemeProvider theme={theme}>
            <Header2></Header2><br/><br/>
            <Box marginLeft='23%' marginRight='23%'>
                <Banner></Banner><br/><br/>
                <SearchBar></SearchBar><br/><br/><br/>
                <Typography variant="h3">Trending blinks</Typography><br/><br/>
                <Box display='flex'  width="1200px" flexDirection='row' flexWrap='wrap' columnGap={5} rowGap={5}>  
                    {bookslist.map( book =>(
                            <Card3 bookid={book.id} details={book} finish={false}></Card3>
                    )
                    )}       
                </Box>
                <br></br><br></br>
                <Typography variant="h3">Just added</Typography><br/><br/>
                <Box display='flex'  width="1200px" flexDirection='row' flexWrap='wrap' columnGap={5} rowGap={5}>  
                    {justAddedList.map( book =>(
                            <Card3 bookid={book.id} details={book} finish={false}></Card3>
                    )
                    )}       
                </Box>
                {/* <Grid container>  
                    {justAddedList.map( book =>(
                        <Grid item xs={12} sm={8} md={4}>
                            <Card3 bookid={book.id} details={book} finish={false}></Card3>
                        </Grid>
                    )
                    )}       
                </Grid> */}
                <br/><br/>
            <Typography variant="h3">Featured Audio Blinks</Typography>
                <br></br><br/>
                {/* <Grid container>  
                    {FeaturedList.map( book =>(
                        <Grid item xs={12} sm={8} md={4}>
                            <Card3 bookid={book.id} details={book} finish={false}></Card3>
                        </Grid>
                    )
                    )}       
                </Grid> */}

            <Box display='flex'  width="1200px" flexDirection='row' flexWrap='wrap' columnGap={5} rowGap={5}>  
                    {FeaturedList.map( book =>(
                            <Card3 bookid={book.id} details={book} finish={false}></Card3>
                    )
                    )}       
                </Box>

            </Box>
            <br/><br/><br/>
            <Footer navlist={navigationlist}></Footer>
            </ThemeProvider>
        </>
    )
}

export default FinishedPage