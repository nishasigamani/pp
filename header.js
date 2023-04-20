import React from "react";
import {AppBar,Typography,Toolbar} from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
const Header=()=>

{
  return (
    <AppBar sx={{backgroundColor:"peachpuff"}}>
            <Toolbar>
            <AllInclusiveIcon style={{color:"red"}}/>
                <Typography style={{color:"red"}}>
                </Typography>
        <Box sx={{ width: '100%' }}>
           
       <Tabs>
        <Tab value="one" label="INTRO" />
        <Tab value="two" label="ABOUT " />
        <Tab value="four" label="PROJECTS" />
        <Tab value="five" label="CONTACT" />
        <Tab value="six" label="REGISTER" />
      </Tabs>
    
    </Box>
  
     </Toolbar>
        </AppBar>
    )
     
}
export default Header;


