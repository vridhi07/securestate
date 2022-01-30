import React from "react";
import { NavLink } from "react-router-dom";
import colorLogo from "../../constantData/images/Colorlogo_no_background.png";
const Navbar = () => {
  return (
    <nav className="border-b-2 border-gray-200">
      <section className=" max-w-6xl mx-auto py-2 flex justify-between items-center w-[98vw] px-5 ">
        <header>
          <img
            src={colorLogo}
            alt="logo"
            width={130}
            height={60}
            className="object-cover cursor-pointer"
          />
        </header>
        <div className="sm:hidden">hello</div>
        <ul className="sm:flex sm:items-center gap-12 hidden sm:w-[50%] mr-3 ">
          <li>
            <a
              href="#"
              className="text-orange-cus-1 font-bold tracking-wider font-serif text-lg"
            >
              Solution
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-orange-cus-1 font-bold tracking-wider font-serif text-lg"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-orange-cus-1 font-bold tracking-wider font-serif text-lg"
            >
              Platform
            </a>
          </li>
          <li>
            <NavLink
              to={"/login"}
              className="sm:px-8 sm:py-2 bg-orange-cus-1 text-white rounded-md"
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
