import { useNavigate } from "react-router";
import { useState } from "react";
import { handleForget } from "../auth/auth";

function Forget() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const ForgetUser = async () => {
    const payload = { email };

    handleForget(payload).then((data) => {
      if (data.error) {
        setError(data.error);
        setSuccessMsg("")
      } else {
        setError("")
        setSuccessMsg(data.message);
        localStorage.setItem("token", data.token);
      }
    });
  };

  return (
    <div>
      
      
      <ForgetForm
       email={email} 
      setEmail={setEmail} 
      ForgetUser={ForgetUser} />


      <div>
        <div>
          {error ? (
            <div>
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
            <div className="badge badge-success gap-2 display:inherit">
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
              {successMsg}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}





function ForgetForm({ email, setEmail, ForgetUser}) {

  return <div>
 <div className="justify-center p-2 ">
        <div className="artboard artboard-horizontal phone-7  ">
          <div className=" justify-center">
            <h1 className="text-9xl font-bold text-success ">Forgot! </h1>
            <h1 className="text-4xl font-bold text-Primary  p-8">
              {" "}
            Your account can be reset 
            </h1>
          </div>
          <div>
            <label className=" justify-center p-6">
              <div>
                <input
                  type="email"
                  placeholder="@mail.com "
                  className="input input-bordered input-error w-full max-w-xs m-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            
            </label>
          </div>
          <div>
            <button
              className="btn btn-active btn-ghost m-2"
              onClick={() => ForgetUser()}
            >
             Click and Check your Email
            </button>

            <div className="text-m">
              <div className="text-m">
                <h1>Click here to <a
                  href="/"
                  className="font-medium text-red-600 hover:text-accent-500"
                >
               login Page
                </a> </h1>
                 
              </div>

            </div>
          </div>
        </div>
      </div>
  </div>;
}




export default Forget