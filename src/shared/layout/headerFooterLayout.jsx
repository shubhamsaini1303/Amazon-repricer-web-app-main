import React from "react";
import Header from "./header";
import { Outlet } from "react-router-dom";

const HeaderFooterLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default HeaderFooterLayout;
