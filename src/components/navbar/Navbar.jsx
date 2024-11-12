import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiSolidCoffeeBean } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import "./navbar.css";
import { StoreContext } from "../../global-context/GlobalContext";

function Navbar() {
  const { cartItems, setCartItems } = useContext(StoreContext);
  const [search, setSearch] = useState(false);
  const [menu, setMenu] = useState(false);
  // handleSearch
  const handleSearch = () => {
    setSearch(!search);
  };

  // showMenu
  const showMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="py-3 bg-slate-100 px-4 md:px-20 sticky top-0 z-50">
      <div className="container flex justify-between relative">
        <div className="logo">
          <Link
            to={"/"}
            className="flex items-center font-kaushan text-[#906347] font-semibold text-xl"
          >
            <span className="text-3xl  text-[#563b2a]">
              <BiSolidCoffeeBean />
            </span>
            <span>Coffee</span>
          </Link>
        </div>

        <ul className="hidden md:flex gap-4  md:gap-6 lg:gap-10">
          <li className="text-[1.1rem] font-inter hover:text-[#0eadc6] transition-all duration-300 font-semibold">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="text-[1.1rem] font-inter hover:text-[#0eadc6] transition-all duration-300 font-semibold">
            <NavLink to={"/products"}>Products</NavLink>
          </li>
          <li className="text-[1.1rem] font-inter hover:text-[#0eadc6] transition-all duration-300 font-semibold">
            <NavLink to={"/cart"}>Cart</NavLink>
          </li>
          <li className="text-[1.1rem] font-inter hover:text-[#0eadc6] transition-all duration-300 font-semibold">
            <NavLink to={"/order"}>Order</NavLink>
          </li>
          <li className="text-[1.1rem] font-inter hover:text-[#0eadc6] transition-all duration-300 font-semibold">
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li className="text-[1.1rem] font-inter hover:text-[#0eadc6] transition-all duration-300 font-semibold">
            <NavLink to={"/signin"}>Sign In</NavLink>
          </li>
        </ul>
        <div className="">
          <div className="flex gap-4 items-center relative ">
            <div className="absolute -left-48 -top-1">
              {search && (
                <input
                  type="search"
                  name="search"
                  id=""
                  placeholder="Search product"
                  className="px-3 py-1.5 border rounded-3xl text-sm shadow-sm focus:outline-none border-gray-400 "
                />
              )}
            </div>
            <div className="">
              <CiSearch
                onClick={handleSearch}
                size={25}
                className="cursor-pointer hover:text-[#0eadc6] transition-all duration-300"
              />
            </div>

            <Link to={"signin"}>
              <FaRegUser
                size={20}
                className="cursor-pointer hover:text-[#0eadc6] transition-all duration-300"
              />
            </Link>
            <Link to={"cart"} className="relative">
              <IoCartOutline
                size={25}
                className="cursor-pointer hover:text-[#0eadc6] transition-all duration-300"
              />
              <p className="w-[1.2rem] h-[1.2rem] md:flex justify-center items-center rounded-full bg-red-500 text-center text-white absolute text-[.75rem] -right-4 top-[-11px]">
                {cartItems.length}
              </p>
            </Link>

            {/* responsive icon*/}
            <div className="ml-2 cursor-pointer relative block md:hidden">
              <button type="button" onClick={showMenu}>
                {menu ? (
                  <IoMdClose size={27} />
                ) : (
                  <HiBars3CenterLeft size={27} className="" />
                )}
              </button>
            </div>
          </div>
          {/* responsive menu */}
          {menu && (
            <div className="block sm:hidden absolute -right-4 h-[92vh] top-[2.8rem] z-10 bg-slate-100 w-[150px] ">
              <ul className="flex-col text-center  flex gap-4  md:gap-6 lg:gap-10 mt-3">
                <li className="text-[1.1rem] font-inter hover:text-[#0eadc6] transition-all duration-300 font-semibold">
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li className="text-[1.1rem] font-inter hover:text-[#0eadc6] transition-all duration-300 font-semibold">
                  <NavLink to={"/products"}>Products</NavLink>
                </li>
                <li className="text-[1.1rem] font-inter hover:text-[#0eadc6] transition-all duration-300 font-semibold">
                  <NavLink to={"/cart"}>Cart</NavLink>
                </li>
                <li className="text-[1.1rem] font-inter hover:text-[#0eadc6] transition-all duration-300 font-semibold">
                  <NavLink to={"/order"}>Order</NavLink>
                </li>
                <li className="text-[1.1rem] font-inter hover:text-[#0eadc6] transition-all duration-300 font-semibold">
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li className="text-[1.1rem] font-inter hover:text-[#0eadc6] transition-all duration-300 font-semibold">
                  <NavLink to={"/signin"}>Sign In</NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
