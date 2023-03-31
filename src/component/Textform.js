import React,{ useState }  from 'react'

export default function Textform(props) {
 

    //this function changes text ka text to uppercase and then setText ki madat se text ko update bhi kiya  
    const clicktoUp =()=>{
let newtext= text.toUpperCase();
setText (newtext);

    }

    const clicktoLow =()=>{
        let newtext= text.toLowerCase();
        setText (newtext);
       
        
            }

    //ye function likhne se jaab ham textarea meuin kuch naya likhenge toh likhayega ....
    //and vo particular event setText ki sahayata se texyarea ka text badlega
  
  const makeChange =(event)=>{

setText(event.target.value);
  }

  //to clear entire text
 
const cclear =() =>{
   var cleartext= " ";
  setText(cleartext);
}

// TO CHANGE COLOR OF CONTAINER
   
// let toggleStyle=()=>{
// if (myStyle.color==='black'){
//   setMyStyle({
//     color: 'white' ,
//     backgroundColor:'black'

//   })
//   let newbtntext=" Enable Light Mode "
//   setbtntext(newbtntext)
// }
//  else {
//     setMyStyle({
//       color:'black',
//       backgroundColor:'white'
//     })
//     let new2btntext=" Enable Darkt Mode "
//     setbtntext(new2btntext)
//   }
//   }





       


  
  
  

  const [text, setText]=useState(" ");
  // const[btntext, setbtntext]=useState("Enable Dark Mode  ");
  // const [myStyle, setMyStyle]=useState({
  //   color: 'black' ,
  //   backgroundColor:'white',
   


  // });


  
    return (
<>
<div className='container p-5 w-100 '  style={{color:props.mode==='light'?'black':'white'}}> 

<h1>{props.heading}</h1>
    <div class="form-group">
    <textarea  style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} class="form-control textarea" value={text}  onChange={makeChange}id="exampleFormControlTextarea1" rows="8"></textarea>
    <button style={{margin:'2px'}} className="btn btn-primary my-2" onClick={clicktoUp}>UpperCase</button>
    <button style={{margin:'2px'}} className="btn btn-success my-2" onClick={clicktoLow}>LowerCase</button>
    <button style={{margin:'2px'}} className="btn btn-danger my-2" onClick={cclear}>Clear</button>
   
   

  </div>
  </div>

  <div className='container p-5 w-100' style={{color:props.mode==='light'?'black':'white'}} >

    <h2>Text Sumary </h2>
    <p> {text.split(" ").length} words and {text.length} characters</p>
  </div>
</>
  )
}
