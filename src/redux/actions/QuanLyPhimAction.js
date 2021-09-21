import { quanLyPhimService } from "../../services/QuanLyPhimService";
import { SET_LIST_FILMS } from "../types/QuanLyPhimType";

export const getListFilmAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyPhimService.layDanhSachPhim();
      //Đưa lên reducer
      console.log("result", result);

      dispatch({
        type: SET_LIST_FILMS,
        arrFilm: result.data.content,
      });
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};
