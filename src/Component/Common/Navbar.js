import React from "react";
import { NavLink } from "react-router-dom";
import colorLogo from "../../constantData/images/Colorlogo_no_background.png";
const Navbar = () => {
  return (
    <nav className="border-b-2 border-gray-200">
      <section className=" mx-auto flex w-[98vw] max-w-6xl items-center justify-between py-2 px-5 ">
        <header>
          <img
            src={colorLogo}
            alt="logo"
            width={130}
            height={60}
            className="cursor-pointer object-cover"
          />
        </header>
        <div className="sm:hidden">hello</div>
        <ul className="mr-3 hidden gap-12 sm:flex sm:w-[50%] sm:items-center ">
          <li>
            <a
              href="#"
              className="text-orange-cus-1 font-serif text-lg font-bold tracking-wider"
            >
              Solution
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-orange-cus-1 font-serif text-lg font-bold tracking-wider"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-orange-cus-1 font-serif text-lg font-bold tracking-wider"
            >
              Platform
            </a>
          </li>
          <li>
            <NavLink
              to={"/login"}
              className="bg-orange-cus-1 rounded-md px-5 py-2 text-white"
            >
              LOG IN
            </NavLink>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
