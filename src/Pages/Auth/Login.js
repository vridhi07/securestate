import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
// import * as authAction from "../../Redux/actions/authACtions";
import { useNavigate } from "react-router-dom";
import { LoginRequest } from "../../Redux/action";
import AuthAlert from "../../Component/Common/AuthAlert";
import { getAuthToken } from "../../Service/localStorage";
const Login = () => {
  const [isHiddenPass, setIsHiddenPass] = useState(false);
  const [formInputs, setFormInputs] = useState({ userName: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginStatus = useSelector((state) => state.Login);
  let token = getAuthToken();
  useEffect(() => {
    if (token && loginStatus.response) {
      navigate("/dashboard");
    }
  }, [loginStatus.response, token]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (formInputs.userName && formInputs.password) {
      const payload = {
        userName: formInputs.userName.trim(),
        password: formInputs.password,
      };
      dispatch(LoginRequest(payload));
    }
  };
  // console.log(`'${formInputs.userName.trim()}'`);
  const handleFormInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormInputs({ ...formInputs, [name]: value });
  };

  return (
    <main className="authPageHeigth h-screen bg-gradient-to-tr from-orange-200 to-orange-500">
      <div className="w-95.5 mx-auto grid grid-cols-10 ">
        <div className="col-span-10 md:col-span-6">
          <div className="grid items-center justify-center">
            <h1 className="pt-4 text-6xl text-white md:pt-44 md:text-8xl">
              Secure <br />
              State .IC
            </h1>
          </div>
        </div>
        <div className="col-span-10 md:col-span-4">
          <section
            id="login"
            className=" mx-auto flex max-w-md flex-col justify-center  py-4 md:py-32"
          >
            <div className="rounded bg-sky-100 p-6 shadow-md">
              <div className="m-3 flex flex-col items-center justify-center text-4xl font-black text-sky-900">
                <h1 className="tracking-wide">Log In</h1>
                {loginStatus.isError.status && (
                  <div>
                    <AuthAlert />
                  </div>
                )}
              </div>
              <form
                id="login_form"
                className="flex flex-col justify-center"
                onSubmit={onSubmit}
              >
                <section>
                  <label className="text-sm font-medium">Username</label>
                  <input
                    className="mb-3  mt-1
          block w-full rounded-md border  border-gray-300 py-1.5 px-2 text-sm placeholder-gray-400 shadow-sm
          focus:border-sky-500
          focus:outline-none
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-blue-500 focus:invalid:ring-blue-500"
                    type="text"
                    name="userName"
                    placeholder="username"
                    required
                    value={formInputs.userName}
                    onChange={handleFormInput}
                  />
                </section>
                <section className="relative">
                  <label className="text-sm font-medium">Password</label>
                  {isHiddenPass ? (
                    <input
                      className="mb-3 mt-1 block
          w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm placeholder-gray-400 shadow-sm
          focus:border-sky-500
          focus:outline-none
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-blue-500 focus:invalid:ring-blue-500"
                      type="text"
                      name="password"
                      placeholder="password"
                      required
                      value={formInputs.password}
                      onChange={handleFormInput}
                    />
                  ) : (
                    <input
                      className="mb-3 mt-1 block
          w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm placeholder-gray-400 shadow-sm
          focus:border-sky-500
          focus:outline-none
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-blue-500 focus:invalid:ring-blue-500"
                      type="password"
                      name="password"
                      placeholder="password"
                      required
                      value={formInputs.password}
                      onChange={handleFormInput}
                    />
                  )}
                  <button
                    className="absolute bottom-5 right-2"
                    onClick={() => setIsHiddenPass(!isHiddenPass)}
                    type="button"
                  >
                    {isHiddenPass ? (
                      <AiOutlineEyeInvisible />
                    ) : (
                      <AiOutlineEye />
                    )}
                  </button>
                </section>
                <button
                  className="block rounded-md bg-sky-600 px-4 py-1.5 font-medium text-gray-100 shadow-lg transition duration-300 hover:bg-sky-700"
                  type="submit"
                  disabled={loginStatus.isLoading}
                >
                  {loginStatus.isLoading ? "Logging in ...." : " Login"}
                </button>
                <section className="mt-3">
                  <Link to="/signup" className="text-green-500 underline">
                    Create New Account
                  </Link>
                </section>
              </form>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Login;
