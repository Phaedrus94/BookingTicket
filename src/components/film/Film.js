import React from "react";
import { NavLink } from "react-router-dom";

export default function Film(props) {
  const { film } = props;

  return (
    <div className="mr-2 h-full bg-gray-100 bg-opacity-75 w-72 pb-2 rounded-lg overflow-hidden text-center relative">
      <div
        style={{
          backgroundImage: `url(${film.hinhAnh}) `,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img
          src={film.hinhAnh}
          alt={film.tenPhim}
          className="opacity-0 w-full"
          style={{ height: "300px" }}
        />
      </div>

      <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
        {film.tenPhim}
      </h1>
      <p className="leading-relaxed mb-3 ">
        {film.moTa.length > 100 ? (
          <span>{film.moTa.slice(0, 100)}...</span>
        ) : (
          <span>{film.moTa}</span>
        )}
      </p>
      <NavLink
        to={`/detail/${film.maPhim}`}
        className="text-indigo-500 inline-flex items-center"
      >
        Đặt vé
        <svg
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="M12 5l7 7-7 7" />
        </svg>
      </NavLink>
    </div>
  );
}
