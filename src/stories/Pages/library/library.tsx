import { Typography } from "@mui/material";
import React from "react";
import Header2 from "../../Organisms/header2/header2";
import Footer from "../../Organisms/footer/Footer";
import './library.css';
import BooksTab from "../../Organisms/Tabs/Tab";
import { useAuth0 } from "@auth0/auth0-react";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { lightGreen, grey, blue } from '@mui/material/colors';
import { Box } from "@mui/material";

type card = {
    image:string
    title:string
    author:string
    readtime:string
    reads:string
}

type libraryprop = {
    navlist:{
        title:string
        items:string[]
    }[]
    list?:card[]
    fcards?:card[]

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


function Library(props:libraryprop){

    const {navlist} = props;

    const {user} = useAuth0<any>();

    localStorage.setItem("username",user.name)

    return(
        <>
            <ThemeProvider theme={theme}>
            <Header2></Header2><br/><br/><br/><br/>
            <Box sx={{marginLeft:'23%',marginRight:'23%'}}>
            <Typography variant="h1">My Library</Typography>
            <BooksTab/>
            </Box>
             <Footer navlist={navlist}></Footer>
             </ThemeProvider>
        </>
    )
}

export default Library