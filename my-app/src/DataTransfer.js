import React, { useContext } from 'react'
import DataContext from './ContextHookConcept'
import DataTransfer2 from "./DataTransfer2";

const DataTransfer = () => {
    const { functionValues1 } = useContext(DataContext)
  return (
    <div>
        <h1>{functionValues1}</h1>
        <DataTransfer2/>
    </div>
  )
}

export default DataTransfer