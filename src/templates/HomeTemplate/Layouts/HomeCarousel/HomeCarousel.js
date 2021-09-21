import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useSelector, useDispatch } from "react-redux";
import "./HomeCarousel.css";
import { getCarouselAction } from "../../../../redux/actions/CarouselAction";
const contentStyle = {
  height: "800px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  backgroundPosition: "center",
  backgroundSize: "Cover",
  backgroundRepeat: "no-repeat",
};
export default function HomeCarousel(props) {
  const { arrBanner } = useSelector((state) => state.CarouselReducer);
  const dispatch = useDispatch();
  //Tự kích hoạt khi component load
  useEffect(() => {
    //1 action = {type:'',data}
    //2 phải cải middleware: callbackFunction(dispatcj)
    const action = getCarouselAction();
    dispatch(action);
  }, []);
  const renderBanner = () => {
    return arrBanner.map((item, index) => {
      return (
        <div key={index}>
          <div
            style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
          >
            <img
              src={item.hinhAnh}
              className="w-full opacity-0"
              alt={item.hinhAnh}
            />
          </div>
        </div>
      );
    });
  };
  return <Carousel autoplay>{renderBanner()}</Carousel>;
}
