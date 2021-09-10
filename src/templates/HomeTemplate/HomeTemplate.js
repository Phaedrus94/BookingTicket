import { Fragment } from "react";
import { Route } from "react-router";
import Header from "./Layouts/Header/Header";
import HomeCarousel from "./Layouts/HomeCarousel/HomeCarousel";

export const HomeTemplate = (props) => {
  const { Component, ...restProps } = props;
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Header />
            <HomeCarousel />
            <Component {...propsRoute} />
            <footer className="bg-black h-10 text-white">
              Đây là footer template
            </footer>
          </Fragment>
        );
      }}
    />
  );
};
