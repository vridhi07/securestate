import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { HandleFormInput } from "../../Redux/actions/authACtions";
const SignUp = () => {
  const [isHiddenPass, setIsHiddenPass] = useState(false);
  const { formInputs } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  return (
    <main className="bg-gradient-to-tr h-screen from-orange-200 to-orange-500">
      <section
        id="login"
        className="pt-32 w-11/12 flex flex-col justify-center page-height max-w-md mx-auto"
      >
        <div className="p-6 bg-sky-100 rounded shadow-md">
          <div className="flex items-center justify-center text-4xl font-black text-sky-900 m-3">
            <h1 className="tracking-wide">Sign Up</h1>
          </div>
          <form id="login_form" className="flex flex-col justify-center">
            <section>
              <label className="text-sm font-medium">Email</label>
              <input
                className="mb-3  py-1.5
          mt-1 block w-full px-2  border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500"
                type="email"
                name="email"
                placeholder="@email.com"
                required
                value={formInputs.email}
                onChange={(e) => dispatch(HandleFormInput(e))}
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
          focus:invalid:border-red-500 focus:invalid:ring-red-500"
                  type="text"
                  name="password"
                  placeholder="password"
                  required
                />
              ) : (
                <input
                  className="mb-3 px-2 py-1.5
          mt-1 block w-full border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500"
                  type="password"
                  name="password"
                  placeholder="password"
                  required
                  value={formInputs.password}
                  onChange={(e) => dispatch(HandleFormInput(e))}
                />
              )}
              <button
                className="absolute bottom-5 right-2"
                onClick={() => setIsHiddenPass(!isHiddenPass)}
                type="button"
              >
                {isHiddenPass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </section>
            <button
              className="px-4 py-1.5 rounded-md shadow-lg bg-sky-600 font-medium text-gray-100 block hover:bg-sky-700 transition duration-300"
              type="submit"
            >
              Login
            </button>
            <section className="mt-3">
              <Link to="/login" className="text-gray-500">
                Login / Sign In
              </Link>
            </section>
          </form>
        </div>
      </section>
    </main>
  );
};

export default SignUp;
