import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
// import * as authAction from "../../Redux/actions/authACtions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isHiddenPass, setIsHiddenPass] = useState(false);
  const [formInputs, setFormInputs] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (formInputs.email && formInputs.password) {
      localStorage.setItem("Auth Token", "hello");
      navigate("/dashboard");
    }
  };

  const handleFormInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormInputs({ ...formInputs, [name]: value });
  };

  return (
    <main className="bg-gradient-to-tr authPageHeigth h-screen from-orange-200 to-orange-500">
      <div className="w-95.5 grid grid-cols-10 mx-auto ">
        <div className="col-span-10 md:col-span-6">
          <div className="grid justify-center items-center">
            <h1 className="text-white md:pt-44 md:text-8xl text-6xl pt-4">
              Secure <br />
              State .IC
            </h1>
          </div>
        </div>
        <div className="col-span-10 md:col-span-4">
          <section
            id="login"
            className=" py-4 md:py-32 flex flex-col justify-center  max-w-md mx-auto"
          >
            <div className="p-6 bg-sky-100 rounded shadow-md">
              <div className="flex items-center justify-center text-4xl font-black text-sky-900 m-3">
                <h1 className="tracking-wide">Log In</h1>
              </div>
              <form
                id="login_form"
                className="flex flex-col justify-center"
                onSubmit={onSubmit}
              >
                <section>
                  <label className="text-sm font-medium">Email</label>
                  <input
                    className="mb-3  py-1.5
          mt-1 block w-full px-2  border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-blue-500 focus:invalid:ring-blue-500"
                    type="email"
                    name="email"
                    placeholder="@email.com"
                    required
                    value={formInputs.email}
                    onChange={handleFormInput}
                  />
                </section>
                <section className="relative">
                  <label className="text-sm font-medium">Password</label>
                  {isHiddenPass ? (
                    <input
                      className="mb-3 px-2 py-1.5
          mt-1 block w-full border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
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
                      className="mb-3 px-2 py-1.5
          mt-1 block w-full border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
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
                  className="px-4 py-1.5 rounded-md shadow-lg bg-sky-600 font-medium text-gray-100 block hover:bg-sky-700 transition duration-300"
                  type="submit"
                >
                  Login
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
