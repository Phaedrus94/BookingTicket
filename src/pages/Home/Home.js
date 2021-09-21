import React, { useEffect } from "react";
import HomeMenu from "./HomeMenu/HomeMenu";
import { useSelector, useDispatch } from "react-redux";
import MultipleRowSlick from "../../components/RSlick/MultipleRowSlick";
import { getListFilmAction } from "../../redux/actions/QuanLyPhimAction";
import { getListCumRap } from "../../redux/actions/QuanLyRapAction";
export default function Home(props) {
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
  const { arrCumRap } = useSelector((state) => state.QuanLyRapReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const action = getListFilmAction();
    dispatch(action);
    const action2 = getListCumRap();
    dispatch(action2);
  }, []);
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <MultipleRowSlick arrFilm={arrFilm} />
        </div>
      </section>
      <div className="container">
        <HomeMenu arrCumRap={arrCumRap} />
      </div>
    </div>
  );
}
