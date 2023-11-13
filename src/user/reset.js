import React, { useState } from "react";
import { handleReset } from "../auth/auth";
import { useNavigate } from "react-router";

function Reset() {
    const [password,setPassword]=useState("")
    const [error, setError] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const navigate=useNavigate()
    
    const resetPassword = async  ()=>{
        const payload={password}
        handleReset(payload).then((data)=>{
            if(data.error){
                setError(data.error)
                setSuccessMsg("")
            }else{
                setError("")
                setSuccessMsg(data.message);
                localStorage.setItem("token",data.token);
                navigate("/");
            }
        })
    
    }
    
        return (
            <div>
                <ResetForm
                password={password}
                setPassword={setPassword}
                resetPassword={resetPassword}
                
                />
                 <div>
        {error ? (
          <div className="font-medium text-red-600">
            <div className="badge badge-error gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-4 h-4 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
              {error}
            </div>
          </div>
        ) : (
          ""
        )}

        {successMsg ? (
          <div className="badge badge-success gap-2">
            <svg
              xmlns="http://www.w3.org/2001/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-4 h-4 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
            {error}
            {successMsg}
          </div>
        ) : (
          ""
        )}
      </div>
            </div>
        )
    };

    function ResetForm({ password, setPassword, resetPassword}){
        const navigate=useNavigate();
        return (
 <div>
      <div className="justify-center p-2 ">
        <div className="artboard artboard-horizontal phone-7  ">
          <div className=" justify-center">
            <h1 className="text-6xl font-bold text-success ">Password Reset</h1>
            <h1 className="text-4xl font-bold text-Primary  p-8">
              {" "}
              To reset your password
            </h1>
          </div>
          <div>
            <label className=" justify-center p-6">
        
              <div>
                <input
                  id="pass"
                  type="password"
                  placeholder="password"
                  className="input input-bordered input-error w-full max-w-xs m-2"
                  autoComplete="off"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </label>
          </div>
          <div>
            <button
              className="btn btn-active btn-ghost m-2"
              onClick={() => resetPassword()}
            >
             Reset Password
            </button>

            <div>
                <h1 className="text-m">-------Or-------</h1>
            </div>

            <div className="text-m">
       
       <h1>Already have an account?<a href="/" className="font-medium text-red-600 hover:text-accent-500" onClick={()=>navigate("/")}> Sign in</a></h1>
       </div>

          </div>
        </div>
      </div>
    </div>
  );
    }

    export default Reset