import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import "../../assets/styles/circleRatting.css";
import moment from "moment";
import { Tabs } from "antd";
import { getFilmDetail } from "../../redux/actions/QuanLyRapAction";
import { NavLink } from "react-router-dom";
const { TabPane } = Tabs;
export default function Detail(props) {
  const { filmDetail } = useSelector((state) => state.QuanLyPhimReducer);
  console.log({ filmDetail });
  const dispatch = useDispatch();
  useEffect(() => {
    //lấy thông tin param từ url
    let { id } = props.match.params;
    const action = getFilmDetail(id);
    dispatch(action);
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${filmDetail.hinhAnh})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <CustomCard
        style={{ paddingTop: 150, minHeight: "100vh" }}
        effectColor="#FFF" // required
        color="#FFF" // default color is white
        blur={10} // default blur value is 10px
        borderRadius={0} // default border radius value is 10px
      >
        <div className="grid grid-cols-12 ">
          <div className="col-span-5 col-start-3">
            <div className="grid grid-cols-3">
              <img
                className="col-span-1"
                src={filmDetail.hinhAnh}
                style={{ width: "100%", height: "300" }}
                alt="phimpic"
              />
              <div className="col-span-2 ml-5" style={{ marginTop: "25%" }}>
                <p className="text-sm">
                  Ngày Chiếu:{" "}
                  {moment(filmDetail.ngayKhoiChieu).format("DD.MM.YYYY")}
                </p>
                <p className="text-xl">{filmDetail.tenPhim}</p>
                <p>{filmDetail?.moTa}</p>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className={`c100 p${filmDetail.danhGia * 10} small`}>
              <span>{filmDetail.danhGia * 10}%</span>
              <div className="slice">
                <div className="bar" />
                <div className="fill" />
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="Lịch Chiếu" key="1" style={{ minHeight: 400 }}>
            <div className="mt-20 ml-60 w-2/3 container bg-white px-5 py-5">
              <Tabs tabPosition={"left"}>
                {filmDetail.heThongRapChieu?.map((htr, index) => {
                  return (
                    <TabPane
                      tab={
                        <div>
                          <img
                            src={htr.logo}
                            alt={htr.logo}
                            width={50}
                            className="rounded-full"
                          />
                          {htr.tenHeThongRap}
                        </div>
                      }
                      key={index}
                    >
                      {htr.cumRapChieu?.map((cumRap, index) => {
                        return (
                          <div key={index}>
                            <div className="flex flex-row">
                              <img
                                className="mt-5"
                                style={{ width: 50, height: 50 }}
                                src="https://s3img.vcdn.vn/123phim/2018/10/cinestar-hai-ba-trung-15383833704033.jpg"
                                alt="picCumRap"
                              />
                              <div>
                                <p className="mt-4 ml-2 text-xl font-semibold">
                                  {cumRap.tenCumRap}
                                </p>
                                <p className="text-gray-400 ml-2 -mt-5">
                                  {cumRap.diaChi}
                                </p>
                              </div>
                            </div>
                            <div className="grid grid-cols-4">
                              {/* thông tin lịch chiếu  */}
                              {cumRap.lichChieuPhim
                                ?.slice(0, 10)
                                .map((lichChieu, index) => {
                                  return (
                                    <NavLink
                                      to="/"
                                      key={index}
                                      className="col-span-1"
                                    >
                                      {moment(
                                        lichChieu.ngayChieuGioChieu
                                      ).format("hh:mm A")}
                                    </NavLink>
                                  );
                                })}
                            </div>
                          </div>
                        );
                      })}
                    </TabPane>
                  );
                })}
              </Tabs>
            </div>
          </TabPane>
          <TabPane tab="Thông Tin" key="2" style={{ minHeight: 400 }}>
            Thông Tin
          </TabPane>
          <TabPane tab="Đánh Giá" key="3" style={{ minHeight: 400 }}>
            Đánh Giá
          </TabPane>
        </Tabs>
      </CustomCard>
    </div>
  );
}
