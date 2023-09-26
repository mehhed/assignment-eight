import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenu } from "react-icons/hi";
import { useState } from "react";

const Nav = () => {
  const [navbar, setnavbar] = useState(false);
  return (
    <div className="sticky top-0 py-4 z-50 font-bold mt-5 max-w-[1600px] mx-auto lg:px-[140] px-5 md:px-10">
      <div className="flex justify-between items-center h-full w-full">
        <div className="flex-1">
          <img
            src="https://raw.githubusercontent.com/mehhed/assignment-img/main/Logo.png"
            alt=""
            className="max-w-[180px]"
          />
        </div>
        <div
          onClick={() => {
            setnavbar(!navbar);
          }}
          className="lg:hidden cursor-pointer text-2xl flex justify-end flex-1 text-black">
          {navbar ? <AiOutlineClose /> : <HiOutlineMenu />}
        </div>
        <div
          className={`lg:flex  flex-1 ${
            navbar ? "block" : "hidden"
          } absolute lg:static top-full left-0 w-full bg-[#ffffff] p-2 lg:bg-transparent justify-end z-40`}>
          <ul className="flex flex-col lg:flex-row lg:justify-end justify-start gap-x-5 lg:items-center text-black">
            <li className="lg:my-1 my-1">
              <NavLink
                to={`/`}
                onClick={() => {
                  setnavbar(false);
                }}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active text-[#FF444A] border-b-2 border-[#FF444A]"
                    : isPending
                    ? "pending"
                    : "block lg:inline-block"
                }>
                Home
              </NavLink>
            </li>
            <li className="lg:my-1 my-1">
              <NavLink
                onClick={() => {
                  setnavbar(false);
                }}
                to={`/Donation`}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active text-[#FF444A] border-b-2 border-[#FF444A]"
                    : isPending
                    ? "pending"
                    : ""
                }>
                Donation
              </NavLink>
            </li>
            <li className="lg:my-1 my-1">
              <NavLink
                onClick={() => {
                  setnavbar(false);
                }}
                to={`/Statistics`}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active text-[#FF444A] border-b-2 border-[#FF444A]"
                    : isPending
                    ? "pending"
                    : ""
                }>
                Statistics
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
