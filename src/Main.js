import React,{Component,useState} from "react"
import './style.css'
function Main() {
  const [screen,setscreen]=useState("")
  function display(a){
      if (a=="=")
      setscreen(eval(screen))
      else if (a=="C")
      setscreen("")
      else
      setscreen(screen+a)
  }
  return(     <div className="calci">
  
  <h1>CALCULATOR</h1>
  <input type="text" value={screen}/>
  
  <table>
  <tbody>
      <tr>
          <td><button onClick={() => {display("C")}}>C </button></td>
          <td><button onClick={() =>{display("=")}}>= </button></td>
  
      </tr>
   <tr>
       <td><button onClick={() =>{display("1")}}>1 </button></td>
       <td><button onClick={() =>{display("2")}}>2 </button></td>
       <td><button onClick={() =>{display("3")}}>3 </button></td>
       <td><button onClick={() =>{display("4")}}>4 </button></td>
   </tr>
   <tr>
      <td><button onClick={() =>{display("5")}}>5 </button></td>
      <td><button onClick={() =>{display("6")}}>6 </button></td>
      <td><button onClick={() =>{display("7")}}>7 </button></td>
      <td><button onClick={() =>{display("8")}}>8 </button></td>
  </tr>
  <tr>
      <td><button onClick={() =>{display("9")}}>9 </button></td>
      <td><button onClick={() =>{display("(")}}>( </button></td>
      <td><button onClick={() =>{display(")")}}>) </button></td>
      <td><button onClick={() =>{display(".")}}>. </button></td>

  </tr>
  <tr>
      <td><button onClick={() =>{display("+")}}>+ </button></td>
      <td><button onClick={() =>{display("-")}}>- </button></td>
      <td><button onClick={() =>{display("*")}}>x </button></td>
      <td><button onClick={() =>{display("/")}}>/ </button></td>

  </tr>
  </tbody>
</table>
</div>);
}
export default Main