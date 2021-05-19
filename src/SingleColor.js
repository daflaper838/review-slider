 import React,{useState} from 'react'
 
 
 const SingleColor = ({rgb,weight,index})=>{

     const [alert,setAlert] = useState(false)
     const bcg = rgb.join(',')
    console.log(rgb)
    
    return <div key={index} className='single-color' style={{backgroundColor:`rgb(${bcg})`}} >
        {rgbToHex(rgb[0],rgb[1],rgb[2])}
    </div>
}
const  componentToHex = (c)=> {

  const hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

const  rgbToHex =(r, g, b)=> {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

alert(rgbToHex(0, 51, 255));

export default SingleColor