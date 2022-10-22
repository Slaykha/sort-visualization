import { makeStyles } from '@mui/styles'
import React, { useEffect } from 'react'

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
        backgroundColor,
        columns,
        setColumns,
        height
    }=props
    const { firstStyle, secondStyle} = useStyles(props)

    /* useEffect(() => {
        if(backgroundColor != "blue")
            setTimeout(() => {
                setColumns(current =>
                current.map(obj => (
                    {...obj, height: obj.height, backgroundColor: 'blue'}
                )),
                );
            }, 500);
    }, [backgroundColor])  */
    
    return (
        <div className={`${firstStyle} ${secondStyle}`}>{height}</div>
    )
}

export default Column