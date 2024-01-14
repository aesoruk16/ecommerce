//
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { observer } from "mobx-react";
import Portfeil from "../../assets/images/Portfeil.png";
import Profile from "../../assets/images/Profile.png";
import baseStore from "../../stores/base";
import "./Header.css";
import SearchBox from "../Partials/SearchBox/SearchBox";
import { settings } from "../../brandSettings";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <div className="header-container" id="header">
        <div className="container h-100">
          <div className="row align-items-center h-100">
            {/* logo */}
            <div className="col-md-2">
              <span onClick={() => navigate("/")} className="logo">
                Eteration
              </span>
            </div>
            {/* logoend */}
            {/* search */}
            <div className="col-md-4">
              <SearchBox type={1} filter={"name"} />
            </div>
            {/* searchend */}
            {/* userInfo */}
            <div className="col-md-6 d-flex justify-content-end">
              <div className="d-flex align-items-cente cartContainer">
                <img className="cartIcon" alt="cart" src={Portfeil}></img>
                <span className="cartHeader">
                  {baseStore.calculateTotalPrice()}
                  {settings.currency}
                </span>
              </div>
              <div className="d-flex align-items-center">
                <img className="cartIcon" alt="cart" src={Profile}></img>
                <span className="cartHeader">
                 Arif Emre
                </span>
              </div>
            </div>
            {/* userInfo */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default observer(Header);
