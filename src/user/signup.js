import React, { useState } from 'react';
import {useNavigate } from 'react-router';
import { handleSignup } from '../auth/auth';

function Signup() {
   
    

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
  const [error,setError]=useState("")
  const[successMsg,setSuccessMsg]=useState("")


//   const navigate=useNavigate("")

const SignupUser=async () =>{


  const payload ={ name,email,password  }


  handleSignup (payload).then((data)=>{

    if(data.error)
    {
      setError(data.error)
      setSuccessMsg("")
    }
    else{
        setError("")
      setSuccessMsg(data.message)
      localStorage.setItem("token",data.token)
   
    } 
  
  })
}








  return (
    <div className='justify-center p-3'>
       <SignupForm
       name={name}
       setName={setName}
       setEmail={setEmail}
       email={email}
       setPassword={setPassword}
       password={password}
       SignupUser={SignupUser}/>

       <div className='justify-center'>

             <div  >
      {error ? <div >
        <div className="badge badge-error gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
  {error}
</div>
</div> : ""}




        {successMsg ? <div className="badge badge-success gap-2">
  <svg xmlns="http://www.w3.org/2001/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
  {error}{successMsg}
        </div> : ""}

      </div>
       </div>
       
       
    </div>
  );
}


function SignupForm ({name,setName,password,setPassword,email,setEmail,SignupUser,error,successMsg
}) 
{
  const navigate=useNavigate()
    return ( 
<div className="justify-center p-2 ">
<div className="artboard artboard-horizontal phone-7  "> 
<div className=" justify-center">

<h1 className="text-9xl font-bold text-success "   >Signup now! 

</h1>
<h1 className="text-4xl font-bold text-Primary  p-8"   > Register Your Account 

</h1>
</div>
<div>
         
<label className=" justify-center p-6">
<div>

<input type="text" placeholder="name " className="input input-bordered input-error w-full max-w-xs m-2" 
  value={name}
  onChange={(e)=>setName(e.target.value)}/>
</div>
<div>
<input type="email" placeholder="@mail.com " className="input input-bordered input-error w-full max-w-xs m-2"  
value={email}
  onChange={(e)=>setEmail(e.target.value)}/>
</div>
<div>
<input id='pass' type="password" placeholder="password"  className="input input-bordered input-error w-full max-w-xs m-2" autoComplete='off'
value={password}
 onChange={(e)=>setPassword(e.target.value)} />
</div>

</label>

</div>
<div>

<button className="btn btn-active btn-ghost m-2" onClick={()=>SignupUser()} >Signup</button>
          
          <div className="text-m">
          <h1>Already have an account?<a href="/" className="font-medium text-red-600 hover:text-accent-500" onClick={()=>navigate("/")}> Sign in</a></h1>
          </div>
</div>
 </div>
</div>

    )
}

export default Signup


          