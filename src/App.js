import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import Alert from './component/Alert';
import React,{useState} from 'react'

function App() { 

  const [mode , setMode]=useState('light');
  const [alert, setalert]= useState(null);

  const showAlert = (message,type)=>{
setalert({
  msg: message,
  type: type
})
   
  }

  const toggleMode=()=>{
if (mode==='light'){
  setMode('dark');
document.body.style.backgroundColor='black';
showAlert("dark mode started","success");
}
else{
  setMode('light');
  document.body.style.backgroundColor='white';
}
  }

  return (
    <>
  <Navbar title="Red&Blue" mode={mode} toggleMode={toggleMode}/>
  <Alert  alert={alert}/>
  <div className='container'>
    <Textform heading="Enter Your TEXT here" mode={mode}/>
  </div>
    </>
  );
}

export default App;
