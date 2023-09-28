
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Textform from './components/Textform';
import Alert from './components/Alert';
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode,setmode]=useState('light')
const [modetext,setmodetext]=useState('Enable dark Mode')
const[msg,setmsg]=useState("");
setTimeout(()=>{
  setmsg("");
},2000)
  const togglemode =() =>{
    if (mode==='light'){
      setmode('dark');
    setmodetext('Enable Light Mode');
  document.body.style.backgroundColor='#031323';
  setmsg("Success: Dark Mode Enabled");
}
    else{
      setmode('light');
      setmodetext('Enable Dark Mode');
      document.body.style.backgroundColor='white';
      setmsg("Success: Light Mode Enabled");

    }
  }
  return (
    <BrowserRouter>
    <>
     <Navbar title="Textutils" mode={mode} modetext={modetext} togglemode={togglemode}/> 
     <Alert msg={msg}/>

    <Routes>
<Route path="/" element={<Textform mode={mode} />}/>
<Route path="about" element={<About/>}/>

    </Routes>
    
    {/* <Navbar title="Textutils" mode={mode} modetext={modetext} togglemode={togglemode}/>  */}
    
     {/* <Textform mode={mode} />   */}
     {/* <About/>  */}
    </>
    </BrowserRouter>
    
  );
}

export default App;
