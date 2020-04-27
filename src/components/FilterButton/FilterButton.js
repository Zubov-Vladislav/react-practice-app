import React from 'react'
import cl from './FilterButton.module.css'

const FilterButton = props => {
    const onButtonClick = (event) => {
        const NameButton = event.target.innerText
        props.ButtonFilter(NameButton)
    }

    const styleBtn = () =>{
        const IdBtn = props.index
        props.StyleActivBtn(IdBtn)
    }

    return (
        <div className={cl.Button}>
           <button onClick={onButtonClick}
            className = {`${props.active ? cl.BtnActive : "" }`}
           >
            {props.answerBtn}   
            </button> 
        </div>


    )
      
  }
  
  export default FilterButton