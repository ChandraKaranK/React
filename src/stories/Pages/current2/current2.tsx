import React, { useState } from "react";
import BookCard3 from "../../Molecules/card3/card3";
import { Box } from "@mui/material";
import { useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";


// type booklistprop = {
//     list:{
//         image:string
//         title:string
//         author:string
//         readtime:string
//         reads:string
//     }[]
// }

function Current2(){

const [books,setBooks] = useState<any[]>([])

const newbook = {
    "image": "/assets/images/10.png",
    "title": "Being Boss",
    "author": "Kathleen Shannon and Emily",
    "readtime": "13",
    "reads": ""
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


const updateBook = ()=>{
    axios.put(`http://localhost:8000/list/1`,{"finished":"true"})
    .then(response=>{console.log(response.data)})
}

    useEffect(()=>{
        axios.get('http://localhost:8000/list')
        .then(response=>setBooks(response.data))
   
    },[books])

    return(
        <>
            {
                <Box display='flex'  width="1200px" flexDirection='row' flexWrap='wrap' columnGap={5} rowGap={5}>  
                {books.map( book =>(
                      book.finished? <BookCard3  bookid={book.id} details={book} finish={true}></BookCard3>:<></>
                )
                )}       
                 </Box>
                 

            }
            <br/><br/>
            <Button onClick={addBook}>post</Button>
            <Button onClick={deleteBook}>Delete</Button>
            <Button onClick={updateBook}>Update</Button>

        </>
    )
}

export default Current2