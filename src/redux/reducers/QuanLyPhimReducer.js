import {
  SET_FILM_DANG_CHIEU,
  SET_FILM_SAP_CHIEU,
  SET_LIST_FILMS,
} from "../types/QuanLyPhimType";
import { SET_CHI_TIET_PHIM } from "../types/QuanLyRapType";

const stateDefault = {
  arrFilm: [
    {
      maPhim: 5032,
      tenPhim: "The Bridge 2",
      biDanh: "the-bridge-2",
      trailer: "https://www.youtube.com/embed/c7qrN43PLCA",
      hinhAnh: "http://movieapi.cyberlearn.vn/hinhanh/the-bridge-2_gp01.jpg",
      moTa: "A woman's future mother-in-law hatches a scheme to find a more suitable match for her son. To be continue!!!",
      maNhom: "GP01",
      ngayKhoiChieu: "2021-09-20T23:52:19.56",
      danhGia: 10,
      hot: true,
      dangChieu: true,
      sapChieu: true,
    },
  ],
  dangChieu: true,
  sapChieu: true,
  arrFilmDefault: [],
  filmDetail: {},
};

export const QuanLyPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_LIST_FILMS: {
      state.arrFilm = action.arrFilm;
      state.arrFilmDefault = state.arrFilm;
      return { ...state };
    }
    case SET_FILM_DANG_CHIEU: {
      state.dangChieu = !state.dangChieu;
      state.arrFilm = state.arrFilmDefault.filter(
        (film) => film.dangChieu === state.dangChieu
      );
      return { ...state };
    }
    case SET_FILM_SAP_CHIEU: {
      state.sapChieu = !state.sapChieu;
      state.arrFilm = state.arrFilmDefault.filter(
        (film) => film.sapChieu === state.sapChieu
      );
      return { ...state };
    }
    case SET_CHI_TIET_PHIM: {
      state.filmDetail = action.filmDetail;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
