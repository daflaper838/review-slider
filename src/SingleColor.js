 import React,{useState} from 'react'
 
 
 const SingleColor = ({rgb,weight,index,length})=>{

     const [alert,setAlert] = useState(false)
     const bcg = rgb.join(',')
   
    
    const handleClick = (e)=>{
        
        var textArea = document.createElement("textarea");
        textArea.value = e.target.innerText
        document.body.appendChild(textArea);
        var elem = document.querySelector('textarea')
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(elem);
     
        window.alert(`${e.target.querySelector('h5').innerText} copied`)
    }

    return <div  onClick={handleClick}key={index} className='single-color' style={{ color:`${index< length/2?'black':'white'}`, backgroundColor:`rgb(${bcg})`}} >
        <h5 style={{background:'none'}}>{rgbToHex(rgb[0],rgb[1],rgb[2])}</h5>
        <p style={{background:'none'}}>{weight}%</p>
    </div>
}
const  componentToHex = (c)=> {

  const hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

const  rgbToHex =(r, g, b)=> {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}



export default SingleColor