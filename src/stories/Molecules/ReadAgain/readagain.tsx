import React from "react";
import { Typography } from "@mui/material";
import './readagain.css';
import { Button } from "@mui/material";
import axios from "axios";

type bookidprops = {
    bookID:number
}

function ReadAgain(props:bookidprops){

    const {bookID} = props
   

    const addToCurrent = ()=>{
        axios.get(`http://localhost:8000/list/${bookID}`)
             .then(response=>{console.log(response);
                if(response.status===200)
                {
                response.data["finished"]=false;
                axios.put(`http://localhost:8000/list/${bookID}`,response.data)
                }
            })
    }

    return(
          <>
            <Button onClick={addToCurrent} sx={{marginLeft:'-30px'}}>
                <Typography className="add" color="secondary">Read Again</Typography>
            </Button>
            </>
    )
}

export default ReadAgain