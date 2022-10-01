import React from 'react'
import "./App.css"
import Generate from './Generate'
import Timer from './Timer'
import logo from "./images/jslogo.png"
function App() {
  return (
    <div style={{backgroundColor: "black", margin:0}}>
        <div className="container" >
          <div className='js-logo-div'>
          {/* <img src={logo} className='js-logo' alt="Logo"/>    */}
        </div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
         <p className="a">
    TECH TWISTER
  </p>

        </div>
        {/* <img src={require("https://drive.google.com/file/d/13edcdjKKJkjQhcwxahR_Kedc4OHyl0V5/view?usp=sharing")} className='js-logo' alt="Logo"/> */}
          <div style={{margin:"auto", textAlign:"center"}}>
                {/* <h1 className='j' style={{ margin: "auto", color: "#FFBF00" }}>TECH TWISTER</h1> */}
                <Timer/>
                <Generate />
          </div>
        </div>
      </div>
  )
}

export default App