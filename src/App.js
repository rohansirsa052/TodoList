import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import "./App.css";
const App = () => {
  const getLocalItems = () => {
    let list = localStorage.getItem('list');
    if (list) {
      return JSON.parse(list);
    } else return [];
  };

  const [name, setName]= useState();
  const [data, setData] = useState(getLocalItems());

  const handleClick=()=>{
    if(!name){

    }
    else{
      setData((prevalues) => [...prevalues, name]);
    setName(''); 
    }
    
}
const handleClick2=(i)=>{
  const updatedVAlue= data.filter((cvalue, ind)=>{
      return ind!==i
  })
  setData(updatedVAlue);
 }
 useEffect(() => {
  localStorage.setItem('list', JSON.stringify(data));
}, [data]);

  return (
   
   <React.Fragment>
   <div className="main_div">
   <div className="center_div">
   <br />

   <h1>To do list</h1>
   <input type="text"   placeholder='Enter a item'  name='name'  value={name} onChange={(e)=>{ setName(e.target.value) }} />
    <button  onClick= {handleClick} > + </button>
    <div className="box">
    <ol>        
    {
      data.map(function(cValue, index){
          return (
            <TodoList text= {cValue} id= {index} key= {index}  onSelect= {handleClick2}/>

          )
      })
  }
    </ol>
    </div>
   
   <br />
   
   </div>
   
   
   </div>
   
   </React.Fragment>
  )
}

export default App
