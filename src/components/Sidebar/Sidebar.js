//
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import CustomFilter from "./partials/CustomFilter";

const Sidebar = ({ col }) => {
  return (
    <div className={col}>
      <CustomFilter title={"Sort By"}  selectedData={"sortBy"} type={"radio"}/>
      <CustomFilter title={"Brands"} searchType={2}   selectedData={"brands"} type={"checkbox"}/>
      <CustomFilter title={"Model"} searchType={3}  selectedData={"model"} type={"checkbox"}/>


    </div>
  );
};

export default Sidebar;
