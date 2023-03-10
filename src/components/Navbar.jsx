import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
const Navbar = () => {
  const [active, setActive] = useState("");

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
          src={menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer "
        />
      </div>
    </nav>
  );
};

export default Navbar;
