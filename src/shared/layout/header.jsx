import React, { useState } from "react";
import { CiCircleQuestion } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { headerMenu } from "../utils/menuItems";
import { Link } from "react-router-dom";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (tab) => {
    setActiveMenu(tab);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <div className="px-4 flex  justify-between border-4 items-center border-b border-[#F2F2F2]">
      <div className="flex gap-7 items-center">
        <div className="font-semibold leading-6 text-[#27303F] text-xl">
          LOGO
        </div>
        <div className="flex items-center">
          {headerMenu?.map((menu, index) => (
            <button
              key={index}
              onClick={() => handleMenuClick(menu?.name)}
              className={`${
                activeMenu === menu?.name
                  ? "text-white bg-[#775DDE]"
                  : "text-[#404040]"
              } text-xs font-medium leading-[14px] items-center text-center py-[12.5px] px-[22px]`}
            >
              {menu?.name}
            </button>
          ))}
        </div>
      </div>
      <div className="hidden lg:flex gap-4 lg:items-center items-center">
        <button
          type="button"
          className="relative shrink-0 rounded-full bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
        >
          <CiCircleQuestion className="h-6 w-6" color="#404040" />
        </button>
        <button
          type="button"
          className="relative shrink-0 rounded-full bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
        >
          <IoSettingsOutline className="h-[22px] w-[22px]" color="#404040" />
        </button>
        <button
          type="button"
          className="relative shrink-0 rounded-full bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
        >
          <IoMdNotificationsOutline className="w-6 h-6" color="#404040" />
        </button>
        <div className="relative shrink-0 border-l border-[#E2E8F0] pl-4">
          <button
            onClick={toggleProfileDropdown}
            className="relative flex rounded-full bg-white text-sm focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
          >
            <span className="absolute -inset-1.5" />
            <span className="sr-only">Open user menu</span>
            <img
              alt="User Image"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="size-7 rounded-full"
            />
          </button>
          {isProfileDropdownOpen && (
            <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5">
              <Link to={"/my-profile"}>
              <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Your Profile
              </a>
              </Link>
              <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Settings
              </a>
              <Link to={"/sign-in"}>
              <a  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Sign out
              </a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

