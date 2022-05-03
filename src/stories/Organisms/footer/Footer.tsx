import { Typography } from "@mui/material";
import React from "react";
import NaviSection from "../navsection/navisection";
import './Footer.css';
import { Copyright } from "@mui/icons-material";
import { ListItem } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { ListItemText } from "@mui/material";
import blinkist from './Blinkist.jpg';
import { Box } from "@mui/material";
import Theme from '../../theme';
import { ThemeProvider} from '@mui/material/styles';


type footerlist = {
    navlist:{
        title:string
        items:string[]
    }[]
}

function Footer(props:footerlist){

    const {navlist} = props

    return(
        <ThemeProvider theme={Theme}>
            <Box className="footer">
            <Box className="footercontainer">
                <Box className="intro">
                <img alt="blinkist" src={blinkist}></img><br></br><br></br>
                <Typography variant="h2">Big ideas in small packages</Typography>
                <Typography variant="h2">Start learning now</Typography>
                </Box>
                <Box marginTop='10px'> <NaviSection navlist={navlist}></NaviSection></Box>    
            </Box>
            <Box className="copyright" >
                <ListItem>
                    <ListItemIcon style={{minWidth:20}}><Copyright style={{fontSize:'medium'}}/></ListItemIcon>
                    <ListItemText><Typography variant="caption">Blinkist 2021 Sitemap | Imprint | Terms of Service | Privacy Policies</Typography></ListItemText>
                </ListItem>
            </Box>
            </Box>
        </ThemeProvider>
         
    
    )

}
export default Footer

{/* <div className="footer">
<div className="footercontainer">
    <div className="intro">
    <img alt="blinkist" src={blinkist}></img><br></br><br></br>
    <p className="first">Big ideas in small packages</p>
    <p className="first">Start learning now</p>
    </div>
    <NaviSection navlist={navlist}></NaviSection>
</div>
<div className="copyright" >
    <ListItem>
        <ListItemIcon style={{minWidth:20}}><Copyright style={{fontSize:'medium'}}/></ListItemIcon>
        <ListItemText><Typography variant="subtitle2">Blinkist 2021 Sitemap | Imprint | Terms of Service | Privacy Policies</Typography></ListItemText>
    </ListItem>
</div>
</div>



   <ThemeProvider theme={Theme}>
        <div>
            <ul>
                <li id="title"><Typography>{title}</Typography></li>
                {items.map(item => (
                    <li key={item}><Typography>{item}</Typography></li>
                )
                )}
            </ul>
        </div>
        </ThemeProvider>


*/}