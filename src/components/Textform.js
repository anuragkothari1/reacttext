import React,{useState} from 'react'

const Textform = (props) => {

    const[text,settext]=useState("")

    const heandleonchange =(event)=>{
        settext(event.target.value);
    }

     const handleonup =() =>{
    let newtext=text.toUpperCase();
    settext(newtext);
   

   }

   const handleonlow =() =>{
 let newtext=text.toLowerCase();
    settext(newtext);

   }
 
  return (
<>


<div className="container my-3  "style={{color:props.mode==='dark'?'white':'black'}}>
<h1>Enter the text to ananlyze</h1>
<div className="mb-3 my-3">
  
  <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}value={text} onChange={heandleonchange} rows="8"></textarea>
</div>
<button type="button" class="mx-1 btn btn-primary" onClick={handleonup}>Convert to Uppercase</button>
<button type="button" class="mx-1 btn btn-primary" onClick={handleonlow}>Convert to lowercase</button>

</div>

<div className="container my-3 " style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>Your Text summary</h1>
    <p>{text.split(" ").length} words and {text.length} Characters</p>
</div>
</>
  )
}

export default Textform
