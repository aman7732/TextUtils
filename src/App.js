// import logo from './logo.svg';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';


function App() {
  const [mode, setmode] = useState('dark');
  const togglemode = () =>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.background = 'grey';
    }else{
      setmode('light');
      document.body.style.background = 'white';
    }
  }
  return (
   <> 
   <Navbar tittle = "textutlis" link = "About" mode={mode} togglemode={togglemode} />
    

  <div className='container'> 
  <TextForm heading="Enter the text to analyze below" mode={mode}/> 
    </div>
    
  
   {/* <About/> */}
  
   
   </>
  );
}

export default App;
