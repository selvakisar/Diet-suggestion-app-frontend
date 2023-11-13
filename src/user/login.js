import { useState } from "react";
import { handleLogin } from "../auth/auth";
import { useNavigate } from "react-router";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const LoginUser = async () => {
    const payload = { email, password };

    handleLogin(payload).then((data) => {
      if (data.error) {
        setError(data.error);
        setSuccessMsg("");
        console.log(data.error);
      } else {
        setError("");
        setSuccessMsg(data.message);
        console.log(data.message);
        localStorage.setItem("token", data.token);
      }
    });
  };

  return (
    <div>
      <LoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        LoginUser={LoginUser}
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
            <svg xmlns="http://www.w3.org/2000/svg"
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
  );
};

function LoginForm({ email, setEmail, password, setPassword, LoginUser }) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="justify-center p-2 ">
        <div className="artboard artboard-horizontal phone-7  ">
          <div className=" justify-center">
            <h1 className="text-9xl font-bold text-success ">Login now!</h1>
            <h1 className="text-4xl font-bold text-Primary  p-8">
              {" "}
              To Access Your Account
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
              onClick={() => LoginUser()}
            >
              Login
            </button>

            <div className="text-m">
              <div className="text-m">
                <a
                  href="/forgetpass"
                  className="font-medium text-red-600 hover:text-accent-500
          "
                >
                  Forgot your password?
                </a>
              </div>
              <div className="text-s">
                <h1>Don't have an account <a
                  href="/signup"
                  className="font-medium text-purple-600 hover:text-accent-500"
                  onClick={() => navigate("/signup")}
                >
              Sign up
                </a></h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;

