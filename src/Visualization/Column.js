import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles({
    firstStyle:{
        display:"flex",
        width:"25px",
        marginRight:"5px",
        backgroundColor: props => props.backgroundColor,
    },

    secondStyle:{
        height: props => props.height,
    }
})

const Column = (props) => {
    const{
        index 
    }=props
    const { firstStyle, secondStyle} = useStyles(props)

    return (
        <div className={`${firstStyle} ${secondStyle}`}></div>
    )
}

export default Column