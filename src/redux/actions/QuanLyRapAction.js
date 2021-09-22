import { quanLyRapService } from "../../services/QuanLyRapService";
import {
  SET_CHI_TIET_PHIM,
  SET_HE_THONG_RAP_CHIEU,
} from "../types/QuanLyRapType";

export const getListCumRap = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyRapService.layDanhSachHeThongRap();

      if (result.status === 200) {
        dispatch({
          type: SET_HE_THONG_RAP_CHIEU,
          arrCumRap: result.data.content,
        });
      }
    } catch (errors) {
      console.log(errors, "errors");
    }
  };
};

export const getFilmDetail = (id) => {
  return async (dispatch) => {
    try {
      const result = await quanLyRapService.layThongTinLichChieuPhim(id);
      dispatch({
        type: SET_CHI_TIET_PHIM,
        filmDetail: result.data.content,
      });
    } catch (errors) {
      console.log(errors, "errors");
    }
  };
};
