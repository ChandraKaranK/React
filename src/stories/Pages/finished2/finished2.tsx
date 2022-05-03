import React from "react";
import { Box } from "@mui/material";
import FinishedCard from "../../Molecules/finishedcard/finishedcard";
import './finished2.css';
import axios from "axios";
import { useEffect,useState } from "react";

// type finishedprops = {
//     fcards:{
//         image:string
//         title:string
//         author:string
//         readtime:string
//         reads:string
//     }[]
// }

// function Finished2(props:finishedprops){
//     const {fcards} = props
//     return (
//         <div className="finishedcards">
//             <Box display='flex'  width="1200px" flexDirection='row' flexWrap='wrap' columnGap={5} rowGap={5}>  
//                 {fcards.map( book =>(
//                         <FinishedCard details={book}></FinishedCard>
//                 )
//                 )}    
//             </Box>
//         </div>
//     )
// }


function Finished2(){

    const [fbooks,setFBooks] = useState<any[]>([])

    useEffect(()=>{
        axios.get('http://localhost:8000/list')
        .then(response=>setFBooks(response.data))
   
    },[fbooks])

    return (
        <div className="finishedcards">
            <Box display='flex'  width="1200px" flexDirection='row' flexWrap='wrap' columnGap={5} rowGap={5}>  
                {fbooks.map( book =>(
                       book.finished? <FinishedCard bookid={book.id} details={book}></FinishedCard>:<></>
                )
                )}    
            </Box>
        </div>
    )
}

export default Finished2