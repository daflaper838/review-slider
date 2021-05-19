import React,{useState,useEffect} from 'react';
import './App.css';
import SingleColor from './SingleColor'
import Values from 'values.js'





function App() {
  
    const[color,setColor] = useState('#fff')
    const[error,setError]= useState(false)
    const [list,setList] = useState([])
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    let colors =  new Values(color).all(20);
    console.log(colors)
    if (!color) return
    
  }
  return <>
    <section className='container'>
      <h3>Color Generator</h3>
      <form onSubmit={handleSubmit}>
        <input type='txt' value={color} placeholder='#f15025' onChange={(e)=>{setColor(e.target.value)}}/>
        <button type='submit' className='btn'>generate</button>
      </form>

    </section>
    <section className='colors'>
      <h4>List goes here</h4>
   
      <SingleColor/>
      
    </section>
  </>
}

export default App;
