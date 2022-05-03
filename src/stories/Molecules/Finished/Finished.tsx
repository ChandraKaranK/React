import React from "react";
import { Typography } from "@mui/material";
import './Finished.css';
import { Button } from "@mui/material";
import axios from "axios";



type bookidprop ={
    bookID:number
}

function Finished(props:bookidprop){

    const {bookID} = props


    const addToFinished = ()=>{
        axios.get(`http://localhost:8000/list/${bookID}`)
             .then(response=>{console.log(response);
                if(response.status===200)
                {
                response.data["finished"]=true;
                axios.put(`http://localhost:8000/list/${bookID}`,response.data)
                }
            })

    }

    return(
            <Button sx={{marginLeft:'-30px'}}  onClick={addToFinished}>
                <Typography className="add" color="secondary">Finish Read</Typography>
            </Button>
    )
}

export default Finished