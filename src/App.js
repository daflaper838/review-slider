import React,{useState,useEffect} from 'react';
import './App.css';
import SingleColor from './SingleColor'
import Values from 'values.js'





function App() {
  
    const[color,setColor] = useState('#225544')
    const[error,setError]= useState(false)
    const [list,setList] = useState([])
    const [range,setRange] = useState(10)

    const isHex = (hex)=>{
    let RegExp = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
    return RegExp.test(hex)
}
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    const newRange= range;
    console.log(newRange)
    if (isHex(color)){
     
      let colors =  new Values(color).all(parseInt(newRange,10));
      setList(colors)
    }
    
 
    
  }
  return <>
    <section className='container'>
      <h3>Color Generator</h3>
      <form onSubmit={handleSubmit}>
        <input type='txt' value={color} placeholder='#f15025' onChange={(e)=>{setColor(e.target.value)}}/>
        <button type='submit' className='btn'>generate</button>
    
        <input  className ='slider' type='range' min='1' max='20' value='10' value={range} onChange={(e)=>setRange(e.target.value)}></input>
        
      </form>
    

    </section>
    <section className='colors'>

      {list.map((item,index)=>{
        
        return <SingleColor key={index} {...item} index={index}/>
      }) }
     
      
    </section>
  </>
}

export default App;
