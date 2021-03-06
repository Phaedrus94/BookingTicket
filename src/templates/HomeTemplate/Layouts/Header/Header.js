import React from "react";
import { NavLink } from "react-router-dom";

export default function Header(props) {
  return (
    <header className="text-black-800 bg-opacity-95 bg-white fixed w-full h-16 z-10">
      <div className="container flex justify-between h-16 mx-auto">
        <NavLink
          to="/home"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <img
            src="https://tix.vn/app/assets/img/icons/web-logo.png"
            alt="logo tix.vn"
            className="w-12 h-12"
          />
        </NavLink>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <NavLink
              to="/home"
              className=" text-black flex items-center px-4 -mb-1 border-b-2 border-transparent text-violet-600 border-violet-600"
            >
              Lịch Chiếu
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/home"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-black"
            >
              Cụm Rạp
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/contact"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-black"
            >
              Liên Hệ
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/news"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-black"
            >
              Tin Tức
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="self-center px-8 py-3 rounded">
            {" "}
            <NavLink
              to="/login"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-black"
            >
              Đăng Nhập
            </NavLink>
          </button>
          <button className="self-center px-8 py-3 font-semibold rounded bg-violet-600 text-coolGray-50">
            <NavLink
              to="/register"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-black"
            >
              Đăng Ký
            </NavLink>
          </button>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-coolGray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
