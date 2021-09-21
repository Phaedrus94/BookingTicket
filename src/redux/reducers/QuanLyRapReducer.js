import { SET_HE_THONG_RAP_CHIEU } from "../types/QuanLyRapType";

const stateDefault = {
  arrCumRap: [],
};

export const QuanLyRapReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_HE_THONG_RAP_CHIEU: {
      state.arrCumRap = action.arrCumRap;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
