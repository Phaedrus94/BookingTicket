import React from "react";
import Slider from "react-slick";
import Film from "../film/Film";
import styleSlick from "./MultipleRowSlick.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_FILM_DANG_CHIEU,
  SET_FILM_SAP_CHIEU,
} from "../../redux/types/QuanLyPhimType";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block", left: "-50px" }}
      onClick={onClick}
    ></div>
  );
}
const MultipleRowSlick = (props) => {
  const dispatch = useDispatch();
  const { dangChieu, sapChieu } = useSelector(
    (state) => state.QuanLyPhimReducer
  );
  let activeClassDC = dangChieu === true ? "active-Film" : "none_active_Film";
  let activeClassSC = sapChieu === true ? "active-Film" : "none_active_Film";
  const renderFilm = () => {
    return props.arrFilm.map((item, index) => {
      return (
        <div className={`${styleSlick["width-item"]}`} key={index}>
          <Film film={item} />
        </div>
      );
    });
  };

  const settings = {
    className: "center variable-width",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 1,
    slidesPerRow: 2,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <div>
        <button
          type="button"
          className={`${styleSlick[activeClassDC]}px-8 py-3 font-semibold rounded-full bg-gray-800 text-white  mr-2`}
          onClick={() => {
            const action = { type: SET_FILM_DANG_CHIEU };
            dispatch(action);
          }}
        >
          Đang Chiếu
        </button>
        <button
          type="button"
          className={`${styleSlick[activeClassSC]}px-8 py-3 font-semibold rounded-full bg-gray-800 text-white `}
          onClick={() => {
            const action = { type: SET_FILM_SAP_CHIEU };
            dispatch(action);
          }}
        >
          Sắp Chiếu
        </button>
      </div>

      <Slider {...settings}>
        {renderFilm()}
        {renderFilm()}
        {renderFilm()}
        {renderFilm()}
        {renderFilm()}
        {renderFilm()}
        {renderFilm()}
        {renderFilm()}
        {renderFilm()}
      </Slider>
    </div>
  );
};
export default MultipleRowSlick;
