import React, { Fragment, useState } from "react";
import { Tabs, Radio, Space } from "antd";
import { quanLyPhimService } from "../../../services/QuanLyPhimService";
import { NavLink } from "react-router-dom";
import moment from "moment";
const { TabPane } = Tabs;
export default function HomeMenu(props) {
  const [state, setState] = useState({ tabPosition: "left" });
  const changeTabPosition = (e) => {
    setState({ tabPosition: e.target.value });
  };
  console.log("propsCumRap", props);
  const { tabPosition } = state;
  const renderCumRap = () => {
    return props.arrCumRap?.map((item, index) => {
      return (
        <TabPane
          tab={<img src={item.logo} className="rounded-full" width="50" />}
          key={index}
        >
          <Tabs tabPosition={tabPosition}>
            {item.lstCumRap?.slice(0, 6).map((cumRap, index) => {
              return (
                <TabPane
                  tab={
                    <div style={{ width: "300px", display: "flex" }}>
                      <img
                        src="https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png"
                        width="50"
                      />
                      <div className="text-left ml-2">{cumRap.tenCumRap}</div>
                    </div>
                  }
                  key={index}
                >
                  {/* Load danh sách phim  */}
                  {cumRap.danhSachPhim.slice(0, 4).map((film, index) => {
                    return (
                      <Fragment key={index}>
                        <div className="my-5">
                          <div style={{ display: "flex" }}>
                            <img
                              style={{ height: "75px", width: "75px" }}
                              src={film.hinhAnh}
                              alt={film.tenPhim}
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://picsum.photos/75/75";
                              }}
                            />
                            <div className="ml-2">
                              <h1 className="text-black-300 ml-2 text-xl">
                                {film.tenPhim}
                              </h1>
                              <p className="ml-2">{cumRap.diaChi}</p>
                              <div className="grid grid-cols-5 gap-5">
                                {film.lstLichChieuTheoPhim
                                  ?.slice(0, 10)
                                  .map((lichChieu, index) => {
                                    return (
                                      <NavLink
                                        to="/"
                                        key={index}
                                        className="ml-2"
                                      >
                                        {moment(
                                          lichChieu.ngayChieuGioChieu
                                        ).format("hh:mm A")}
                                      </NavLink>
                                    );
                                  })}
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                      </Fragment>
                    );
                  })}
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };

  return (
    <div>
      <Tabs tabPosition={tabPosition}>{renderCumRap()}</Tabs>
    </div>
  );
}
