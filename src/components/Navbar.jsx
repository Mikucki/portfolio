import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex justify-between items-center py-5 top-0 z-20 bg-primary`}
    >
      <Link
        to="/"
        className="flex items-center gap-2"
        onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}
      >
        <img src={logo} alt="logo" className="h-20 object-contain" />
      </Link>
      <ul className="list-none hidden sm:flex flex-row gap-10">
        {navLinks.map((Link) => (
          <li
            key={Link.key}
            className={`${
              active === Link.title ? "text-white" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => {
              setActive(Link.title);
            }}
          >
            <a href={`#${Link.id}`}>{Link.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu hamburger"
          className="w-[28px] h-[28px] object-contain cursor-pointer "
          onClick={() => {
            setToggle(!toggle);
          }}
        />
        <div
          className={`${
            !toggle ? "hidden" : "flex flex-col"
          } p-6 absolute top-20 black-gradient right-0 mx-4 my-2 min-w[140px]
          z-10 rounded-xl`}
        >
          <ul className="list-none flex flex-col gap-5 text-black">
            {navLinks.map((Link) => (
              <li
                key={Link.key}
                className={`${
                  active === Link.title ? "text-white" : "text-secondary"
                } font-poppins font-medium curson-pointer text-[16px]`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(Link.title);
                }}
              >
                <a href={`#${Link.id}`}>{Link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
