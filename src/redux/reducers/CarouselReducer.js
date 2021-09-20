import { SET_CAROUSEL } from "../types/CarouselType";

const stateDefault = {
  arrBanner: [
    {
      maBanner: 1,
      maPhim: 1282,
      hinhAnh: "http://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png",
    },
    // {
    //   maBanner: 2,
    //   maPhim: 1283,
    //   hinhAnh: "http://movieapi.cyberlearn.vn/hinhanh/lat-mat-48h.png",
    // },
    // {
    //   maBanner: 3,
    //   maPhim: 1284,
    //   hinhAnh: "http://movieapi.cyberlearn.vn/hinhanh/cuoc-chien-sinh-tu.png",
    // },
  ],
};

export const CarouselReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_CAROUSEL: {
      state.arrBanner = action.arrBanner;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
