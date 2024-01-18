import React from 'react'
import { useNavigate } from 'react-router'

export default function Succes() {
const navigate =useNavigate()
  return (
    <div>
            <div className="indicator">
  <div className="indicator-item indicator-bottom">
    <button className="btn btn-primary" onClick={()=>navigate("/")} >Login</button>
  </div> 
  <div className="card border">
    <div className="card-body">
      <h2 className="card-title">Account created Succesfully</h2> 
      <p>Return to login page</p>
    </div>
  </div>
</div>
         {/* <h1>Account created succesfully</h1>
         <button onClick={()=>navigate("/")}> back to login page </button> */}
    </div>

   
  )
}
