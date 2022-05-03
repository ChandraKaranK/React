import React from "react";
import AddIcon from '@mui/icons-material/Add';
import { Typography } from "@mui/material";
import './addtolibrary.css';
import { Button } from "@mui/material";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

type bookidprops = {
    bookID:number
}

function AddToLibrary(props:bookidprops){

    const {bookID} = props
    const navigate = useNavigate();

    const addToLibrary = ()=>{
        axios.get(`http://localhost:8000/list/${bookID}`)
        .then(response=>{console.log(response);
           if(response.status===200)
           {
           response.data["finished"]=false;
           axios.put(`http://localhost:8000/list/${bookID}`,response.data)
           .then(response => navigate('/'))
           }
       })
    }

    return(
          <div className="addbutton1">
            <Button sx={{marginLeft:'-20px'}} onClick={addToLibrary}>
                <AddIcon display="flex" color="secondary"></AddIcon>
                <Typography className="add" color="secondary">Add to library</Typography>
            </Button>
            </div>
    )
}

export default AddToLibrary