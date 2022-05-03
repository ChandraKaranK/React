import { SvgIcon, SvgIconProps } from "@mui/material"
import React from "react"
export interface IconFromSvgProps extends SvgIconProps{

}
const IconFromSvg = (props:IconFromSvgProps)=>{
    return(
        <SvgIcon {...props}/>
    )
}

export default IconFromSvg;