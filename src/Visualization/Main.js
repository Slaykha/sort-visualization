import React, { useEffect, useState } from 'react'
import Column from './Column'

const Main = () => {
  const count = 25

  const [columns, setColumns] = useState([])

  useEffect(() => {
    generateNumber()
  }, [])
  

  const generateNumber = () => {
    var tempArray = []
    for(let i = 0; i < count; i++){
      tempArray.push({height:(Math.floor(Math.random() * 500)), backgroundColor:"blue"})
    }
    setColumns(tempArray)
  }

  return (
    <div>
      <button onClick={generateNumber}>Generate</button>
      <div style={{display:"flex", justifyContent:"center"}}>
        {columns && columns.map((column, index) => (
          <Column 
            backgroundColor={column.backgroundColor}
            height={column.height}
            index={index}
          /> 
        ))}
      </div>
    </div>
  )
}

export default Main