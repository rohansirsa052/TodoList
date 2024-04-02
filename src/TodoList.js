import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import "./App.css";
const TodoList = (props) => {
    const [line, setLine]= useState();
    const cutIt = ()=>{
            setLine(true);
    }
  return (
    <React.Fragment>
    <div className="todo_style" key= {props.key}>
   <span onClick= {cutIt} >
   <FontAwesomeIcon icon={faTimes} onClick={()=>{  
}} className='fa-times'  />
   </span>  
    <li  style={{textDecoration: line ? "line-through": ""}} >{props.text}</li>
    </div>

    </React.Fragment>
  )
}

export default TodoList
