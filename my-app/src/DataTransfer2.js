import React, { useContext } from 'react'
import DataContext from './ContextHookConcept'

const DataTransfer2 = () => {
    const { functionValues2 } = useContext(DataContext)
  return (
    <div>
        <h2>{functionValues2}</h2>
    </div>
  )
}

export default DataTransfer2