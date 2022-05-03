import React from "react";

type nameProps = {
    firstname:string
    lastname:string
}

function Name(props:nameProps){

    const {firstname,lastname} = props

    return(
        <h1>Name:{firstname} {lastname}</h1>
    )
}

export default Name