import ActionButton from "antd/lib/modal/ActionButton";

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
};

export const QuanLyPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
