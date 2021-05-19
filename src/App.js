import React,{useState,useEffect} from 'react';
import './App.css';
import SingleColor from './SingleColor'
import Values from 'values.js'





function App() {
  
    const[color,setColor] = useState('#225544')
    const[error,setError]= useState(false)
    const [list,setList] = useState([])

    const isHex = (hex)=>{
    let RegExp = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
    return RegExp.test(hex)
}
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    if (isHex(color)){
      console.log('color is hex')
      let colors =  new Values(color).all(10);
      setList(colors)
    }
    
 
    
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

      {list.map((color,index)=>{
        return <SingleColor key={index} {...color} index={index}/>
      }) }
     
      
    </section>
  </>
}

export default App;
