 import React,{useState} from 'react'
 
 
 const SingleColor = ({rgb,weight,index})=>{

     const [alert,setAlert] = useState(false)
     const bcg = rgb.join(',')
   
    
    const handleClick = (e)=>{
        
        var textArea = document.createElement("textarea");
        textArea.value = e.target.innerText
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
     
        window.alert(`${e.target.innerText} copied`)
    }

    return <div  onClick={handleClick}key={index} className='single-color' style={{backgroundColor:`rgb(${bcg})`}} >
        {rgbToHex(rgb[0],rgb[1],rgb[2])}
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