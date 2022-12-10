import { useState } from "react";

import { close, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <span className="text-white text-[32px]">MT</span>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} text-white`}
          >
            <a href={`#${nav.id}`} className="hover:border-b-2">{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
          <img 
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />
          <div 
            className={`${toggle ? 'flex' : 'hidden'} z-50 p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] sidebar`}
          >
            <ul className="list-none flex flex-col justify-end items-center flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] text-black ${index === navLinks.length - 1 ? "mb-0" : "mb-4"} text-white`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
      </div>
    </nav>
  )
}

export default Navbar
