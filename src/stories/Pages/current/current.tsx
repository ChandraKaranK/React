import React from "react";
import BookCard3 from "../../Molecules/card3/card3";
import { Box } from "@mui/material";
import axios from "axios";
import { useState ,useEffect} from "react";

// type booklistprop = {
//     list:{
//         image:string
//         title:string
//         author:string
//         readtime:string
//         reads:string
//     }[]
// }

// function Current(props:booklistprop){

//     const {list} = props
    
//     return(
//         <div className="currentclass">
//             <Box display='flex'  width="1200px" flexDirection='row' flexWrap='wrap' columnGap={5} rowGap={5}>  
//                 {list.map( book =>(
//                      <BookCard3 details={book} finish={true}></BookCard3> : <></>
//                 )
//                 )}       
//             </Box>
//         </div>
//     )
// }


function Current(){

    const [books,setBooks] = useState<any[]>([])

const newbook = {
            "image":"string",
            "title":"string",
            "author":"string",
            "readtime":"string",
            "reads":"string"
}

const addBook = ()=>{
    console.log(books);
    axios.post('http://localhost:8000/list',newbook)
    .then(response=>{console.log(response.data)})
}


const deleteBook = ()=>{
    axios.delete(`http://localhost:8000/list/10`)
    .then(response=>{console.log(response.data)})
}

    useEffect(()=>{
        axios.get('http://localhost:8000/list')
        .then(response=>setBooks(response.data))
        .catch(error=>console.log(error))
       
    },[books])
    
    return(
        <Box sx={{marginTop:'50px'}} >
            <Box display='flex'  width="1200px" flexDirection='row' flexWrap='wrap' columnGap={5} rowGap={5}>  
                {books.map( book =>(
                     book.finished ? <></>:<BookCard3 bookid={book.id} details={book} finish={true}></BookCard3> 
                )
                )}       
            </Box>
        </Box>
    )
}

export default Current