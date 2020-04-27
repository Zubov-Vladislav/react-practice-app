import React from 'react'
import cl from './FilterButton.module.css'

const FilterButton = props => {
    
    return (
        <div className={cl.Button}>
           <button >
            {props.answerBtn}   
            </button> 
        </div>


    )
      
  }
  
  export default FilterButton