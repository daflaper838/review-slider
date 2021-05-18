import React,{useState,useEffect} from 'react';
import './App.css';





function App() {
  
    const[color,setColor] = useState('')
    const [colorList,setColorList] = useState([])
  

  return <> <form type='submit' onSubmit={()=>handleSubmit()}>
    <input type='txt' placeHolder='#666' value='#666'></input>
    <input type='submit' value='btn'></input>
  </form>
  </>
}

export default App;
