import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { lightGreen, grey, blue } from '@mui/material/colors';
const Theme = createTheme({
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

  export default Theme