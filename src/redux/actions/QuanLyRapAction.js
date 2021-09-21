import { quanLyRapService } from "../../services/QuanLyRapService";
import { SET_HE_THONG_RAP_CHIEU } from "../types/QuanLyRapType";

export const getListCumRap = () => {
  return async (dispath) => {
    try {
      const result = await quanLyRapService.layDanhSachHeThongRap();
      console.log(result.data.content, "result he thong rap");
      if (result.status === 200) {
        dispath({
          type: SET_HE_THONG_RAP_CHIEU,
          arrCumRap: result.data.content,
        });
      }
    } catch (errors) {
      console.log(errors, "errors");
    }
  };
};
