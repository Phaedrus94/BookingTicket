import React from "react";
import HomeMenu from "./HomeMenu/HomeMenu";

import { useSelector, useDispatch } from "react-redux";
import Film from "../../components/film/Film";

import MultipleRowSlick from "../../components/RSlick/MultipleRowSlick";
export default function Home(props) {
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
  const renderFilm = () => {
    return arrFilm.map((film, index) => {
      return <Film key={index} />;
    });
  };
  return (
    <div className="container">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <MultipleRowSlick arrFilm={arrFilm} />
          {/* <div className="flex flex-wrap -m-4">{renderFilm()} </div> */}
        </div>
      </section>

      <HomeMenu />
    </div>
  );
}
